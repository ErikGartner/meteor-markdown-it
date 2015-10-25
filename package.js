Package.describe({
  name: 'smoiz:markdown-it',
  summary: 'Wrapper for markdown-it 5.0.',
  version: '1.0.2',
  git: 'https://github.com/smoiz/meteor-markdown-it.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('markdown-it.min.js');
  api.export("MarkdownIt");
});
