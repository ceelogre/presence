import TerminalBlock from '@/components/TerminalBlock'
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Bash output manipulation',
  description: 'A guide to manipulating bash output',
});

function BashManipulation() {
    return (
      <div>
        <h2> Bash output manipulation</h2>
        <p>I had issues with starting my postgres server and so, naturally I look up the documentation. While browsing through, I came across a command that looks almost familiar.</p>
        <TerminalBlock>
            postgres -D /usr/loca/var/postgres logfile 2{'>'}&1
        </TerminalBlock>
        <p>Everything looks familiar except the <code>2&1 </code> part so like most devs, I browse over to <a href="https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean">stackoverflow </a> for answers.</p>
        <p>As it turns out this is about file redirection to stdout and stderr; for instance, if you do </p>
        <TerminalBlock>ls 404.file</TerminalBlock> 
        <p>you&apos;ll see the error on your terminal (by default) </p>
        <TerminalBlock>ls: 404.file: No such file or directory</TerminalBlock> 
        <p>Soo what if you want to redirect this output to a file?</p>
        <TerminalBlock>ls 404.file {'>'} errorFile</TerminalBlock> 
        <p>Oh oh! The file is created but the output is not redirected! Why? Because this is not standard output but rather error output. To make this work you have to add stderr file descriptor <i>which is the number <b>two</b></i> (2)</p> 
        <TerminalBlock>ls 404.file 2{'>'} errorFile</TerminalBlock>

        <p>That&apos;s good but how&apos;bout </p>
        <TerminalBlock> ls 404.file 2{'>'}&1 {'>'} errorFile </TerminalBlock> 
        <p>and how&apos;s it different from </p>
        <TerminalBlock> ls 404.file {'>'} errorFile 2{'>'}&1</TerminalBlock> 
        <p>The first command will set stderr to point to stdout (2{'>'}&1) then have stdout point to the error file. This means that the normal output will go to error file while while error goes to stderr. This is not what you want most of the time so, the correct command is the second: stdout will first point to the error file and stderr will point to stdout so, both output and errors will go to the error file thereby achieving debugging and logging at the same time.</p>
        <p><b>Result: </b>This means that the original command I typed wrote the error output to the logfile while displaying it in stdout too (most of the times the terminal).</p>
        <TerminalBlock>postgres -D /usr/local/var/postgres {'>'} pg_log 2{'>'}&1 &</TerminalBlock>
        </div>
    )
}
export default BashManipulation