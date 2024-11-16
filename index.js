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
    const addBookButton = document.getElementById('addBookButton');

    if(book) {
        bookDescription.innerHTML =
        `
            <img src="${book.images}" alt="Cover of ${book.title}">
            <h3>Title: ${book.title}</h3>
            <h3>Author: by ${book.author}</h3>
            <p><strong>Description: </strong>${book.description}</p>
            <p><strong>Pages: </strong>${book.pages}</p>
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

// show form when the 'Add button' is clicked
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
})