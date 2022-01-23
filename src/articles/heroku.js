import React from 'react'

const HerokuConfig = () => (
  <div>
    <h2> Changing Remote</h2>
    <p>For the first time (or in a while), I've been able to create a successful heroku deployment.
    Started by adding Mocha
    </p>
    <code>npm i mocha</code>
    <p>Add its configuuration to package.json</p>
    <p> Then attempted to run test and ran into an issue. I had import assert and I got an error that says can not use import outside of a module. Aftera bit of search I found out that you can just add type: module to your package.json and mocha will not complain. I did this, tests ran, I went on to configure travis ci and codeclimate, just  a blaze add .travis.yml and the likes get the reporter id from cc and it  and boom! my test were passing. I went on to install nyc, give reporter flags and that was easy.</p>
    
  <p>Now I attempted a heroku deploy which was created the right way cause I added a build script to be ran by babel/cli in the deployment phase. This already helps with waiting for the app to build while browsing. Then I was hit with a weird face, after creating a build dir, there were commonjs file which were still being treated as modules according to package.json. What I did? Remove the config and make test file .mjs. Heroku doesn't complain and so is much.</p>
  <p>Deal with type:module and sequelize errors:</p>
  <ol>
    <li> Create your model and move it out of models dir </li>
    <li> generate a model</li>
    <li> Rename the new model to cjs</li>
    <li> npm run migrate</li>
  </ol>
    </div>
  )

  export default HerokuConfig