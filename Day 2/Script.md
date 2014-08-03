# Script
Hope everyone is ready because today we’re going to go into an intro of HTML.
So first let’s talk a bit about what HTML actually is
## What is HTML 
### Slide Transition
HTML stands for Hyper Text Markup language and as it sounds, it is a markup language. And what I mean by markup language is that it’s a way of annotating language such that you can easily tell it’s syntactically different than text. For example if you wanted to say something is a title you might declare in your text. 
### Slide Transition
<title>This is a title</title>
### Slide Transition
The hyper text portion of HTML means links. So the name HTML makes a lot of sense when you think about what the Internet was originally designed for: the transfer of documents between government and academia. In order to make that easier, you can just embed links into your documents and make them go.
### Slide Transition
So because the internet was designed to transfer around documents, browsers were developed with the thought to display HTML pages. That’s why every web page today is written in HTML.
Take questions here
## Major parts
Let’s say we have a document that we want to turn into an HTML document. How do we do this?
To declare an HTML document you simply  do something like this:
### Slide Transition
<html>
</html>
Simple. Easy to do. Now what else does an HTML document have?
### Slide Transition
<html>
	<head></head>
</html>
All documents have a head. Just like all of you need a head, a document also needs a head. This is where you put all the important stuff like things that make the document look good, and anything about what the document might be about, or some dynamic stuff you want the document to be able to do. What else does a document have?
### Slide Transition
<html>
	<head></head>
	<body></body>
</html>
All documents have a body. This is where the content of a document goes that would be displayed on the page. This is the part we’re most worried about today. What goes inside the body?
### Slide Transition
Different tags might go in the body. Examples of tags: a, p, div, table/tr/th/td, h1, input, form, label, ul/li, textarea, img
### Slide Transition
Almost all tags come in pairs like so.
### Slide Transition
There are a few exceptions because really programmers are nothing if not lovers of edge cases.
### Slide Transition
Tags usually surround plain text. You shouldn’t think of tags as creating styling or formatting (we’ll get to that) but rather as creating divisions and containers for content. They are meant to precisely annotate and describe what you want your document to do. We’ll get to styling another day. Speaking of this idea of containers, all tags can be broken down into two main types by default.
### Slide Transition
Block level tags: These are tags that create what you might consider rectangles. They can have discrete height and width, though be default their width is 100% and their height is the height of the content inside of them. Think of it as when you create a block level element that you’re creating a row.
### Slide Transition
On the other hand you can also have inline tags: These are tags that line up next to each other. They don’t have a discrete width or height. You can imagine it like text in a text editor: you just don’t have a good measure of what width or height really is for text. 
### Slide Transition
In general when you “nest” tags - by which I mean shove tags inside other tags, it should be noted that you shouldn’t generally put block level tags inside of inline level tags.
### Slide Transition:
There are other types of tags as well but all of them are basically mixtures of block and inline elements. We won’t discuss those because their behaviors are generally finicky across different browsers.
### Slide Transition
For more info go to http://www.w3schools.com/html/html_blocks.asp
Take questions here.
## HTML Attributes
So now we’ve successfully partitioned our plaintext document into something that’s more well annotated. Well what if we want to say that this particular div is something that’s a outer container?
### Slide Transition
We come to attributes. Attributes are things on an HTML tag that make them more descriptive. They always come in key-value pairs and what I mean by key-value pairs is something like this
key=“value”
key is descriptive and standardized
value is anything you want (though usually there’s some set of choices to choose from)
For example:
### Slide Transition
src=“http://giphy.com/cat.gif”
This key value pair will only be found on an <img> tag, and as you might guess from the name, it’s a src for the image.
### Slide Transition
name=“foo-bar”
This key value pair is generally found on inputs. It gives the input a name foo-bar. Note the lack of spaces. Spaces are taken to mean very specifically that there’s another value inside. So - usually take the place of spaces.
### Slide Transition
href=“http://google.com”
This is a key value pair that is only found on <a> tags (or anchor tags). This attribute is what gives HTML the HT. It links you to a separate page.
### Slide Transition
id=“eggs”
This is an id attribute. One of the most important attributes of HTML. When you put an id on a tag, it is telling the rest of the document there is only one tag of id eggs in the entire document (semantically anyway)
### Slide Transition
class=“ham-cheese bacon-hotdog”
Classes are another super important attribute in HTML. They tell the document that this tag is of class ham-cheese and bacon-hotdog. The reason that this is important is that later we’ll learn about something called CSS that looks specifically for this. Note that the space means that the tag in question is both of class ham-cheese and bacon-hotdog.
### Slide Transitions
There are a litany of other types of attributes that can go in a tag. We’ll not be going over them now and we’ll talk about them as needed.
Take questions here.
## DOM
So how does the browser take this document and turn it into a web page?
### Slide Transition
The browser turns the document into something called the DOM which is a document object model. Because of the browser wars (an event back in the 90s where browsers literally took out swords and started trying to fight each other), there are a bunch of different competing models of DOM and how it renders. This is one of the reasons Frontend web development is so hard.

