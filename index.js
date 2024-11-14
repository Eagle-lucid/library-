// Book details
const bookData = {
    '1984': {
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
        pages: 328,
    },
    'Becoming': {
        title: 'Becoming',
        author: 'Michelle Obama',
        description: 'A memoir by the former First Lady of the United States, Michelle Obama.',
        pages: 426,
    },
    'Educated': {
        title: 'Educated',
        author: 'Tara Westover',
        description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho and later escapes to learn about the world through education.',
        pages: 334,
    },
    'To-Kill-a-Mockingbird': {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel about racial injustice in the Deep South, as seen through the eyes of young Scout Finch.',
        pages: 281,
    },
    'Sapiens': {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        description: 'A historical account of humankind’s evolution, exploring biology, anthropology, and economics.',
        pages: 498,
    },
    'TheGreatGatsby': {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel about the American dream and the disillusionment of post-war America, as experienced by Jay Gatsby.',
        pages: 180,
    },

};

// Function to show the details of the clicked books
function showDetails(bookTitle) {
    const book = bookData[bookTitle];
    const bookDescription = document.getElementById('bookDescription');

    if(book) {
        bookDescription.innerHTML =
        `<h3>${book.title} by ${book.author}</h3>
        <p><strong>Description:</strong>${book.description}</p>
        <p><strong>Pages:</strong>${book.pages}</p>
        `;
        bookDescription.style.display = 'block';
    }
}