# MarkdownIt

Packages [MarkdownIt](https://github.com/markdown-it/markdown-it) for use in Meteor.

## Instructions

This package initializes MarkdownIt in the client and server namespace as ``markdownIt``. In other words, where one would have previously required the package like so (in a Node app, for example):
```js
var markdownIt = require('markdown-it');
```
One may now go forth and use ``markdownIt`` directly, expecting similar behavior.
