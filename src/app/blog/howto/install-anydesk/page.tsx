import styles from './anydesk.module.css';

export default function AptArticle() {
    return (
        <div className={styles.container}>
            <h1>How to install a software with apt package manager</h1>
            <p>Most softwares are avaiable for linux; you just need to know the right way to install them. One of the quickest way to do it is by using a repository manager like apt for .deb and yum/dnf for .rpm</p>
            <p>In this demo, I&apos;m going to install Anydesk.</p>
            <p>The first thing to do is to add the software fingerprint which allows the operating system to verify the authenticity of the publisher and many other things I do not know.</p>
            <p>You may see online a lot of lines like this: </p>
            <pre className={styles.code}>
                <code>echo &quot;deb http://deb.anydesk.com/ all main&quot; | sudo tee /etc/apt/sources.list.d/anydesk-stable.list</code>
            </pre>
            <p>However, apt-key is now depreceated so this might cause you problems in the future. Use this:</p>
            <pre className={styles.code}>
                <code>wget -qO - https://keys.anydesk.com/repos/DEB-GPG-KEY | gpg --dearmor | sudo tee /usr/share/keyrings/anydesk-archive-keyring.gpg &gt; /dev/null</code>
            </pre>
            <p>This will connect to anydesk server, download the keyring and add it in /usr/share/keyrings while at the sametime discarding the output (tee effect) so you don&apos;t see it on stdout (most likely your terminal)</p>
            <p>After this, add the server to the sources:</p>
            <pre className={styles.code}>
                <code>echo &quot;deb [signed-by=/usr/share/keyrings/anydesk-archive-keyring.gpg] https://deb.anydesk.com/ all main&quot; | sudo tee /etc/apt/sources.list.d/anydesk-stable.list</code>
            </pre>
            <p>You can see that we explicitly add where to find the keyring before specifying what url to hit</p>
            <p>After this, update the repo manager so that it hits the new server</p>
            <pre className={styles.code}>
                <code>sudo apt update</code>
            </pre>
            <p>If you inspect the output, there should be an entry for anydesk that&apos;s similar to</p>
            <pre className={styles.code}>
                <code>Hit:2 http://deb.anydesk.com all InRelease</code>
            </pre>
            <p>From here, install anydesk</p>
            <pre className={styles.code}>
                <code>sudo apt install anydesk</code>
            </pre>
            <p>Now the package manager will know where to look for this package and install it.</p>
            <h3>Bonus</h3>
            <p>If you ever need to uninstall it, you can do so with</p>
            <pre className={styles.code}>
                <code>sudo apt purge anydesk</code>
            </pre>
            <p>Remove the entry from sources.list</p>
            <pre className={styles.code}>
                <code>sudo rm /etc/apt/sources.list.d/anydesk-stable.list</code>
            </pre>
            <p>If for some reason the GPG key is not removed automatically, you can also remove it manually</p>
            <pre className={styles.code}>
                <code>sudo rm /usr/share/keyrings/anydesk-archive-keyring.gpg</code>
            </pre>
            <p>This will remove the package and all its dependencies.</p>
        </div>
    );
}
