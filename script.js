function Book(title, author, pages, read){
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function() {
		return title + " by " + author + ", " + pages + ", " + read
	}
}

function render(array){
	const main = document.querySelector('#main');
	var button = document.createElement('button');
	button.addEventListener('onclick', addBook);
	button.textContent = "Add a Book";
	main.appendChild(button);

	const display = document.createElement('div');
	display.setAttribute("id", "display");

	for (let i = 0; i < array.length; i++){
		var div = document.createElement('div')
		div.classList.add("book");
		
		var divBook = document.createElement('div');
		divBook.classList.add("bookInfo");

		var p  = document.createElement('p');
		p.textContent = array[i].title
		divBook.appendChild(p);

		p  = document.createElement('p');
		p.textContent = "by: " + array[i].author
		divBook.appendChild(p);

		p  = document.createElement('p');
		p.textContent = array[i].pages + " pages"
		divBook.appendChild(p);

		p  = document.createElement('p');
		p.textContent = array[i].read
		divBook.appendChild(p);

		div.appendChild(divBook);

		divBook = document.createElement('div');
		divBook.classList.add("buttons");

		div.appendChild(divBook);

		display.appendChild(div);
		main.appendChild(display);

	}

}
function addBook(){

}

let mybook1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Read")
let mybook2 = new Book("The Hobbit 2", "J.R.R. Tolkien", 297, "Not read yet")
let mybook3 = new Book("The Hobbit 3", "J.R.R. Tolkien", 297, "Not read yet")
let mybook4 = new Book("The Hobbit 4", "J.R.R. Tolkien", 297, "Not read yet")
let mybook5 = new Book("The Hobbit 5", "J.R.R. Tolkien", 297, "Not read yet")
let mybook6 = new Book("The Hobbit 6", "J.R.R. Tolkien", 297, "Not read yet")
let mybook7 = new Book("The Hobbit 7", "J.R.R. Tolkien", 297, "Not read yet")

let myLibrary = [mybook1, mybook2, mybook3, mybook4, mybook5, mybook6, mybook7];

render(myLibrary);

console.log(mybook1.info())