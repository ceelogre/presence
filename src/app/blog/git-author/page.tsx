import Image from 'next/image';
import TerminalBlock from '@/components/TerminalBlock';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: "Git reset author",
  description: "A guide to resetting the author of a commit",
});

const AuthorReset = () => {
    return (
        <div>
            <h1>Git reset author</h1>
            <p>As it turns out, you can reset the author a commit. I learned about this a few days ago while comitting from a new machine that I haven&apos;t setup the authors.</p>
            <Image 
                src='/assets/git-reset-author.png' 
                alt="A screenshot of git reset author message"
                width={800}
                height={300}
            />
            <p>After committing, you can set the new global username and email</p>
            <TerminalBlock>git config --global user.name ...</TerminalBlock>
            <TerminalBlock>git config --global user.email ...</TerminalBlock>
            <p>After this, you can reset the author using:</p>
            <TerminalBlock>git commit --amend --reset-author</TerminalBlock>
            <p><b>NOTE:</b> This will reset the author of the last commit you made, if you want to reset a specific commit you will have to provide its hash (I did not test this but it&apos;s usually the expected behavior with git).</p>
            <p>There are other ways this could be done too:</p>
            <TerminalBlock>git commit --amend --author=&quot;&lt;new-name&gt; &lt;new-author&gt;&quot;</TerminalBlock>
        </div>
    )
}

export default AuthorReset