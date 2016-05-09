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

// var permalinks = {};

hexo.extend.generator.register('post', function(locals) {
    var permalink = '';
    var start;
    // var end;
    return locals.posts.map(function(post) {
        permalink = post.slug;
        // permalink =  = post.slug.toLowerCase();
        // console.log(hexo.model('Category'));
        // console.log(hexo.locals.get('categories'));
        // console.log(hexo.route.list());
        // console.log("\n\n\n");
        // console.log("1:" + permalink);

        start = permalink.lastIndexOf("/") + 1;
        // end = permalink.lastIndexOf(".html");
        // end = permalink.length;

        title = permalink.slice(start);

        if (!checkEnglishOnly(title)) {
            title = baidu.translate(title);

            if (!checkEnglishOnly(title)) {
                title = youdao.translate(title);
            }
        }

        // permalink = permalink.slice(0, start) + util.slugize(title, {
        //     transform: 1
        // }) + '.html';

        permalink = util.slugize(title, {
            transform: 1
        });

        // if (permalink in permalinks) {
        //     var i = 2;
        //     var tmp = '';
        //     do {
        //         tmp = permalink + i;
        //         i += 1;
        //     }while( tmp in permalinks);
        //     permalink = tmp;
        // }

        // permalinks[permalink] = '';

        // console.log(permalinks)

        post.slug = permalink;
        // console.log("2:" + permalink + "\n");

        return {
            path: post.path,
            data: post,
            layout: 'post'
        };
    });
});

// hexo.extend.filter.register('after_post_render', function(data){
//     // console.log(data);
//     // console.log("\n\n\n");
//     // for (category in data.categories) {
//     //     console.log(category);
//     // }
//     console.log(hexo.route.list());

//     console.log("\n\n\n");
//     return data;
// });
// hexo.extend.filter.register('after_generate', function() {
//     // console.log(hexo.route.list());
//     var posts = hexo.locals.get('posts');
//     posts.map(function(post) {
//         var layout = post.layout;
//         if (!layout || layout === 'false') {
//             console.log(post);
//             // hexo.route.set(post.path, function(fn) {
//             //     fn(null, post.content);
//             // });
//         }

//     });

//     // console.log(hexo.route.list());
// });
// hexo.extend.generator.register('categories', function(locals){
//     console.log(locals);
//     console.log("\n\n\n");
//     return locals;
//   // return locals.categories.map(function(category){
//   //   // category.slug = category.slug.toLowerCase();
//   //   // console.log(category);
//   //   // console.log("\n\n\n");
//   //   return {
//   //       name: category.name,
//   //       _id: category._id,
//   //       slug: category.slug,
//   //       path: category.path,
//   //       permalink: category.permalink,
//   //       posts: category.posts,
//   //       length: category.length 
//   //   };
//   // });
// });
