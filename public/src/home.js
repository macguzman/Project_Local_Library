function getTotalBooksCount(books) {
 return helpCount(books);
}

function getTotalAccountsCount(accounts) {
  var total = 0
  for (let i = 0; i < accounts.length; i++) {
    total++
  }
  return total
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    const borrow = books[i].borrows[0];
    if (!borrow.returned) {
      count++;
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  let obj = {};
  books.forEach((book) => {
    if(obj[book.genre]){
      obj[book.genre]++;
    } else {
      obj[book.genre] = 1;
    }
  });
  let genreCount = [];
  for (let [key, value] of Object.entries(obj)) {
    genreCount.push({
      'name' : key,
      'count' : value
    });
  }
  genreCount.sort((a, b) => b.count - a.count);
  return genreCount.slice(0, 5)
}

function getMostPopularBooks(books) {
  return books.map((book) => {return {name: book.title, count: book.borrows.length}}).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  return books.map((book) => {return {name: authors.find(author => author.id == book.authorId).name.first + ' ' + authors.find(author => author.id == book.authorId).name.last,
     count: book.borrows.length}})
     .sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0,5)

}

function helpCount (count) {
  let total = 0;
  count.forEach((account) => total++)
  return total;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
