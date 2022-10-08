/*


A few months back, I bought my second laptop because I figured
it's not gonna work sticking to only one laptop. Beside, I lacked
a few functionalities from my previous linux machine that were
unavailable in macos. So I got a new PC, booted it up with Kali
and got cracking.

After finishing up the setup (this could be a different article),
and started using it actively, I found myself needing to transfer
files between the two machines.

What would be a naive solution? Find a software that can help me
do that. Fortunately, I did not go as far as wonder the internet
looking for something to help you transfer files between two computers,
I had a softwaare that I could use already: Slack.

This came to my mind first because regardless of the fact that 
Apple products have continuity features and all, I found myself
stumped a couple of times trying to transfer files between my mac
and iphone when Finder isn't behaving. So I had a few occasions where
I had already used Slack to transfer files between the mac and my phone
So I extended the usage to my new linux machine.

Then one day, I asked myself, hang on! these machines are on the 
same network since I work from home most of the time, isn't there
a way I can make use of that and have them exchange files? I started
doing some research as this is not something I remember from networking
class but I'm blessed to remember that it is possible.

While searching I immediately came accross an article from 
my long term fav site howtogeek that mentioned ssh. At this point
the light came on! I asked myself, If I'm always ssh-ing to 
server work machines, and transferring files using scp, what's 
stopping me from doing the same setup locally? I sat down
figured that the first thing I need to do is generate ssh keys 
and from here, I was baffled at how ridiculously simple the 
process is: I went on to use ssh-keygen to get new keys on my mac
, transferred the private key to my linux machine using slack
(still) then attempted to ssh into the mac and boom! it worked!
From here I even started transferring files using scp which was
also a breeze. As excited as I was, I moved to mac machine and 
tried to repeat the same process, I generated the keys, transferred
the private key to linux machine (you guessed how) then attempted
to login to the mac from my linux. It didn't work, the connection
was refused, I did a bit of research again and found out that by
default, mac has remote access disable, I went to system prefrences
and changed and was able to get into the machine.

This showed me the arguments that Apple always make about privacy,
which I could give them a little credit for. After login to the mac,
I realized I don't have acces to certain directories. ls returned
operation not permitted. Fortunately, I did not have search this as
I immediately knew that it's an access problem.


After observing the pattern, I realized that those I don't have acces
to are directories that are created by default when you run the os for
the first time, documents, desktop, downloads, ...

I tried to grant myself permission, I had to do a little memory jogging
again as I chmod always gets me (rrw => 421, owner, group, others, I hope
    this stuck with me this time around) but that didn't work too.

    chmod 740 also returned permssion not permitted. This  is what 
    I'm looking into now, but overall I'm happy with the results as 
    I'm able to get into my other machine by simply typing mac
    which is an alias defined in bashrc that runs the ssh command for me.