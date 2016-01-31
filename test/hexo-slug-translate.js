
// var hexo = hexo != undefined ? hexo : {}
// var path = require('hexo-util');
// var pathFn = require('path');
// var fs = require('fs');
// console.log("test...1", __dirname)
// hexo.on('generateAfter', function(post){
//     // console.log(this.model('Post').data);
//     // for (data in this.model('Post')){
//     //     console.log(data);
//     // }
// })
// require('shelljs/global');

var fanyi = require('yd-fanyi')();
fanyi('how are you',function(err,res){
    if (err) {
        return console.log(err);
    }
    console.log(res.translation);
    //['你好'] 
});

// console.log(trans);
// var bt = require('bing-translate').init({
//     client_id: 'your_client_id', 
//     client_secret: 'your_client_secret'
//   });

// var trans = require('translate-google-free');

// hexo.extend.filter.register('post_permalink', function(data){

//     translate.go(data, function(err, res) {
//         if(!err) {
//             console.log(res);
//         }
//     });
//     console.log(data);

//     return data;
// });
return;