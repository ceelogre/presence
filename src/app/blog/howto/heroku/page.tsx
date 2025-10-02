import TerminalBlock from "@/components/TerminalBlock"
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Heroku deployment",
  description: "How to deploy a node.js app to Heroku",
});

const HerokuConfig = () => (
    <div>
      <h2>Heroku deployment</h2>
      <p>For the first time (in a while), I&apos;ve been able to create a successful heroku deployment.
      Started by adding Mocha
      </p>
      <TerminalBlock>npm i mocha</TerminalBlock>
      <p>Add its configuuration to <code>package.json</code></p>
      <p> From here, I attempted to run test and ran into an issue. I had an import assert error :</p>
      <TerminalBlock> can not use import outside of a module</TerminalBlock> <p>After a bit of search, I found out that you can just add <code>type: module</code> to your <code>package.json</code> and mocha will not complain. I did this and the tests passed. I went on to configure travis ci and codeclimate which was just  a blaze: add <code>.travis.yml </code>and the likes, get the reporter id from cc and and boom! my test were passing. I went on to install <code>nyc</code>, give reporter flags and that was easy.</p>
      
    <p>Now I attempted a heroku deploy which was created the right way cause I added a build script to be ran by babel/cli in the deployment phase. This already helps with waiting for the app to build while browsing. Then I was hit with a weird error, after creating a build dir, there were commonjs files which were still being treated as modules according to package.json. What I did? Remove the config and rename the test file extension to <code> .mjs</code> Heroku doesn&apos;t complain anymore.</p>
    <p>I also had to deal with sequelize errors by following a simple routine:</p>
    <ol>
      <li> Create a model and move it out of models <code>dir</code> </li>
      <li> generate a model</li>
      <li> Rename the new model to <code>cjs</code></li>
      <li> <code>npm run migrate</code></li>
    </ol>
      </div>
    )
  
    export default HerokuConfig