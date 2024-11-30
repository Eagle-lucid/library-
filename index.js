// localStorage or empty array to store book list
const myBookList = [];

// Book details
const bookData = {
    '1984': { 
        title: '1984', 
        author: 'George Orwell', 
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
        pages: 328,
        image: 'images/1984.jpg',
    },
    'Becoming': {
        title: 'Becoming',
        author: 'Michelle Obama',
        description: 'A memoir by the former First Lady of the United States, Michelle Obama.',
        pages: 426,
        image: 'images/becoming.jpg',
    },
    'Educated': {
        title: 'Educated',
        author: 'Tara Westover',
        description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho and later escapes to learn about the world through education.',
        pages: 334,
        image: 'images/educated.jpg',
    },
    'To-Kill-a-Mockingbird': {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel about racial injustice in the Deep South, as seen through the eyes of young Scout Finch.',
        pages: 281,
        image: 'images/mocking.jpg',
    },
    'Sapiens': {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        description: "A historical account of humankind's evolution, exploring biology, anthropology, and economics.",
        pages: 498,
        image: 'images/sapiens.jpg',
    },
    'TheGreatGatsby': {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel about the American dream and the disillusionment of post-war America, as experienced by Jay Gatsby.',
        pages: 180,
        image: 'images/gatsby.png',
    },
};

// Function to show the details of the clicked books
function showDetails(bookTitle) {
    const book = bookData[bookTitle];
    const bookDescription = document.getElementById('bookDescription');
    const mainSection = document.querySelector('main');

    if(book) {
        bookDescription.innerHTML =
        `
            <div class="book-details">
                <img src="${book.image}" alt="Cover of ${book.title}">
                    <div class="book-text">
                        <h3>Title: ${book.title}</h3>
                        <h3>Author: by ${book.author}</h3>
                        <p><strong>Description: </strong>${book.description}</p>
                        <p><strong>Pages: </strong>${book.pages}</p>
                    </div>
            </div>
            <div class="status">
                <label class="status-txt">Status:</label>
                
                <label for="read">
                    <input type="radio" name="status" id="read" value="read" required>
                    Read
                </label>
                
                <label for="unread">
                    <input type="radio" name="status" id="unread" value="unread" required>
                    Unread
                </label>
            </div>
            <button type="submit" id="addBookButton">Add Book</button>
        `;
        bookDescription.style.visibility = 'visible';
        mainSection.classList.add('main-blurred');
        addBookButton.classList.add('hidden');
        // Add eventListener for the dynamically created "Add Book" button
        document.getElementById('bookDescription').addEventListener('click', (e) => {
            if (e.target && e.target.id === 'addBookButton') {
                addToBookList(book);
            }
        });
        
       //setTimeout and add event Listener
       setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
       }, 100);
    }
}

// Function to cancel the modal when user click outside the modal
function outsideClickListener(event) {
    const bookDescription = document.getElementById('bookDescription');
    const mainSection = document.querySelector('main');
    const addBookButton = document.getElementById('addBookButton');

     // Check if the click is outside the modal
     if (!bookDescription.contains(event.target)) {
        // Hide modal and remove blur
        bookDescription.style.visibility = 'hidden';
        mainSection.classList.remove('main-blurred');
        addBookButton.classList.remove('hidden');
        // Remove the event listener
        document.removeEventListener('click', outsideClickListener);
    }
}

// Function for hidden form
const addBookButton = document.getElementById('addBookButton');
const hiddenForm = document.getElementById('hiddenForm');
const closeModalButton = document.getElementById('closeModal');
const formSubmitButton = document.querySelector('.btn-entry-con button[type="submit"]');
const addBookForm = document.getElementById('addBookForm');


// show form when the 'New button' is clicked
addBookButton.addEventListener('click', () => {
    hiddenForm.classList.add('visible');
    addBookButton.style.visibility = 'hidden';
});
// Hide form when 'Cancel' is clicked 
closeModalButton.addEventListener('click', () => {
    hiddenForm.classList.remove('visible');
    addBookButton.style.visibility = 'visible';
});
// Hide the form when 'Add Book' is clicked on the form itself
formSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenForm.classList.remove('visible');
    addBookButton.style.visibility = 'visible';
});
// Handle form submission (Add Book) and store data
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting in the default way

    // Get the values from the form inputs
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const description = document.getElementById('book-description').value;
    const pages = document.getElementById('book-pages').value;
    let status = '';

    // Get the selected status (read or unread)
    const statusRadios = document.getElementsByName('status');
    for (const radio of statusRadios) {
        if (radio.checked) {
            status = radio.value;
            break;
        }
    }

    // Create a new book object
    const newBook = {
        title: title,
        author: author,
        description: description,
        pages: pages,
        status: status
    };

    // Add the new book to the book list
    myBookList.push(newBook);

    // Update the book list display
    updateBookList();

    // Close the form modal and reset the form
    hiddenForm.classList.remove('visible');
    addBookButton.style.visibility = 'visible';
    addBookForm.reset();
});

// Function to update and display the book list from localStorage
function updateBookList() {
    displayBookList();
}

// Function to add books to myBookList
function addToBookList(book) {
    console.log("Add Book triggered for:", book.title);
    // Check if book is already in myBookList
    const isBookAlreadyAdded = myBookList.some((bookList) => bookList.title === book.title);

    if(isBookAlreadyAdded) {
        showMessage(`${book.title} is already in your book list!`, `error`);
    } else {
        myBookList.push(book);
        showMessage(`${book.title} has been added to your book list!`, `success`);
    }
   updateBookList();
}
function showMessage(message, type) {
    const messageContainer = document.getElementById('messageContainer');
    
    // Set the message and style based on the type (success/error)
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';
    messageContainer.style.padding = '10px';
    messageContainer.style.marginTop = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = '#fff';
    messageContainer.style.fontFamily = 'sans-serif';
    messageContainer.style.transition = 'opacity 0.5s ease';
    
    // Different styles for success and error
    if (type === 'success') {
        messageContainer.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        messageContainer.style.backgroundColor = '#f44336';
    }

    // Fade out after 3 seconds
    setTimeout(() => {
        messageContainer.style.opacity = '0';
        setTimeout(() => {
            messageContainer.style.display = 'none'; // Hide after fade out
            messageContainer.style.opacity = '1'; // Reset for next use
        }, 500); // Match this to your CSS transition time
    }, 3000);
}

// Display book list from localStorage
function displayBookList() {
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = '';
    myBookList.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <button class="remove-book" data-title="${book.title}">Remove</button>
        `;
        bookListContainer.appendChild(bookItem);
    });

    // Add event listeners for removing books
    const removeButtons = document.querySelectorAll('.remove-book');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const bookTitle = e.target.getAttribute('data-title');
            removeBookFromList(bookTitle);
        });
    });
}

// Function to remove a book from the list
function removeBookFromList(bookTitle) {
    const bookIndex = myBookList.findIndex(book => book.title === bookTitle);
    if (bookIndex !== -1) {
        myBookList.splice(bookIndex, 1);
        updateBookList();
    }
}

// Initial display of the book list
displayBookList();
