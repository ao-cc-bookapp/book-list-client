'use strict';

var app = app || {};

// Sends the create form
(function(module) {
  const createBookView = {};

  createBookView.initCreatePage = function() {
    console.log('ENTERING CREATEBOOK VIEW');
    $('.container').hide();
    $('#form-view').show();
    $('#create-book').off().on('submit', 'form', (event) => {
        event.preventDefault();
        console.log('SUBMIT PRESSED');
        let newBook = {
            title:$('#title').val(),
            author:$('#author').val(),
            isbn:$('#isbn').val(),
            image_url:$('#image-url').val(),
            description:$('#book-description').val()
        }
        console.log('newBook: ',newBook);
        app.Book.create(newBook).then(page('/'));
        $('#create-form-name').val('');
    })
  };

  module.createBookView = createBookView;
})(app);