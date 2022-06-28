import React from 'react'

const dualBoot = () => (
  <div>
    <h2> Dual Boot</h2>
    <p>
    I was setting up dual boot on a new Dell. I tried PowerISO and realized that the current version has a 300mb limit. I looked around the web of course coming along paid products and scams and eventually came across Rufus. This tool worked pretty well for the first time. I created a bootable USB drive but I was following information around partitioning I fumbled a bit with how to do it properly and it looked as though I didn't need to at all. Now when I tried to reboot to install the OS, the stick disappeared from the boot menu. I tried a couple of more times and nothing changed. I did a fresh re-install of the OS to the stick but didn't work. All along, Rufus mentioned something to do with creating the bootable drive as ISO or DD format. ISO was the recommended and default one so, I didn't bother change it but as it turns out I was having issues cause I should have chosen the DD creation mode. After changing that, I was able to boot the OS again.
    </p>
    <p>
      Partitioning was a bit tricky too as I had to go back to windows and delete the non-C volume (I wanted to keep windows since it's a licensed Windows 11 for the occasional need) so as to make a continuous free space then let Kali handle the re-sizing of the free space.
    </p>
    <p>
      After m ore than 48hrs, the PC is set with dual boot and Kali as the first boot option which saves a few keystrokes :)
    </p>
    </div>
)