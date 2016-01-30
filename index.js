var hexo = hexo != undefined ? hexo : {}

// console.log("test...1", __dirname)
hexo.on('generateAfter', function(post){
    // console.log(this.model('Post').data);
    // for (data in this.model('Post')){
    //     console.log(data);
    // }
})