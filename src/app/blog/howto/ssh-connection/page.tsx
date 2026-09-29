import TerminalBlock from "@/components/TerminalBlock"
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "SSH Connection",
  description: "How to connect to a server via SSH",
});
const SSHConnection = () => {
    return (
        <div>
            <h2>SSH Connection</h2>
            <p>I find SSH easy to work with. Here's how to quickly set up a connection between two devices. I happen to have personal laptop and a work laptop. Instead of transferring files back and forth, I can use SSH to connect to the work laptop and work on it from my personal laptop.</p>
            <p> Here's how to set up the work laptop to allow SSH connections.</p>
            <TerminalBlock>
                <p>sudo vi /etc/ssh/sshd_config</p>                <p>Add the following line:</p>
                <p> If port is commented out, uncomment it and set it to the default or whatever port you want to use.</p>
                <p>Uncomment the listen address also if necessary.</p>
                <p>Save and exit</p>
                <p>Check if there is an active tunnel</p>
                <p> ss -tunlp | grep ssh</p>
                <p> sudo firewall-cmd --add-port=<PORT>/tcp</p>
                <p>sudo firewall-cmd --reload   </p>
            </TerminalBlock>
            <p>Now you can connect to the server from your personal laptop using the following command:</p>
        </div>
    )
}

export default SSHConnection;