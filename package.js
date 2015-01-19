Package.describe({
  name: 'kenlimmj:markdown-it',
  summary: 'Wrapper for the markdown-it parser.',
  version: '1.0.1',
  git: 'https://github.com/kenlimmj/meteor-markdown-it.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('markdown-it.min.js');
  api.export("markdownIt");
});
