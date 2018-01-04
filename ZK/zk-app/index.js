/**
 * Created by shiyuyuan on 2016/12/10.
 */


var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


app.engine('html', function (filePath, options, callback) {


    var mappings = [];

    var parseFile = function (content) {

        var includes = content.match(/@.+@/g);
        if(!includes || includes.length == 0){
            return content;
        }

        includes.forEach(function (item) {
            var page = item.replace(/@/g,'');
            var text='';
            if(typeof mappings[page] === 'undefined'){
                text = fs.readFileSync(page);
                if(text){
                    text = text.toString();
                }
                mappings[page] = text;
            }else{
                text = mappings[page];
            }
            text = parseFile(text);
            var reg = new RegExp(item,"g");
            content = content.replace(reg,text);
        });

        return content;

    };

    fs.readFile(filePath, function (err, content) {
        if (err)
            return callback(new Error(err));
        var rendered = content.toString();
        rendered = parseFile(rendered);
        return callback(null, rendered);
    })
});
app.set('views', '.');
app.set('view engine', 'html');


app.get(/\/([\s\S]+\.html)?$/,function (req, res) {
    var url = req.url;
    if(url == '/')
        res.render('index');
    else{
        url = url.substr(1);
        if(url.indexOf('?')>-1){
            url = url.substr(0,(url.indexOf('?')));
        }
        res.render(url);
    }
});


app.use("/", express.static(__dirname));

http.createServer(app).listen('88', function() {
    console.log('start@88');
});
