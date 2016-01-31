
var youdao = require('../lib/baidu');
var util = require("hexo-util")

function checkEnglishOnly(str) {
    console.log(escape(str));
    if (escape(str).indexOf("%u") < 0) {
        return true;
    } else {
        return false;
    }
}

permalink = "/测试nodejs,测试node.js 软件作用, 配置abc.html";
// permalink = "/this is a test.html";

console.log("1:" + permalink);
var start = permalink.lastIndexOf("/") + 1;
var end = permalink.lastIndexOf(".html");

if (end == permalink.length - 5) {
    title = permalink.slice(start, end);
} else {
    title = permalink.slice(start);
}

console.log(title);
if (!checkEnglishOnly(title)) {
    title = youdao.translate(title);
}

new_permalink = permalink.slice(0, start) + util.slugize(title) + '.html';

console.log("2:" + new_permalink);
// return new_permalink;
