This file was created in Visual Studio Code, and might be formatted incorrectly (or just differently) on different
editors, but hopefully just slightly
I know this is long, but please do read. This gives a rundown of the entire site as of right now.

Index Page -
    The Homepage took me a lot of time. Easily 20 hours, if not 30. I had a lot of trouble with the navbar at the
    top. I had to rewrite many portions of my code entirely to get it to work the way I wanted. The same goes for
    the horizontal sidebar. The notable features of this page are:
        -Great Design. I spent a lot of time designing the page and making it look beautiful
        -Top Navbar. Hovering over each element at the top brings up further menus for each item, just like
            professional websites. I got the idea from Soylent.com and Huel.com, not to mention that a lot of other
            websites have them. It was hard to code, but I got it to work beautifully, and I'm really proud of that.
        -Sidebar. The sidebar sits at its proper position, however, when you scroll down far enough it becomes a
            fixed scrollbar. It does so almost seamlessly as well. I thought this was very clever and I had to
            modify and play around with settings to get it to do so in such a smooth way without disturbing the
            site. Also, the top Navbar takes users directly to whatever page they want because I was able to show
            them more specific pages. The Sidebar takes them to the specific div (talked about below) that they can
            then choose the specific page they want to go to.
        -Each Div containing more information. I designed each div and styled them very creatively. Each div is
            related to a specific aspect (buy, info, deals, etc), with Cart being excluded (not out of
            forgetfulness, rather I figured it wasn't a big enough aspect to have it directly on the webpage, so
            I left it in the top napbar). Each div has a row for each specific webpage, and both the description
            text and the headers are both links to the same page. The bottom profile bar, (similar to a footer,
            I plan on putting an actual footer in later) is beautiful styled, and I think I did an amazing job with
            it.
        -CSS and JS. I went way above and beyond, and while I need to better document (I'm very new to coding, and
            while I tried a little bit, I do need to work on that a lot more), I think my code does a wonderful job
            creating this website, and I feel I did a good job programming the JS and troubleshooting my problems



Buy1 (Powder Page) - 
    This site I developed recently, and was for sure a challenge. The code got complex fast, but I feel I did a
    good job handling it. The notable features of this page are:
        -Progress bar. The progress bar was very hard to do, and after a lot of looking online, I found a way to
            do it with pure CSS and JS. I have JQuery linked on this page because I thought I might have to use it
            (however, I know no JQuery, and I was following what I understood in videos). In the end I settled on
            pure CSS and JS, although I know I will need to learn AJAX, JQuery, and PHP, just to name the big ones
            I don't know. The progess bar actually works well and smoothly. Not only does it actually show that you
            gained more progress when you move onto the next question, but when you select a button (like I already
            have a profile), then reverse your decision, it can also move backwards. There is a lot of logic I had
            to program in, however, from a lot of testing and planning, my system can handle any combination of
            answering and unanswering that the user does. Only thing is, that without JQuery, my JS relies on the
            user clicking on the element, not actually entering information in
            -Progress bar 100%. When the progress bar makes it to 100%, a message is displayed underneath it, and
                if you backtrack something (to reduce it from 100%), the message disappears.
        -Form styling. By using HTML divs, classes, id, and everything else (that I have used throughout the entire
            project anyways,) I have style the form to be very visually appealing. However, I can't alter the inputs
            themselves without going into much deeper code in CSS, so that will be a future project.
        -Form JS. The forms JS was a nightmare. Not so much as Index, I think going through index helped with
            getting ready for this, however, it was still a nightmare. Also having experience from Index, my code
            in many cases is much shorter and more concise, and more efficient. I am very proud of my code, and
            feel I did a job job with my events in HTML and my code in JS
        -Tooltip. I also put a tooltip in the webpage next to the first row of inputs. When you hover over the
            little question mark (it looks like a small circle by the left of the first row of inputs), it shows
            a beautiful looking text block. I have transition times and everything, and it looks really
            professional. Look at IMG1 in the main folder if you can't find the tooltip.
        -Return to Home. I have a button on pretty much every page that allows the user to navigate back to the
            main site
        -iframes. I wanted to have a horizontal bar that you can scroll but not move the page, so you can select
            from a larger pool of options, and I went with iframes. It took a bit of work, and separate CSS files,
            but I got iframes into the page and I feel they look very nice. 



CIS250 Folder -
    This folder (minus the log in), is not linked the the homepage. These would be internal webpages that only the
    CIO and CEO would be able to access, along with other staff members with appropriate permissions. As such,
    since these are not meant for customers, I figured we do not need to make them AS user friendly as other pages.
    Short and sweet.
Blend - 
    The blend page is where we can go to add, maintain, and delete our current mixtures of all our blends.
    -Buttons. This page has 3 buttons that each do different things
        -Add. This button would be to add more blends to our database, and the actual data of the blend would be
            uploaded as a CSV text file.
        -Maintain. This button is the same as add, but it has the added input in the form of downloading the
            current blend CSV text file to see what it is. It also has another div at the top of the editing div
            that allows you to select a specific blend (such as modifying normal, lean&mean, hearty, etc)
        -Delete. This button is the same as maintain in that it shows all current blends. You select one and press
            Delete Blend. When you press the button, the webpage prompts the user if they are sure they want to
            delete the blend
    -Nav buttons. This page links to the other rest of the private pages, as well as the prototype UI for login.
