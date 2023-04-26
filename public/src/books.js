function findAuthorById(authors, id) {
  const findById = (author) => id === author.id;
  let found = authors.find(findById);
  return found;
}

function findBookById(books, id) {
  const found = books.find((book) => id === book.id);
  return found
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = [];
  const checkedIn = [];

  for (const book of books) {
    if (book.borrows[0].returned === true) {
      checkedIn.push(book);
    } else {
      checkedOut.push(book);
    }
  }

  return [checkedOut, checkedIn ];
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const borrowers = borrows.map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return {
      ...account,
      returned: borrow.returned 
    };
  });

  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
