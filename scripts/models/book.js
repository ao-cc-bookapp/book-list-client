'use strict';

// require('dotenv').config();

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://ao-cc-bookapp.github.io/book-list-client/';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.fetchOne = (id) => {
    console.log('RUNNING FETCHONE FROM BOOK.JS');
    console.log('ENV.apiURL: ',`${ENV.apiUrl}`);
    console.log('fetchOne ID',id);
    return $.getJSON(`${ENV.apiUrl}` + '/api/v1/books/' + id)
      .catch(err => console.error(err));
  };


  Book.emptyArray = function() {
    Book.all.length = 0;
  };

  Book.create = newBook =>
  $.post(`${ENV.apiUrl}/api/v1/books`, newBook)
   .catch(err => console.error(err));


  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

  Book.fetchAll = callback =>
    $.get(`${ENV.apiUrl}/api/v1/books`)
      .then(console.log('Just Retreived the books from the DB'))
      // .then(Book.all = [])
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Book = Book;
})(app);
