---
layout: post
title: Sympathy for the Legacy
comments: true
---
<p><strong>
	Imagine you a legacy application. You have been been discarded, berated and after being constantly abused, someone hates every second they spend with you. Every single developer who is forced to pay you the slightest bit of attention will constantly remind you how you would have been much better if they had built you. 
</strong>
</p>
<p>
The word legacy in software is defined by Google as <i>"of or pertaining to old or outdated computer hardware, software, or data that, while still functional, does not work well with up-to-date systems."</i></p>

<p>It's important to remember that legacy means <i>"still functional"</i> which is true for every <i>"legacy"</i> piece of software I have ever encountered. I am as guilty as most when I look at old code and think the previous developer had their brain surgically removed when adding that particular feature that I now have to fix.</p>

<p>
Yet as I gain more experience in the industry, I realise that the previous developer may have been under pressure to get the thing out the door, or the budget may have been cut drastically by the client last minute, or the project specification wasn't up to scratch, or the design may have been confusing, or the developer may have spent all the allotted time on this other insignificant feature that the client thought was very important but turned out to be the opposite.</p>

<p>
The point is that no developer sets out to write bad code deliberately, this is usually the result of a perfect cocktail of factors that result in the total time a developer has to ship the highest quality of work being reduced.  
</p>
<p>
Heres three things I do to limit the amount of <i>"legacy"</i> that the project is going to leave behind:</p>
<p>&mdash; Use a boilerplate</p>

<p>&mdash; Set up the fully deployment path from local when the project begins.</p>

<p>&mdash; Use a testing framework on both the Front and Back-End.</p>
<p>
A boilerplate is great to way reduce the time of repetitive tasks on a project. I maintain Laravel, Ionic and Expression Engine boilerplates which are constantly added to over time, meaning that within the 1st hour of starting a new project I'm writing project specific code - this allows more time to get the harder bits right, alleviating <i>some</i> of the pressure. </p>
<p>
Deployments are hard and setting up everything to work in the exact same way locally as on a server can waste a lot of time if you are deploying everything and hoping for the best on go live. I have been using <a href="https://puphpet.com/ ">Puphpet</a> and <a href="http://laravel.com/docs/4.2/homestead">Homestead</a> with <a href="https://forge.laravel.com/ ">Forge</a> to ensure that our local matches production, and deploying to a production server after the 1st commit.</p>
<p>
Using testing frameworks can be a timesaver, but they also take a lot of time to get up to scratch with. I use <a href="http://karma-runner.github.io/">Karma</a> on the Front and <a href="http://codeception.com/">Codeception</a> with Laravel. I wouldn't in anyway claim to know more that 5% of what these powerful testing frameworks can do, but having basic acceptance tests hitting views that trigger when new code is added saves a lot of time when compared with manually checking or wondering <i>"did I break anything?"</i>. When these are rolled into to a boilerplate you can begin testing your code as soon as you start and pass will these simple tests onto any future developers that may be forced to work with your legacy code.</p>
<p>
Have sympathy for legacy applications and the developers who created them...its <i>usually</i> wasn't their fault!
</p>
