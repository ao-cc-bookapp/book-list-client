'use strict';

var app = app || {};

// Displays a single Book
(function(module) {
    const singleBookView = {};
    console.log('Entering singleBookView');
    
  
    singleBookView.initSinglePage = function() {
        console.log('Entering singleBookView.initSinglePage');
      $('.container').hide();
      $('#detail-view').show();
      module.Book.all.map(book => $('#book-list').append(book.toHtml()));
    };
  
    module.singleBookView = singleBookView;
  })(app);
  
//   $(function() {
//     console.log('Calling fetchOne from single-book-view.js');
//     app.Book.fetchOne(app.singleBookView.initIndexPage);
//   }); 

// Displays all Books
// (function(module) {
//   const bookView = {};

//   bookView.initIndexPage = function() { 
//     console.log('running  initIndexPage THIRD');
//     $('.container').hide();
//     $('#book-view').show();
//     module.Book.all.map(book => $('#book-list').append(book.toHtml()));
//   };

//   // app.Book.fetchAll(app.bookView.initIndexPage);

//   console.log('instantiating bookView FIRST');


//   console.log('Setting up the listener');
//   $('#book-view ul').off()
  
//   $('#book-view ul').on('click', '.book-container', (event) => {
//     console.log('Click detected');
//     const id = $(event.target).parent().data('book_id');
//     // const id = '1';
//     page('/books/' + id)
//   })

//   module.bookView = bookView;

// })(app);



// $(function() {
//   console.log('Calling fetchAll from book-view.js FOURTH');
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });

// console.log('This is outside the function in question! SECOND');



// Displays a single Book
(function(module) {
  const singleBookView = {};

  singleBookView.initSinglePage = function(singleBook) {
    console.log('ENTERING SINGLEBOOK VIEW');
    $('.container').hide();
    $('#detail-view').show();
    $('#single-book').empty();
    let template = Handlebars.compile($('#single-book-template').text());
    $('#detail-view').append(template(singleBook));
  };

  module.singleBookView = singleBookView;
})(app);

// $(function() {
//   app.Book.fetchOne(app.singleBookView.initIndexPage);
// }); 