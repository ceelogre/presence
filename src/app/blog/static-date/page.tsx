import TerminalBlock from "@/components/TerminalBlock"
import Image from "next/image"
import clientFooterImage from "./assets/client-footer.png"
import ServerFooterImage from './assets/server-footer.png'
import styles from "./page.module.css"

const StaticDate = () => {
    return (
        <div>
            <p>I was browsing Twitter (Yes! Twitter) on Jan 1, 2026 then came across the usual tweet of updating the year. I thought I have this covered but I quickly checked my site only to find out that it still shows 2025. It was a bit confusing and so, I checked the codebase to see how I&apos;m getting the year.</p>
            <TerminalBlock>
                new Date().getFullyear()
            </TerminalBlock>
            <p>This seemed fine so, why isn&apos;t it working? After a bit of research I found out that it&apos;s related to rendering. Since this is a static site, I always create a new build for a deployment which means everything server side remains the same until the next build. Since there was no deployment since that morning (Jan 1, 00:00) there was no update to the footer component given that it was being rendered on the server side.</p>
            <div className={styles.imageContainer} style={{ aspectRatio: `${ServerFooterImage.width} / ${ServerFooterImage.height}`}}>
                <Image 
                    src={ServerFooterImage}
                    fill
                    alt="A server footer component image"
                    sizes="100vw"
                    style={{ objectFit: 'contain'}}
                />
            </div>
            There are multiple ways this could have been solved, the most obvious being to trigger another build but the &quot;React way&quot; was to turn this into a client side component
            <div className={styles.imageContainer} style={{ aspectRatio: `${clientFooterImage.width} / ${clientFooterImage.height}` }}>
                <Image 
                    src={clientFooterImage} 
                    alt="A client footer component image"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <p>This way whenever a user loads the page the useEffect will get the current year and apply. Ofcourse there are other small details that I ignored like waiting for hydration to avoid a mismatch match between the html build and React DOM attachment but the main goal was achieved.</p>
        </div>
    )
}

export default StaticDate