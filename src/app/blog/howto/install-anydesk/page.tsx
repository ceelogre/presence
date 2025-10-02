import styles from './anydesk.module.css';
import TerminalBlock from '@/components/TerminalBlock'
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: "How to install Anydesk",
  description: "How to install Anydesk without apt package manager",
});

export default function AnyDeskArticle() {
    const addKeyCommand = `wget -qO - https://keys.anydesk.com/repos/DEB-GPG-KEY | apt-key add -`
    const addKeyCommandSecure = `wget -qO - https://keys.anydesk.com/repos/DEB-GPG-KEY | gpg --dearmor | sudo tee /usr/share/keyrings/anydesk-archive-keyring.gpg > /dev/null`
    const addSourceCommand = `echo "deb [signed-by=/usr/share/keyrings/anydesk-archive-keyring.gpg] https://deb.anydesk.com/ all main" | sudo tee /etc/apt/sources.list.d/anydesk-stable.list`
    const updateCommand = `sudo apt update`
    const installCommand = `sudo apt install anydesk`
    const purgeCommand = `sudo apt purge anydesk`
    const removeCommand = `sudo rm /etc/apt/sources.list.d/anydesk-stable.list`
    const removeKeyCommand = `sudo rm /usr/share/keyrings/anydesk-archive-keyring.gpg`
    return (
        <div className={styles.container}>
            <h1>How to install Anydesk without apt package manager</h1>
            <p>Most softwares are available for linux; you just need to know the right way to install them. One of the quickest way to do it is by using a repository manager like apt for .deb and yum/dnf for .rpm</p>
            <p>In this demo, I&apos;m going to install Anydesk.</p>
            <p>Anydesk is a remote desktop software that allows you to control your computer from another device. It&apos;s available for Linux, Windows, and Mac but the problem is that it&apos;s not available in the default repositories for all distributions (after all they have limited resources and there&apos;s only so much time/effort they can allocate to supporting every distro in existence).</p>
            <p>The first thing to do is to add the software key which allows the operating system to verify the authenticity of the publisher and many other things I do not know.</p>
            <p>You may see online a lot of lines like this: </p>
            <TerminalBlock>
                {addKeyCommand}
            </TerminalBlock>
            <p>However, apt-key is now depreceated so this might cause you problems in the future. Use this instead:</p>
            <TerminalBlock>
               {addKeyCommandSecure}
            </TerminalBlock>
            <p>This will connect to anydesk server, download the keyring and add it in /usr/share/keyrings while at the sametime discarding the output (tee effect) so you don&apos;t see it on stdout (most likely your terminal)</p>
            <p>After this, add the server to the sources so that the package manager knows where to look:</p>
            <TerminalBlock>
                {addSourceCommand}
            </TerminalBlock>
            <p>You can see that we explicitly add where to find the keyring before specifying what url to hit</p>
            <p>After this, update the repo manager so that it hits the new server</p>
            <TerminalBlock>
                {updateCommand}
            </TerminalBlock>
            <p>If you inspect the output, there should be an entry for anydesk that&apos;s similar to</p>
            <TerminalBlock>
                Hit:2 http://deb.anydesk.com all InRelease
            </TerminalBlock>
            <p>From here, install anydesk</p>
            <TerminalBlock>
                {installCommand}
            </TerminalBlock>
            <p>Now the package manager will know where to look for this package and install it.</p>
            <h2>Bonus</h2>
            <p>If you ever need to uninstall it, you can do so with</p>
            <TerminalBlock>
                {purgeCommand}
            </TerminalBlock>
            <p>Remove the entry from sources.list</p>
            <TerminalBlock>
                {removeCommand}
            </TerminalBlock>
            <p>If for some reason the GPG key is not removed automatically, you can also remove it manually</p>
            <TerminalBlock>
                {removeKeyCommand}
            </TerminalBlock>
            <p>This will remove the package and all its dependencies.</p>
        </div>
    );
}
