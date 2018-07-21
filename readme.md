###Not yet ready for use in production###


# Mini, The Minimal DOM manipulation Library

Mini is minimal DOM manipulating library which uses Jquery like syntax. only mostly used dom manipulation methods are packed in this library to keep it minimal and tiny.

----

# Why Mini?
in some situations you just wanna do simple things like toggle class, add class, remove class, set attribute or remove  attribute and simple things like that.
and that's where mini can be useful. You don't have to load jquery which is pretty big for simple tasks. mini is just 3kb in size and easy to use and does the job.

---

# How to use
Just link the mini.js or mini-minified.js right before the closing ```</body>``` tag, followed by your own custom JavaScript file, scripts.js or whatever you name it.

link mini.js in your html as mentioned above.
keep mini.js and create script.js in your project folder and add it right after mini.js like.

your project folder should look like 
```
    Project Folder/
            index.html
            mini.js
            script.js
```
and html file should look like.
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <!-- Your content here -->

    <script src="mini.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

----

# Syntax

To get all elements with P tag from DOM


```
you can either store reference in variable like 

const paragraphs = $('p')

        or

call methods on without storing reference in variable like 

$('p').methodName()

```

To get all elements with certain class name 

```
const selectedElements = $('.hello')

```

you will get array of elements with classname hello.
you can call methods on all those elements in Array by iterating over them.


E.g

```
selectedElements.forEach(elem => {
    elem.methodName()
})

```

To get reference of element with Id 

```
const selectedElement = $('#idofelement')

```

or you can use css selectors to access DOM elements 

E.g

```
const usingSelector = $('.container h1')

```
this would get reference to all h1 elements which are nested inside container class.

refer to mozzila developer network for more on css selectors.

So thats how you get reference to DOM elements.

---

# Available methods in library are.

* addClass
* removeClass
* toggleClass
* html
* text
* val
* attr,
* parent
* child
* next
* styles
* is
* append
* prepend
* hide
* show
* on
* off
* css

---

# How to use this methods

### addClass

#addClass method takes one string argument only to add multiple classes use spaces.

E.g For adding class primary to DOM element with id of myheader

```
 $('#myheader').addClass('primary')

            or 

For adding multiple classes. classes being primary and important

$('#myheader).addClass('primary important')

```

example above will add primary and important class to element with id myheader

if that element looked like before using addClass method on it

```
<h1 id = "myheader"> Hello i am header </h1>

```

it will look like after using addClass method on it with "primary important" as an argument.

```
<h1 id = "myheader" class = "primary important"> Hello i am header </h1>

```
### removeClass

#removeClass method takes one string argument only to remove multiple classes use spaces.

E.g following method will remove primary class from element with myheader id.

```
$('#myheader').removeClass('primary')

```

### toggleClass

#toggle class method takes one string argument. you can pass multiple class names by separating them with space

E.g Following method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.

```
$('p').toggleClass('lead')

#this code will add lead class to all p tags if lead class isn't there. and will remove lead class if it already exists.

```


### html

#html takes one optional argument if argument is given it will replace innerHTML of selected element and if argument isn't passed to method it will return innerHTML of selected element.

```
$('#myheader').html()

```

will return innerHTML of element with id of myheader

```
$('#myheader).html('this is new data inside myheader')

```
will replace innerHTML of element with id of myheader.


### val

#val takes one optional argument if argument is given it will replace value of selected element and if argument isnt passed to method it will return value of selected element.

E.g if you wanna get value of input box with id of myinput call this method without arguments 

```
$('#myinput').val()

```
will return value of element with id of myheader

```
$('#myinput').val('hello value changed')

```
will change the value of element with passed argument.

# attr 

#this method can be used to get value of given attribute or set attribute with given name and its value.

E.g to get value of attribute src of selected element pass in one argument 'src' and method will return value of that attribute 

```
$('#img1').attr(src)

```

E.g to set value of attribute of selected element pass two arguments first argument being attribute name second one being its value.

```
$('#img2').attr('src','img1.jpeg')

```

# parent 

#this method doesn't take any argument and returns parent element of selected element 

E.g to get parent element of selected element with id child 

```
$('#child').parent()

```

# child

#this method doesn't take any argument and returns parent element of selected element 

E.g to get child elements of selected element with id child 

```
$('#child').child()

```

this method returns an Array of children of selected element.


# next 

#this method doesn't take any argument and returns sibiling element of selected element 

```
$('#firstbrother').next()

```

# styles 

#this method takes one optional argument of stylename and returns value of that style on selected element

E.g to get value of color property of selected element

```
$('#myelement').styles('color')

```

# is

#This method takes one argument and method checks if one of the selected elements matches the selectorElement and returns boolean.

```
$('.log').is('button')

```
if class log is button this method will return true else false.

# create 

#this method takes two argument first being tag name and second being text content and is used to create DOM element.

E.g to create h1 tag with "hello world" as text content 

```
$create('h1',"hello world")

```

# append 

#this method takes one argument and that argument should be of dom element type inserts the specified argument(DOM element) as the last child of selected element.

E.g to insert ```<h1>Hello world</h1>``` inside element with class container 

```
$('.container').append($create('h1','hello world'))

```

# prepend 

#this method takes one argument and that argument should be of dom element type inserts the specified argument(DOM element) as the first child of selected element.

E.g to insert <h1>Hello world</h1> inside element with class container 

```
$('.container').prepend($create('h1','hello world'))

```

# hide 

#this method doesn't take any arguments. this method hides selected elements.

E.g to hide all elements with p tag 

```
$(p).hide()

```

#show 

#this method doesn't take any arguments. this method shows selected elements which are hidden using hide method.

E.g to show all elements with p tag which are hidden using hide method before

```
$(p).show()

```

# css 

#this method takes one argument of object type and sets css property on selected element


E.g to add one or more css properties on selected DOM elements 

```
$('#selectedelement').css({'color':'red','border': 1px solid red})

```

this will apply css properties inside object on selected DOM element

# on

#this method is for registering event listener on selected element and takes two arguments first one being event type and second one callback function.

E.g for registering click event on selected element 

```
#('#selectedelement').on('click',function(){
    alert('button was clicked')
})

```

example above would result in alert popup if we click on element with an id selectedelement 


### for different types of event refer to mozzila developer network


# off 

#this method is for unregister/remove event listener on selected element and takes two arguments first one being event type and second one callback function.


E.g to remove click event from selected element.

#we will remove click event listener which we registered in earlier example 

```
#('#selectedelement').on('click',function(){
    alert('button was clicked')
})
```

---

# Credits 

Special Thanks to [trgwii](https://github.com/trgwii) who helped with optimization of library. 

---
