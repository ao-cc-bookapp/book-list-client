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

// page('/books/:book_id', (ctx) => app.Books.fetchOne(ctx.params.id).then(app.singleBookView.init));
// page('/books/new', app.createPage.init);

page.start();