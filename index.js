var baidu = require('./lib/baidu');
var youdao = require('./lib/youdao');
var util = require("hexo-util")

function checkEnglishOnly(str) {
    if (escape(str).indexOf("%u") < 0) {
        return true;
    } else {
        return false;
    }
}

hexo.extend.generator.register('post', function(locals) {
    var permalink = '';
    return locals.posts.map(function(post) {
        permalink = post.slug.toLowerCase();
        console.log("1:" + permalink);

        var start = permalink.lastIndexOf("/") + 1;
        var end = permalink.lastIndexOf(".html");

        if (end == permalink.length - 5) {
            title = permalink.slice(start, end);
        } else {
            title = permalink.slice(start);
        }

        if (!checkEnglishOnly(title)) {
            title = youdao.translate(title);

            if (!checkEnglishOnly(title)) {
                title = baidu.translate(title);
            }
        }

        permalink = permalink.slice(0, start) + util.slugize(title, {
            transform: 1
        }) + '.html';

        post.slug = permalink;
        console.log("2:" + permalink + "\n");

        return {
            path: post.path,
            data: post,
            layout: 'post'
        };
    });
});

