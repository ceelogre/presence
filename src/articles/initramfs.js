
const Initramfs = {
    title: 'Initramfs problem',
    intro: 'According to ChatGP: Initramfs is a minimal root file system that is loaded into memory by the bootloader before the actual root file system is available. It is used to perform the necessary operations to mount the root file system, such as loading the necessary drivers and modules.',
    body: 'I was unmounting an external drive and suddenly something unusual happened, the screen started flickering. Interestingly, it wasn\'t immidiately after the unmount but rather when I was moving the laptop to my lap (no pun intended). Also, the only app that was open was Brave browser. Since there was no other command working, I forced shutdown the laptop.',
    problem: 'Up on rebooting, the laptop went to a terminal screen with initramfs as the prompt. Last time this PC crashed, I spent about two weeks before finding a solution so I was like, God, not again. I quickly made a search online only to realize that the issue may not be so complicated',
    solution: 'The solution was to run exit command to see which file system was broken, then run fsck on it. I did that and was able to boot normally into GNU.',
    steps: 'The steps were as follows\: 1. exit 2. fsck /dev/nmpan03 -y 3. exit',
    conclusion: 'I\'m glad I was able to solve the problem in less than 5 minutes. I\'m also happy that I didn\'t have to reinstall the OS. I hope this post helps someone else who may have the same problem. PS: I learned that the problem is fairly common with google chrome and since I\'m using it\'s derivative, Brave, it\'s safe to say that this was the culprit'
}

// create a component
const InitramfsComponent = ({ title, body }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{intro}</p>
            <p>{body}</p>
            <p>{problem}</p>
            <p>{solution}</p>
            <p>{steps}</p>
            <p>{conclusion}</p>
        </div>
    )
}