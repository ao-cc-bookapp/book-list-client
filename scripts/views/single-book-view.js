'use strict';

var app = app || {};

// // Displays a single Book
// (function(module) {
//     const singleBookView = {};
//     console.log('Entering singleBookView');
    
  
//     singleBookView.initSinglePage = function() {
//         console.log('Entering singleBookView.initSinglePage');
//       $('.container').hide();
//       $('#detail-view').show();
//       module.Book.all.map(book => $('#book-list').append(book.toHtml()));
//     };
  
//     module.singleBookView = singleBookView;
//   })(app);
  




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