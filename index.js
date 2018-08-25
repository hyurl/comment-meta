const trim = require("lodash/trim");
const map = require("lodash/map");
const filter = require("lodash/filter");

/**
 * @param {string} html 
 * @returns {Array<{[x: string]: string}>}
 */
function meta(html) {
    var re = /<!--([\s\S]+?)-->/g,
        matches = html.match(re),
        meta = [];

    for (var i in matches) {
        (function (match) {
            if (match.indexOf(":") === -1) return;

            var parts = filter(map(match.split(/\n|;/), function (part) {
                var pair = part.split(":"),
                    cahrs = " \r\n;",
                    obj = {};
                obj[trim(pair[0], cahrs)] = trim(pair[1], cahrs);
                return obj;
            }), function (obj) {
                return obj && Object.keys(obj)[0] !== "";
            });

            Object.assign.apply(void 0, parts);
            meta.push(parts[0]);
        }(matches[i].slice(4, -3)));
    }

    return meta;
}

module.exports = exports = meta;
exports.meta = exports.default = meta;