It’s not too important to know about the DOM currently in any way other than note that if you organize HTML a certain way it becomes a tree like structure (draw out tree).  Eventually we’ll be talking about how you can use the DOM to make more dynamic web pages.
### Slide Transition
Any questions?
Hour of exercises

# History of HTML
So we’ve talked a little bit about the structure of HTML and what it is. So let’s talk about the history. This is not going to be on the test. Because there’s no test.
### Slide Transition
HTML was invented by scientists at CERN based off of SGML (standard generalized markup language). It was originally used to link Physics documents together. 
### Slide Transition
However Hyper Text as a concept had existed since the 40s. I’m not sure how they linked things back then, I imagine with pneumatic tubes.
### Slide Transition
Apple took Hyper Text in the 80s and invented the concept of hyper cards, which allowed them to create navigation buttons that took you to places when you clicked on them.
### Slide Transition
So then a lot of different programmers decided that they had a better way of doing HTML and that everyone should do their way. So as you often have with many programmers, you had a lot of competing standards. Eventually they all sat down in a room and standardized it all and created HTTP
### Slide Transition
HTTP stands for Hyper Text Transfer Protocol, and it was created as a standard way of transmitting HTML documents. If you’ve ever heard that you’re making a request to a server or receiving a response from a server, it’s an HTTP request and an HTTP response. In short HTTP defines standardized requests and responses to communicate between machines
### Slide Transition
So in 1991 due to demand of use for HTML, they added a few more features that everyone wanted and dubbed it HTML+
### Slide Transition
In 1992 the national center for supercomputing applications (NCSA) connects to CERN and downloads two web browsers. They’re so bad they decide to write their own called Mosaic
### Slide Transition
Later in 92 images get added to HTML thus starting the explosive popularity of people sharing cat photos
### Slide Transition
In 1993, Lynx came out, and promptly ignored the fact that images had been added to web browsers, opting to stick with text only.
### Slide Transition
In April of 93 Mosaic was released for Sun Microsystems. It is poorly designed and full of random features.
### Slide Transition
In fact it’s so bad that in 94 they formed a committee called the Internet Engineering Task Force, presumably to fight crime or something because it has the words task force in it and creates a bunch of groups about security, network routing, and applications. It also believed that the Web and the Internet belonged to the people.
### Slide Transition
Then there were a lot of parties.
### Slide Transition
In 94, HTML 2 specs were released. They decided to eschew the + naming scheme after this.
### Slide Transition
Also in 94, Netscape was formed with a browser you may remember as Netscape Navigator. Since the browser was so popular, they decided to break the standard that was literally just created and make their own stuff.
### Slide Transition
So later in 94, A second organization is formed called the World Wide Web Consortium (or W3C) sponsored by companies who hated what Netscape was doing. Actually they wanted to standardize the web.
### Slide Transition
Lots of new tags were added to HTML in 95. Academics hated it because it added stuff that was extraneous and they wanted the kids to get off their lawn.
### Slide Transition
In march of 95, HTML3 is published and its standards are promptly adopted and then ignored as more web browsers started adding their own shit. In fact tables were actually added by the Navy and we have them to thank for the absolutely terrible formatting we all saw throughout the 90s.
### Slide Transition
In August of 95, IE 1 is released. It promptly is replaced by IE 2 in Nov. of 95.
### Slide Transition
In Sept of 95, Netscape proposes frames, cementing themselves as people we now hate forever. They also create Javascript, which doesn’t help their case.
### Slide Transition
Luckily in Nov of 95, a bunch of vendors came together and decided they want to standardize HTML further. Stylesheets come into existence.
### Slide Transition
In Dec of 95, just one year after coming together with an awesome name, the IETF disbands.
### Slide Transition
In April of 96, Javascript gets added to the HTML standard.
### Slide Transition
In July of 96, Microsoft seems more interested in open standards. They release IE for windows 3.1 and macs. Then someone decides to play a practical joke and adds Marquee and Blink to the HTML 3 standards.
### Slide Transition
Jan of 97 marks the passage of HTML 3.2, which is actually all of HTML 1 + 2 + 3. It also marked the creation of the different flows of HTML for layout, which we will talk about when we get to CSS.
### Slide Transition
In Dec of 97, they released HTML 4 because HTML 3.2 still had netscape stuff in it. Then everything has been stable for about 10 years.
### Slide Transition
In January 2008, the HTML 5 draft got published. In May 2011, last call for changes.
1. More exercises
- 