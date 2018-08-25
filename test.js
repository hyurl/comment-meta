var meta = require(".").default;
var assert = require("assert");

var html = '<!--\n'
    + 'title: Hello, World!\n'
    + 'author: Ayon Lee\n'
    + 'author email: i@hyurl.com\n'
    + '-->\n'
    + '<h1>This is a title</h1>\n'
    + '<!-- title: Hello, World!; author: Ayon Lee; author email: i@hyurl.com -->\n'
    + '<!-- This comment will not be parsed -->'
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