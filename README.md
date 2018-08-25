# Comment Meta

**An HTML/Markdown comment metadata parsing tool.**

## Example

```javascript
var meta = require(".").default;
var assert = require("assert");

var html = '<!--\n'
    + 'title: Hello, World!\n'
    + 'author: Ayon Lee\n'
    + 'author email: i@hyurl.com;\n'
    + '-->\n'
    + '<h1>This is a title</h1>\n'
    + '<!-- title: Hello, World!; author: Ayon Lee; author email: i@hyurl.com -->\n'
    + '<!-- This comment will not be parsed -->\n'
    + '<!-- This comment\n'
    + 'will not be parsed as well -->';

var expected = [
    {
        title: "Hello, World!",
        author: "Ayon Lee",
        "author email": "i@hyurl.com"
    },
    {
        title: "Hello, World!",
        author: "Ayon Lee",
        "author email": "i@hyurl.com"
    }
];

assert.deepStrictEqual(meta(html), expected);

console.log("#### OK ####");
```

## Meta Style

This tool allows you setting metadata in HTML/Markdown comments, in the style 
of `<key>: <value>`, separated by semicolons (`;`) or line endings (`\n`), and 
parse them into an array of objects stored all key-value pairs. See the above 
example.