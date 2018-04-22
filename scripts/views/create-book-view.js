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

// Sends the create form
(function(module) {
  const createBookView = {};

  createBookView.initCreatePage = function() {
    console.log('ENTERING CREATEBOOK VIEW');
    $('.container').hide();
    $('#form-view').show();
    $('#create-book').off().on('submit', 'form', (event) => {
        event.preventDefault();
        const title = $('#title').val();
        const author = $('#author').val();
        const isbn = $('#isbn').val();
        const image_url = $('#image-url').val();
        const description = $('#book-description').val();
        app.Thing.create({ name }).then(page('/'));
        $('#create-form-name').val('');
})
    // $('#single-book').empty();
    // let template = Handlebars.compile($('#single-book-template').text());
    // $('#detail-view').append(template(singleBook));
  };

  module.createBookView = createBookView;
})(app);