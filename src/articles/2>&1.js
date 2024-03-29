import React from 'react'

class BashManipulation extends React.Component{
  render() {
    return (
      <div>
        <h2> Bash output manipulation</h2>
        <p>I had issues with starting my postgres server and so, naturally I look up the documentation. While browsing through, I came across a command that looks almost familiar.</p>
        <code>postgres -D /usr/loca/var/postgres logfile 2{'>'}&1</code>
        <p>Everything looks familiar except the <code>2&1 </code> part so like most devs, I browse over to <a href="https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean">stackoverflow </a> for answers.</p>
        <p>As it turns out this is about file redirection to stdout and stderr so for example, if you do <code>ls 404.file</code> you'll see the error on your terminal (by default) 
        <br /> <code>ls: 404.file: No such file or directory</code>. <br /> Soo what if you want to redirect this output to a file? <code>ls 404.file {'>'} errorFile</code> Oh oh! The file is created but the output is not redirected! Why? Because this is not standard output but rather error output. To make this work you have to add stderr file descriptor 2: <code>ls 404.file 2{'>'} errorFile</code></p>

        <p>So how'bout <code> ls 404.file 2{'>'}&1 errorFile </code> and how's it different from <code> ls 404.file {'>'} errorFile 2{'>'}&1</code>? The first command will redirect the output to a file name 2 and then set the stdout filedescriptor point while the second will send the output to a file name errorFile then set stderr output to point to the stdout which in turn points to the file! Wanna make it worse? Here's the postgress command I was trying:<br /><code>postgres -D /usr/local/var/postgres {'>'} pg_log 2{'>'}&1 &</code></p>
        </div>
    )
  }
}
export default BashManipulation