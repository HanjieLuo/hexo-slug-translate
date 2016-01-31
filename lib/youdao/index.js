var request = require('sync-request');
var qs = require('querystring');


var errorMap = {
    0: '',
    20: '要翻译的文本过长',
    30: '无法进行有效的翻译',
    40: '不支持的语言类型',
    50: '无效的key',
};

var base = 'http://fanyi.youdao.com/openapi.do?';

var Youdao = function() {
    this.options = {
        keyfrom: '',
        key: '',
        type: 'data',
        doctype: 'json',
        version: '1.1',
        q: '',
        keyfrom: 'Hanjie',
        key: '2140704655'
    };
}

Youdao.prototype.set = function(settings) {
    for (var i in settings) this.options[i] = settings[i];
};


Youdao.prototype.translate = function(string) {
    string = String(string);
    if (string === '') return '';
    this.options.q = string;
    var res = request('GET', base + qs.stringify(this.options), {timeout: 2000});
    var data = res.getBody('utf8');

    // console.log(data);
    var json;
    var error;
    var isSentence;
    var result;

    json = JSON.parse(data);
    error = errorMap[json.errorCode];

    if (error !== '') {
        return string;
    }

    result = json.translation;
    if (!result.length) return string;

    if (json.basic && json.basic.explains) result = json.basic.explains;
    else isSentence = true;

    return (isSentence ? result[0] : result);

};

module.exports = new Youdao();
