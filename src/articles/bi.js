const BiArticle = () => {
  render (
    <div>
      
    <h1>
    Installing Beyond Identity on Kali Linux.
    </h1>
    <p>
      A little while ago, our IT department moved away from Okta authentication to Beyond Identity. This paused a problem to me; I use Kali Linux OS (not that I know anything about CyberSec but you never know what you can learn) and it turns out BI doesn’t support Kali. I attempted to install it but it couldn’t run. At this point, I was left hopeless with nothing but to switch back to Mac for work.

      After over a month, when I had almost given up on the issue I went through BI help articles (for like the tenth time) and noticed that they mentioned that you can “force to install it if you have a compatible distro”. I thought for a second and said, well, Kali is based on debian and since BI supports Ubuntu, it might work for me too. I went ahead and installed by changing the /apt/sources distro and release from kali rolling to ubuntu focal. The installation worked but ofcourse when I started the app, it threw some errors and I ignored them and went ahead and imported the keys from other device and attempted to authenticate again and voila! It worked.
    </p>
  </div>

    )
}