// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.


var googleLogo = document.getElementById("hplogo");

googleLogo.style.background = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yahoo_Logo.svg/2000px-Yahoo_Logo.svg.png)";

var button = document.getElementsByName("btnK");

button[0].value = "Yahoo Search";
"Yahoo Search"

// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>

//  </body>
// </html>

// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
var textBody = document.getElementsByTagName("body")[0];
undefined
textBody.style.fontFamily = "Arial, sans-serif";
// Replace each of the spans (nickname, favorites, hometown) with your own information.

var nick = document.getElementById("nickname");
undefined
nick.innerHTML = "Yana";
var fav = document.getElementById("favorites");
fav.innerHTML = "Books";
var home = document.getElementById("hometown");
home.innerHTML = "Kirov";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

var listItems = document.getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++ ) {
  listItems[i].setAttribute("class", "listclass");
  listItems[i].style.color = "red";

};

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newImg = document.createElement("img");
newImg.src = "http://www.pc-tablet.com/wp-content/uploads/2015/08/burningman-youredm.jpg"
var pageNode = document.getElementsByTagName('body')[0];
pageNode.appendChild(newImg);


// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

var pageNode = document.getElementsByTagName("body")[0];

var books = [
  {name: "Book1",
 author: "Author1"},

 {name: "Book2",
 author: "Author2"},

 {name: "Book3",
 author: "Author3"}
];

for (var i = 0; i < books.length; i++) {

  var myBook = books[i];

  var p = document.createElement("p");

  var text = document.createTextNode(myBook.author, myBook.name);

  p.appendChild(text);

  pageNode.appendChild(p);


}

 // Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
