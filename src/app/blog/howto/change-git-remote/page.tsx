import { createMetadata } from '@/lib/metadata';
import TerminalBlock from '@/components/TerminalBlock'

export const metadata = createMetadata({
  title: "Changing git remote",
  description: "How to change the remote origin of a repo",
});

const ChangingRemote = () => {
  return (
    <div>
      <h2> How to change Git Remote</h2>
      <p><b>Problem</b>: I wanted to create a copy of a repository without forking it.</p>

      <p>I spent a few minutes thinking of the best approach and eventually settled down to this:</p>

      <ul>
        <li>Clone the repo </li>
        <li>Create a new repo under my GitHub account that I will be pushing to:</li>
        <li>Point the local project to my new repo instead of the original</li>
      </ul>

        <p>After step I, I quickly checked to see where the project is pointing to:</p>
        <TerminalBlock>
          git remote show
        </TerminalBlock>
        <p>I initially thought this would do the trick: </p>
        <TerminalBlock> git remote rename old_uri new_uri </TerminalBlock> 
        <p>But I was hit with an error</p>
        <TerminalBlock> fatal: remote is not available</TerminalBlock>
        <p>At that point, I knew that it&apos;s probably used to change remote names like origin not the actual URI.</p>

        <p>After a couple of trial and errors while running through git remote manual, I  eventually came across the command that I was looking for:</p>
          <TerminalBlock>git remote set-url --push name new_uri</TerminalBlock>

        <p>There are other options like <code> --delete </code> which could do half of what I was looking for (removing the pointer to the remote uri) but the command above achieves the desired result in one line.</p>

        <p>Next time I come across this, I&apos;ll just lie to myself that I will remember how to do it without looking up this article.</p>
          </div>
    )
}
export default ChangingRemote