// tweak to run on GH Pages
// if (window.location.protocol.startsWith('https:')) {
//     page.base('/internets-of-thing');
// }

// all route changes should hide page containers
page('/*', (ctx, next) => {
  $('.page').hide();
  next();
})

// page('/', () => console.log('hola'));

page('/', app.bookView.initIndexPage);

page('/create', app.createBookView.initCreatePage);


page('/:book_id', (ctx) => {
  console.log('ABOUT TO CALL FETCHONE!!!');
  console.log('Book id', ctx.params.book_id);
  app.Book.fetchOne(ctx.params.book_id)
  .then((singleBook) => {
    app.singleBookView.initSinglePage(singleBook);
  });
});
// page('/books/new', app.createPage.init);

page.start();