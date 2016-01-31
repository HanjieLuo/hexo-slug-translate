var youdao = require('youdao');
// var youdao = require('./lib/');
// var sync = require('synchronize')

// 设置参数
youdao.set({
    keyfrom: 'Hanjie',
    key: '2140704655',
});

function checkEnglishOnly(str) {
    if (escape(str).indexOf("%u") < 0) {
        return true;
    } else {
        return false;
    }
}

// function sleep(time, callback) {
//     var stop = new Date().getTime();
//     while (new Date().getTime() < stop + time) {;
//     }
//     callback();
// }

// var MAXTIMES = 1000;
// var t = 0;

// function hasTranslated() {
//     if (!checkEnglishOnly(permalink) && t <= MAXTIMES) {
//         console.log(t);
//         t += 1;
//         // sleep(10, function(){hasTranslated(permalink);});  
//         setTimeout(function() {
//             hasTranslated(permalink);
//         }, 10);
//     }
// }


function* translate(permalink) {
    console.log("in:"+permalink);
    return result = yield wait.for(youdao.translate, permalink);
}

permalink = "／这是一篇文章- 哈哈，好看test tt.html";
// permalink = "／this is a test.html";


if (!checkEnglishOnly(permalink)) {
    // result = translate(permalink);
    // sync(youdao, 'translate')
    // var result = sync.await(youdao.translate(permalink, sync.defer()))
    // console.log(result);

    youdao.translate(permalink, function(error, result) {
        if (!error) {
            permalink = result;
            console.log("get:" + permalink);
        }
    });
}


// hasTranslated();


console.log(permalink);
