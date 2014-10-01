---
layout: post
title: Web Retreat Aberdeen – There is another way
comments: true
---


<p>On Saturday I attended Web Retreat, a full day of coding for Web Developers in Aberdeen to learn and practise through a series of 45-minute challenges. The day is an adaptation of the global day of Code Retreat, where developers from all across the world focus on improving the skills they have rather than &ldquo;getting things done&rdquo;.</p>

<p><strong>Challenge One &ndash;&nbsp;Clean it up</strong><br />
For the first challenge I was tasked as being the driver (person coding) and my partner, the passenger, was only allowed to make code suggestions but not allowed to actually write any code. The source code we were given, a JavaScript implementation of&nbsp;<a href="http://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway&rsquo;s Game of Life</a>, contained many deliberate errors, poor mark-up and random btk variables that were both unclear and confusing.</p>

<p>We got to grips with the code base that would be used throughout the day, discovered what parts could be thrown away and figured out how it all worked. By the end of the first 45&nbsp;mins I had removed 80% of the unused mark-up, fixed the mouse offset and not much else.</p>

<p>Delete your code!</p>

<p><strong>Challenge Two &ndash;&nbsp;Make it responsive</strong><br />
I would class myself as &#39;experienced&#39;&nbsp;in making websites work on smaller devices, however this time as the passenger, I was working with someone who was not sure where to begin. This challenge was extremely beneficial for me, allowing me to explain how this should work to my partner. We started off with Bootstrap and by the end of the challenge had managed to get the grid squares of the game of life to expand with the width of the browser, having started with a table-based layout.</p>

<p><strong>Challenge Three&nbsp;&ndash;&nbsp;Constraints</strong><br />
The third challenge again tasked me as the passenger, and the group was given the&nbsp;<a href="http://constraints.co/">Constraint Card</a>&nbsp;Focus On Speed&nbsp;for the code. This constraint would see the room try to optimise the code to get the page load time to as low as possible. Each team was also given another constraint card but unfortunately we received&nbsp;One Button.</p>

<p><img alt="" src="http://d4b6cc5f2362b0c12a26-342c17d91fa07b81ceda714892ac3418.r12.cf3.rackcdn.com/blog-62_wth3.jpg" /></p>

<p>This constraint would see us try to refactor six buttons (run, once, pause, faster, slower, normal) into one. It was quickly decided that we only needed a start button and could use the keyboard to perform the other functions. This was nearly finished when Ian, the Web Retreat facilitator, decided that a keyboard key was also a button so this was technically cheating!</p>

<p>As we went back to the drawing board we realised that there was nothing saying these six&nbsp;functions had to be performed, so decided that we would go one better and use no buttons and have the game start on page load!</p>

<p><strong>Challenge Four &ndash;&nbsp;No loops</strong><br />
What? How? Why? I have been learning JavaScript for over four year&#39;s now and even though I recognise I am no expert, I would say that my knowledge is greater than what would be known as a beginner. This challenge completely broke my brain. The removal of a loop is something that would seldom be done in a client&rsquo;s site and I simply didn&rsquo;t know where to start. A frantic Google search and checking my usual references didn&rsquo;t help. Forty-five&nbsp;minutes later and I don&rsquo;t know if I made the code better or worse. I later learned that I should have been using recursion to tackle this, which seemed logical in hindsight!</p>

<p><strong>Challenge Five &ndash; Two constraint cards</strong><br />
For the day&rsquo;s final challenge my team picked two more cards &ndash;&nbsp;More Sound&nbsp;and&nbsp;One Image. As the Game of Life grid squares were using images, it was simple for me to replace the images used with CSS and in order to add sound we used an HTML5 audio generation library to create a sound every time a new grid square was activated.</p>

<p>Having never attended a coding event before, the day&rsquo;s structure of short challenges before deleting the code has allowed me to gain valuable problem-solving experience and also highlight the areas where I need to work on.</p>

<p>The most important thing that I have taken away from Web Retreat is that when faced with a difficult problem that requires a logical thought process, there are literally thousands of ways to solve the exact same problem. However, through collaboration or simply taking a step back to analyse the task in hand can encourage more elegant solutions to be generated.</p>

<p><i>Originally posted on the <a href="http://fifthring.com/article/web-retreat-aberdeen-there-is-another-way/">Fifth Ring website</a></i></p>
