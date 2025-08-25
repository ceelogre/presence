import { Metadata } from "next";
/**
 * Beyond Identity article page
 * @returns {JSX.Element}
 */
const title = "How to install Beyond Identity";
const description = "How to install Beyond Identity on Linux Kali"

export const metadata: Metadata = {
  title: {
    template: `%s - ${title}`,
    default: title
  },
  description,
  icons: {
    icon: '/eyelids.svg',
  },
};
const BiArticle = () => {
  return (
    <div>
      
    <h1>
    Installing Beyond Identity on Kali Linux.
    </h1>
    <p>
      A little while ago, our IT department moved away from Okta authentication to Beyond Identity. This paused a problem to me; I use Kali as my primary OS (not that I know anything about CyberSec but you never know what you can learn) and it turns out BI doesn’t support Kali (at least as of writing this article). I attempted to install it but it couldn’t run. At this point, I was left hopeless with nothing but to switch back to Mac for work.</p>
      <p>

      After over a month, when I had almost given up on the issue I went through BI help articles (for like the tenth time) and noticed that they mentioned that you can “force to install it if you have a compatible distro”. I thought for a second and said, well, Kali is based on debian and since BI supports Ubuntu, it might work for me too. I went ahead and installed by changing the <code>/apt/sources</code> distro and release from <code>kali rolling</code> to <code>ubuntu focal</code>. The installation worked but of course when I started the app, it threw some errors and I ignored them.</p> 
      <p>I then went ahead and imported the keys from my other device, attempted to authenticate again and voila! It worked.
    </p>
  </div>

    )
}
export default BiArticle