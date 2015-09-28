Package.describe({
  name: 'benni:paginator',
  summary: 'Super simple client-only cursor pagination + UI',
  version: '0.2.3',
  git: 'https://github.com/hitchcott/meteor-paginator'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0.2.1');




  // package itself
  api.use([
    'templating',
    'reactive-var',
    'coffeescript'
  ], 'client')

  api.addFiles([
    'paginator.html',
    'paginator.js'
  ], 'client');





  api.export('Paginator');




});