Report -
    The report page is similar to the blend page. On here, the idea is that popular commands would be put into
    buttons that once can easily click and see the data. Or, if you want a specialized report, you can enter in
    your own SQL command with the 'Enter SQL' button. (And from there, I'll put in another button that allows
    the user to put in some kind of visualization library to help visualize the data in a meaningful way).
    Since there is no actual data or anything for the buttons to do as of right now, when you click them, they
    display photos of graphs! notable features are the buttons deleting other buttons images and textareas so
    the screen doesn't fill up with many many reports, plus the clear info button
Login -
    This was a prototype I put together to show a potential early-stage UI for the login for my CIS250 class, where
    I used the profile pages and everything in this folder to show the UI for a system I was designing (backend).
    There isn't any JS here, as I don't have any databases to refer to. With a bit more development, I plan on
    putting this linked into my index page. (The current index page is when the user is logged in, just a few
    tweaks and the page where the user is not logged in will be linked to this page)


Deals --
Deals1 (Refer a friend) -
    This page is more of a prototype and shows what the page might look like. The interesting thing here is that
    I wrote code to randomly generate a code specific to the user. If you refresh the page it will produce a
    different code each time. Right now, the account is just my name, but when the network is developed it will
    be the user's actual account, plus they will only have one code, it will not refresh. I just had it refresh
    in this code to show how it would work. 


Deals2 (Challenges) -
    This page is filled with divisions. Each division, when you highlight over it, grows, both in size and
    font size. When you hover off, it shrinks back. It does so in a timely matter. I tried to make it look good,
    however, the transition still needs work. Still cool though. Spent a lot of time making it look as good as
    it does right now.



Info --
Info1 (Science) - 
    -CSS. I tried really hard and I think I found the look I wanted for this webpage. I just need to add more
        content as I develop the product more
    -Background. I found the background was a bit too bright and taking attention from the text, so I put a div
        that covered the entire body and has a translucent background that dampers the color. I think this was a
        really cool trick and I use this throughout some other pages and it looks amazing

Info2 (Product) - 
    -CSS. I used CSS and background images to create a beautiful webpage. This is one of my favourite webpages.
        I also use the trick of division over the images to dampen the brightness and help them to not take away
        attention from the text
    -Table. I have a table in here (not complete, but the code more or less is there). I also have cool design
        features in there that overall just make the page look so cool and the table easy to look at

Info3 (Team) - 
    There is much on this page that isn't on other pages. There isn't a lot of Javascript. However, I spent a lot
    of time on the CSS, a lot of time. The webpage itself is very beautiful.


hire -
    This site is a smaller site that would only be accessible through a link in the footer at the bottom of our
    pages. This footer hasn't been put in other pages and is currently only on the Team page (info3), however, as
    I develop the website, I'll include footers on each page.
    -Return to Team Page. Instead of returning to home, this button returns the user to the last page they were on,
        the Team page.
    -Image. This is the really cool image I modified to fit the need of the webpage. I think the asthetics of the
        webpage are absolutely incredible
    -Form. This is the really cool thing. I actually set up this form to send the data it has to a website I have
        an account on. If you look at Form.jpg in this folder, you can see a screenshot of a test I submitted. I
        cannot currently receive files. But I can still actually receive forms from actual users RIGHT NOW. I think
        that's really cool. I really went above and beyond right there. I plan on developing this page a bit more
        before I leave for bootcamp to be able to receive files to a different website (I can't receive files
        because I'm on the free version of the website)



Profile --
Profile1 (General) && Profile2 (Finance) && Profile3 (Blend) -
    All the profile pages are more or less the same. I have a lot of work to do to make it more user friendly.
    However, the notable features here are that you can specifically choose any information you want to modify,
    click on that, and JS will change it to the appropriate input type, and add a submit button.


Notes:
    Pretty much every page uses grids in one way or another. Every page pretty much uses CSS, and I actually spent
    a lot of time on the CSS to try and make it look great. All images used are free to use for business use. And
    I had to edit some of the photos as well to make them work for specific pages (see the Hiring page, photo is
    really cool). I feel I showed a high profiency in HTML, CSS, and JS from what you taught me and from what I
    have learned in this semester. I also have a high number of pages linked, and a high number of pages
    developed.
    Overall, this project is probably well over 3,000 lines of code, and I wouldn't be suprised if I spent over
    80 hours, and in all honesty, with troubleshooting and everything, and thinking about how I want to design
    stuff, and writing up content that I want, 100 hours also seems like a good estitmate. I worked on this a lot
    each week once I started, and spent hours in a single sitting.
    I tried really hard on this webpage, and had a lot of fun. Had I known AJAX, PHP, and JQuery, this website
    would have a lot more functionality. Even if you don't review my code (it is pretty long), please at least
    visit the webpages, because I tried really hard on the style of most of the pages. Mostly Index, Buy1 (buy
    powder), info1 (science), info2 (ingredients), info3 (team), and hire (which can be found at the bottom of team
    (info3), in the footer, it is the purple text that is larger than the other text around it). Refer-a-friend,
    deals1, is also really cool to see the unique code generator. Also I find the profile pages (they're all
    pretty similar), and the htmls in the CIS250 folder, pretty cool.
    In the end, I tried to make it very similar. I have almost no experience in web development, or graphical
    design, so I feel that my websites don't have that modern look I want, however, I haven't spent hundreds
    of hours on the site, and, again, I need more coding experience and graphical design experience, and I feel
    I can make this website look a lot better.
  
Please reach out to me before you submit a grade if you have any questions or just want to talk about the project
or how you're going to grade it. I understand you probably don't have time to review the entire project in the
extent that you do with everyone else, so I would love to just have a discussion about anything with you to make
it easier for you.

Thank you very much for your time and attention, and I look forward to hearing from you,
-Julian