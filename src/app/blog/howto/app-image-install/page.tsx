import { createMetadata } from '@/lib/metadata';
import TerminalBlock from '@/components/TerminalBlock'

export const metadata = createMetadata({
  title: "Installing an app image ",
  description: "How to install an app image file ",
});

const AppImage = () => {
    return (
        <div>
            <p>
                After the (successful) marketing, I wanted to try Cursor editor. Upon reaching their site, the linux version was an .AppImage. Now this looked familiar but just how I don't document my work, I didn't know what do with it. Quick search revealed that I can just make it executable (chmod a+x) then run it from the terminal. This is ofcourse cumbersome, it keeps the terminal running unless you run it in the background which is not ideal too. I looked for a way to launch it from the menu.
                I learned of multiple ways to do this (some of which involes moving it to the shared directory and manually creating a .desktop entry) but ultimately I landed on the best approach in my opinion. As it turns out, you can extract the content of a .appimage by running ./name.appImage --extract-image. Think of this as unzipping .zip file, so you'll get all the content from image which as it turns out, has EVERYTHING you need to run it from the menu; all you have to do is pointing it in the right direction."

const solution = "move the extract directory (typically called squashfs-root to a convenient location such as /opt. I initially thought of /usr/share but in the process I learned that the latter is usually for standard linux filesystem hierarchy (FHS), docs, man pages and desktop entries while the former is for add-ons (think tomcat) 2. create a symbolick link using ln -s /opt/cursor/AppRun /usr/bin/code 3. Copy the .desktop to /usr/share/applications 4. update the icon 5. update the desktop manager using sudo update-desktop-database."

            </p>
        </div>
    )
}