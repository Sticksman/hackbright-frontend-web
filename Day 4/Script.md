Box model:
The most important thing to understand when laying something out is the box model of CSS. It’s tough to explain, so I’m going to illustrate it on the board. Let’s start with the a div. It creates a hidden rectangle on screen. As we’ll actually see it’s several nested rectangles.

The inner most box is your content. You give that a width and height.

The next rectangle is your padding. You can add padding in every different direction or you can use the short hand property. It’s important to note that width and height do not encompass padding. Padding adds onto width and height. So if you have a box that’s 10px big and add 10px of padding, you’ve actually made your content 20px big. There’s a property to change this, but I’d recommend you practice this until you get used to it. This was the most unintuitive part of the box model for me.

The next rectangle is your border. You can set border width and color.

Outside of the border is margin. You can add additional margin in every direction or use the short hand.

All of the short hand rules go in the same direction: top right bottom left

Finally there’s the Top, Right, Bottom, and Left properties. They can only be used in very specific circumstances, which we’ll discuss in a bit.

Questions?

Layout:
The browser actually renders a webpage using a process called flows. There are three flows. The normal flow, the float flow, and no flow.

The normal flow works like this. Block level elements are rendered on top of each other. Inline elements are rendered inline with each other. Easy simple.

What if we wanted to put a bunch of block level elements next to each other. This is where float comes in. The float flow basically tries to flow content around floated elements. <illustrate on board> Where will this box end up?

Finally there’s no flow. This is reserved for position: absolute. Position absolute should be reserved for very very specific circumstance (i.e. a modal or popup). It’s expensive to render compared to the others, but it allows you to overlap stuff.

Exercises:
http://www.codecademy.com/courses/web-beginner-en-6merh/0/1?curriculum_id=50579fb998b470000202dc8b

http://www.codecademy.com/courses/advanced-css-positioning/0/1

http://www.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/

Twitter Bootstrap:
Ok so we’ve done a bit of work on the positioning front and selector front. Let’s look at a tool people have built to make this stuff easier. Today we’re focusing on Bootstrap. It was born out of a Twitter open source project.

Most important thing about bootstrap to know is that it’s built from the ground up as a columnar responsive design. Practically, what this means is that you only need to build the site once for all screen sizes.

The first step is to add bootstrap to your website by adding a link to it to the head of your document.

By default bootstrap has 12 columns. You can create an element of a certain width by giving it a class based on the number of columns you want to take up and the number of screen size you’re aiming for. So I can add divs for what I want from there to layout some boxes. Since we’re working on websites on computer screens, I’m going to use col-md-*

Next I’m going to show off writing the same to do list app we had using bootstrap instead of styling ourselves. We can also add some cool things like a nav-bar and a few buttons. 