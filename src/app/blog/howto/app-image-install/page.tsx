import { createMetadata } from '@/lib/metadata';
import TerminalBlock from '@/components/TerminalBlock'

export const metadata = createMetadata({
  title: "Installing an app image ",
  description: "How to install an app image file ",
});

const solution = "Here are the steps:"
const AppImage = () => {
    return (
        <div>
      <h2> How to install an App Image file</h2>
            <p>
                After the (successful) marketing, I was convinced to try out Cursor editor. Upon reaching their site, the linux version was an <code>.Appimage</code> file. Now this looked familiar but because I don&apos;t do a great job at documenting my work, I didn&apos;t know what do with it. </p><p>Quick search revealed that I can just make it executable <code>(chmod a+x)</code> then run it from the terminal. This is of course cumbersome, it keeps the terminal running unless you run it in the background which is not ideal too. I kept searching for a way to launch it from the menu.</p>
                I learned of multiple ways to do this (some of which involes moving it to the shared directory and manually creating a <code>.desktop</code> entry) but I ultimately landed on the best approach in my opinion. As it turns out, you can extract the content of a <code>.appimage</code> file by running 
                <TerminalBlock>./name.appImage --extract-image.</TerminalBlock> Think of this as unzipping a .zip file, so you&apos;ll get all the content from the image which as it turns out, has EVERYTHING you need to run it from the menu; all you have to do is pointing it to the right path. 
                <p>{solution}</p>
                    <ol>
                        <li> move the extract directory (typically called <code>squashfs-root</code> to a convenient location such as /opt. </li>
                    <li> create a symbolick link using <code>ln -s /opt/cursor/AppRun /usr/bin/code</code> </li>
                    <li> Copy the .desktop to /usr/share/applications</li>
                    <li> update the desktop manager using <code>sudo update-desktop-database</code></li>
                    </ol>
                    <p>You are now able to run the app by searching it from the launch menu.</p>
<p><b>Note:</b> For step 1, I initially thought of /usr/share but in the process I learned that the latter is usually for standard linux filesystem hierarchy (FHS), docs, man pages and desktop entries while the former is for add-ons (think tomcat). </p>

                </div>
    )
}


export default AppImage