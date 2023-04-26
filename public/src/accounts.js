function findAccountById(accounts, id) {
  return accounts.some(account => account.id.includes(id)) ? accounts.find(account => account.id.includes(id)) : null;
}

function sortAccountsByLastName(accounts) {
const sortLastName = accounts.sort((accountA,accountB) => (accountA.name.last < accountB.name.last ? -1 : 1))
 return sortLastName;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const borrows = book.borrows;
    const numOfBorrows = borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + numOfBorrows;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id; 
  const checkedOutBooks = books.filter(book => {
    const borrow = book.borrows[0];
    return borrow.id === accountId && !borrow.returned;
  });

  const booksWithAuthorInfo = checkedOutBooks.map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {
      ...book,
      author: author
    };
  });

  return booksWithAuthorInfo;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
