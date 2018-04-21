'use strict';

var app = app || {};
// Displays all Books
(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() { 
    console.log('running initIndexPage');
    $('.container').hide();
    $('#book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  module.bookView = bookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});


// Displays a single Book
// (function(module) {
//   const singleBookView = {};

//   singleBookView.initIndexPage = function() {
//     $('.container').hide();
//     $('.book-view').show();
//     module.Book.all.map(book => $('#book-list').append(book.toHtml()));
//   };

//   module.singleBookView = singleBookView;
// })(app);

// $(function() {
//   app.Book.fetchOne(app.singleBookView.initIndexPage);
// }); 