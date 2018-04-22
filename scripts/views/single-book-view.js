'use strict';

var app = app || {};

// Displays a single Book
(function(module) {
  const singleBookView = {};

  singleBookView.initSinglePage = function(singleBook) {
    console.log('ENTERING SINGLEBOOK VIEW');
    $('.container').hide();
    $('#detail-view').show();
    $('#detail-view').empty();
    let template = Handlebars.compile($('#single-book-template').text());
    $('#detail-view').append(template(singleBook));
  };

  module.singleBookView = singleBookView;
})(app);
