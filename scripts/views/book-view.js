'use strict';

var app = app || {};
// Displays all Books
(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() { 
    console.log('running  initIndexPage THIRD');
    $('.container').hide();
    $('#book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  // app.Book.fetchAll(app.bookView.initIndexPage);

  console.log('instantiating bookView FIRST');


  console.log('Setting up the listener');
  $('#book-view ul').off()
  
  $('#book-view ul').on('click', '.book-container', (event) => {
    console.log('Click detected');
    const id = $(event.currentTarget).parent().data('bookid');
    console.log('id selected:', id);
    // const id = '1';
    // page('/books/' + id)
    page(`/books/${id}`)
  })

  module.bookView = bookView;

})(app);



$(function() {
  console.log('Calling fetchAll from book-view.js FOURTH');
  app.Book.fetchAll(app.bookView.initIndexPage);
});

console.log('This is outside the function in question! SECOND');



// // Displays a single Book
// (function(module) {
//   const singleBookView = {};

//   singleBookView.initSinglePage = function() {
//     $('.container').hide();
//     $('#detail-view').show();
//     module.Book.all.map(book => $('#book-list').append(book.toHtml()));
//   };

//   module.singleBookView = singleBookView;
// })(app);

// $(function() {
//   app.Book.fetchOne(app.singleBookView.initIndexPage);
// }); 