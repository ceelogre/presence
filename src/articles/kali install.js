import React from 'react'

const KaliCompatibility = () => {
    return (
        <div>
            <h1>Problems installing Kali distros compatbile packages</h1>
            <p>I've had  trouble installing packages from time to time because of their compatibilty.</p>
            <p>One of the common reason is that even though Kali is based on Debian, most software don't have release files for this particular distro. (Admittedly, as a developer, you can't support every distro out there unless your sole purpose is not make to push out products but to please developers.)
            </p>
            <p>
                So from time to time, when installing a given package say, mongodb, I've realized that on the step of adding a PGP key, I have to add the name of the system version (technically known as the VERSION_NAME) and whenever I do this, of course it's going to add Kali rolling.
                when you do <code>sudo apt update</code> you are hit with an error of
                <code>... can't update from ... securely as it does not have a release file.</code> I used to get stuck (there was a time I even spent a while without using my kali as I couldn't login with BeyondIdendity so I was locked out of work.)
            </p>
            <p>
                Today I was installing Docker and the same issue re-surfaced. After a bit of scratching my head, I ended up deciding to be humble and search "how to install docker on kali". The first result was from the official documentation (https://www.kali.org/docs/containers/installing-docker-on-kali/) and one particular paragraph opened my eyes.
            </p>
            <p>
                "docker-ce can be installed from Docker repository. One thing to bear in mind, Kali Linux is based on Debian, so we need to use Debian’s current stable version (even though Kali Linux is a rolling distribution). At the time of writing (Dec. 2023), its “bookworm”:"
                <code>
                echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian bookworm stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list 
                </code>
            </p>
            <p>The interesting part is how in the usual command</p>
            <code>
        echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null 
            </code>
            <p>The part of </p>
            <code>
            $VERSION_CODENAME
            </code>
            <p>is replaced with </p>
            <code>
                bookworm
            </code>
            <p>This means that you can "trick" the package manager into assuming this is just another debian distro and install the package that you were looking for.</p>
            <p>This is a trick that one can use with other packages.</p>
        </div>
    )
}