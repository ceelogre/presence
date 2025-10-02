import TerminalBlock from "@/components/TerminalBlock";
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  {
    title: "Bash output redirection",
    description: "A guide to redirecting bash output",
  }
)

const OutputRedirect = () => {
    return (
      <div>
        <h2> Bash output manipulation</h2>
        <p>I had issues with starting my postgres server and so, naturally I consulted the documentation. While browsing through, I came across a command that looks almost familiar.</p>
        <TerminalBlock>postgres -D /usr/loca/var/postgres logfile 2{'>'}&1</TerminalBlock>
        <p>Everything looks familiar except the <code>2&1 </code> part. Like most devs, I browsed over to <a href="https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean">stackoverflow </a> for answers.</p>
        <p>As it turns out this is about file redirection to stdout and stderr so for example, if you do </p>
          <TerminalBlock>ls 404.file</TerminalBlock> 
          <p>you&apos;ll see the error on your terminal (by default). </p>
        <TerminalBlock>ls: 404.file: No such file or directory</TerminalBlock>
        <p> Soo what if you want to redirect this output to a file?</p> <TerminalBlock>ls 404.file {'>'} errorFile</TerminalBlock> 
        <p>Oh oh! The file is created but the output is not redirected! Why? Because this is not standard output but rather error output. To make this work you have to add stderr file descriptor 2:</p> 
        <TerminalBlock>ls 404.file 2{'>'} errorFile</TerminalBlock>
        <p>So how&apos;bout </p>
        <TerminalBlock>ls 404.file 2{'>'}&1 errorFile </TerminalBlock>
        <p>and how&apos;s it different from </p>
        <TerminalBlock>ls 404.file {'>'} errorFile 2{'>'}&1</TerminalBlock>
        <p>The first command will redirect the output to a file name 2 and then set the stdout file descriptor point while the second will send the output to a file named <code>errorFile</code> then set stderr output to point to the stdout which in turn points to the file!<br /> This means that the postgress command I was running:</p>
        <TerminalBlock>postgres -D /usr/local/var/postgres {'>'} pg_log 2{'>'}&1 &</TerminalBlock>
        <p>created a file named <code>pg_log</code> if it doesn&apos;t exist, redirects the standard output to it, and also redirects the error output to the same place as stdout so, error logs are written to the same file too. </p>
        </div>
    )
  }
export default OutputRedirect