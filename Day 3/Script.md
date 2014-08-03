## HTML in REVIEW
Let’s review HTML a bit:
As you recall HTML documents start with a DOCTYPE, then a pair of html tags, followed by a head and a body.
Tags are the majority of an html document. They are what gives the document the structure and skeleton of a web page. They come in pairs except for several exceptions.
### Slide Transition
Tags can have attributes. These attributes define more things about said tags.
### Slide Transition
When a browser displays or renders a web page for viewing, it creates a document object model, or DOM. I said it wasn’t important the details just that it did it. So why is it important that it does it?
### Slide Transition
It’s important because today we talk about CSS. Now what is CSS?
### Slide Transition
CSS stands for cascading style sheets. As you may recall in our little overview over html, Style sheets were added to HTML in 95. They were added to HTML4 as an official part of the spec. Their purpose was to solve a problem.
### Slide Transition
Here’s a font tag  in HTML. It’s icky. Why? Because it confuses display code with layout code. While this distinction may seem absurd, trust me when I say it makes a big big difference when you’re editing a page. It’s creating a convoluted and complicated document when the document could be much simpler. And HTML is littered with these types of tags and most are still supported by browsers. So how is CSS placed on a web page?
### Slide Transition
Well you can use them as attributes. This is bad. 
You can use them as inline styles. This is still bad but sometimes necessary.
You can place them in their own separate file. This is the best practice
CSS comes in rules. What do these rules look like?
### Slide Transition
You’ll notice that several parts of this rule. The part before the brackets are called selectors, and the most complicated part of css. We’ll talk more in-depth about these things. Next you’ll notice that inside the braces that rules again come in key value pairs. Similar to attributes. Only now the keys are followed by colons followed by values.
### Slide Transition
Let’s talk a bit more about selectors. Remember how we said the DOM is important? Well it’s important because selectors are capable of selecting certain nodes in the tree. For example let’s look at this syntax. * is a wildcard. It means select everything.
### Slide Transition
An element selector is just the name of a tag. For example this just says select every div.
### Slide Transition
If you want to select multiple different things to apply the same style to, you can separate the rules with commas.
### Slide Transition
Now let’s talk about some of the more important selectors. Remember ids? This is how you select a node with an id.
### Slide Transition
You can also select a class like this.
### Slide Transition
You can also select all elements of a certain class or id or both!
### Slide Transition
Onto some more complicated selectors. This selector is any descendant. Now again if you recall a DOM is a tree structure. This means that this selector finds all descendants of the class with the second class attached and applies rules to them.
### Slide Transition
This selector is direct descendants only (or children)
### Slide Transition
This selector is applies rules to adjacent nodes. Now off the top of my head this one isn’t as widely supported (I believe ie8 does and below does not).
### Slide Transition
There are many many more selectors. You can find them here.
### Slide Transition
As for today’s exercises, one of them is of course a code academy one. The other will be hands on by me as I explain how to lay things out in CSS. Then we’ll go into a second lecture.

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

Inheritance:
So what happens if you have multiple rules that might conflict? Which rules get priority?

First off if multiple blocks of rules apply, only conflicting rules are disputed.

There’s an importance ordering:
1. User Agents have a style sheet (e.g. browser)
2. User Declarations (i.e. settings)
3. The website has its own stylesheet
4. Website’s rules marked with !important
5. User’s rules marked with !important

Within importance there’s specificity which works on an addition system:
1. Add 1 for each element in a rule and pseudo element
2. Add 10 for each class, pseudo-class, and attribute
3. Add 100 for each ID
4. Add 1000 for each inline-styles

Finally all ties are broken with distance from the bottom of the css page.

As I mentioned before, if multiple code blocks affect the same element, all non-conflicting rules apply. This is known as inheritance. Think of it the most specific and important rule gains all the rules of the less important rules. You’ll have to dummy out the rules you don’t want.
