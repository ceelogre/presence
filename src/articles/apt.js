import React from 'react-dom'

const AptArticle = () = > {
    return (
        <div>
        <h1>How to install a software with apt package manager</h1>
        <p>Most softwares are avaiable for linux; you just need to know the right way to install them. One of the quickest way to do it is by using a repository manager like apt for .deb and yum/dnf for .rpm</p>
        <p>In this demo, I'm going to install Anydesk.</p>
        <p>The first thing to do is to add the software fingerprint which allows the operating system to verify the authenticity of the publisher and many other things I do not know.</p>
        <p>You may see online a lot of lines like this: </p>
        <code> echo "deb http://deb.anydesk.com/ all main" | sudo tee /etc/apt/sources.list.d/anydesk-stable.list
        </code>
        <p>However, apt-key is now depreceated so this might cause you problems in the future. Use this:</p>
        <code>wget -qO - https://keys.anydesk.com/repos/DEB-GPG-KEY | gpg --dearmor | sudo tee /usr/share/keyrings/anydesk-archive-keyring.gpg >/dev/null
        </code>
        <p>This will connect to anydesk server, download the keyring and add it in /usr/share/keyrings while at the sametime discarding the output (tee effect) so you don't see it on stdout (most likely your terminal)</p>
        <p>After this, add the server to the sources:</p>
        <code>echo "deb [signed-by=/usr/share/keyrings/anydesk-archive-keyring.gpg] https://deb.anydesk.com/ all main" | sudo tee /etc/apt/sources.list.d/anydesk-stable.list
        </code>
        <p>You can see that we explicitly add where to find the keyring before specifying what url to hit</p>
        <p>After this, update the repo manager so that it hits the new server</p>
        <code>sudo apt update</code>
        <p>If you inspect the output, there should be an entry for anydesk that's similar to</p>
        <code>Hit:2 http://deb.anydesk.com all InRelease </code>
        <p>From here, install anydesk</p>
        <code>sudo apt install anydesk</code>
        <p>Now the package manager will know where to look for this package and install it.</p>
        </div>
    )
}