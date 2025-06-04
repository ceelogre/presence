const gnomeCrashArticle = () => {
<div>
    <p>For years now, the suspend mode doesn't work on my Kali.</p>
    <p>When I forget to leave the power cable plugged in, the battery will die.</p>
    <p>So far, it was not much of a problem as I was able to reboot on power on</p>
    <p>Until one Friday when I powered it on, and was  greeted with the now common "oh no, something has gone wrong..." message.</p>
    <p>First place to look for a solution? Yeap, we're in 2025 so AI is my master. The first thing to try was the initramfs, which attempted to re-map the nodes but that didn't work.</p>
    <p>After realizing that TTY wasn't responding too, I reached out in my toolbox and plugged in the USB live boot. I got into the system, did the usual mounting </p>
    <p>
        <code>sudo mount /dev/nvme0np3 /mnt</code>
        <code>sudo mount --bind /sys /mnt/sys</code>
        <code>sudo mount --bind /run /mnt/run</code>
        <code>sudo mount --bind /proc /mnt/proc</code>
        <code>sudo chroot /mnt</code>
    </p>
    <p>Now that I'm in the OS, I tried updating using the package manager, no luck, updated the whole system, no luck (and at each point) I have to shutdown the live environment and log into my system to see if the changes worked.</p>
    <p>Now, my master suggested the logical thing: check journal.</p>
    <code>journalctl --directory=/var/log/... -xe | less </code>
    <p>I started to notice a pattern of a repeated gnome issue so I knew whatever happened hadsomething to do with it. Now the next step is to fix it</p>
    <p>My master said I should back up the config for my current session, hoping that when I attempt login, it's gonna create a brand new environment. That didn't work too</p>
    <p>Next was to create a new account and see if I can use it to login (suspecting that the issue could be with my default account), no luck.</p>
    <p>On the 5th day, I learned of a pretty useful tool - coredumpctl</p>
    <p>As it turns out, every crash creates a dump stacktrace which you can view:</p>
    <p>So everytime I tried a solution and failed, I would run coredumpctl info showed the last stack trace. Up on further inspection, I realized that it's the same issue cause by a failing gnome-shell. At this point I was also browsing the web to see what's possible (I was at a point where a clean install was starting to be a viable option) then I saw a superuser question where someone suggested a fresh install of all the three gdm3, gnome and gnome-shell. </p>
    <code>sudo apt install --reinstall gdm3 gnome gnome-shell</code>
    <p>At this point I even stepped out, cause I was convinced that it won't work and when I go back home evening, I'll backup by account and re-install. To my surprise, when I came back gnome was up again showing my account and the account I had created in the research process.</p>
    <p>Logged in, got a few welcome messages - as this was a new graphical install - then resumed my work after 6 days.</p>
    <h3>Takeaway</h3>
    <p>The first is to ensure that suspend mode works properly moving foward</p>
    <p>On a system crash, coredumpctl will be my first stop.</p>
</div>
}