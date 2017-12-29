
// ************** 全局函数 开始****************************
// 服务器登录接口

// var serverUrlBase = 'http://localhost:9999/client';
window.serverUrlBase = 'http://c2.samuelzuuka.com:9998/client';

// var frontUrlBase = 'http://c2.samuelzuuka.com/v6/jhshop-front/index2';
var frontUrlBase = 'http://localhost:88/index2';
var resUrlBase = 'http://c2.samuelzuuka.com:7000/';
var payServerUrlBase = 'http://c2.samuelzuuka.com/v6/3rd-server/';
var masterUrlBase = '#';

function getResUrlFromPath(path){
    if(path){
        if(path.startsWith('http') || path.startsWith('ftp')){
            return path;
        }
        if(path.startsWith('/')){
            return resUrlBase + path;
        }else{
            return resUrlBase + '/' + path;
        }
    }
}



// 函数封装
// 信息提示封装
// 1.登录页面 手机号码提示('请输入手机号码2-1', 'tips', 1);
function layerIips(content, className, time) {
    layer.open({
        content: content,
        className: className,
        time: time,
        shadeClose: false
    });
}


//错误提示
function errrTips(content) {
    layerIips(content, 'tips', 1);
}

//请求
(function ($) {
    var debug = true;
    $.api = {};
    $.api.post = function (url, params, callback) {
        axios.post(url, params).then(function (data) {
            if (data && data.status == 200) {
                callback && typeof callback === 'function' && callback(data.data);
            }
        });
    };
    // localStorage.setItem

    $.api.get = function (url, params, callback) {
        axios.get(url, { params: params }).then(function (data) {
            if (data && data.status == 200) {
                callback && typeof callback === 'function' && callback(data.data);
            }
        });
    };
})(jQuery);

// ？
function getUrl() {
    var loc = window.location.href;
    if (loc.indexOf('#') != -1) {
        var index = loc.indexOf('#');
        return loc.substring(0, index);
    }
    return loc;
}

// 取字符串
function is_valid_str(str) {
    return str && (str + '').trim().length > 0;
}

// 存储cookie
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}

//取回 cookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

// form 表单提交的值
// 1.登录验证手机号码
$.fn.formJSON = $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$.fn.formLoad = function (data) {

    if(data){
        for(var key in data){
            $(this).find('input[name="'+key+'"]').val(data[key]);
        }
    }
};

//弹框
function layerConfirm(content, yes, no) {
    layer.open({
        content: content,
        btn: ['确定', '取消'],
        shadeClose: false,
        yes: yes,
        no: no
    });
}

//忘记密码

//手机号校验
function isMobile(str) {
    return new RegExp('^0?(13|15|18|14|17)[0-9]{9}$').test(str);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2]));
    return null;
}



function isEmail(str) {
    return new RegExp('^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$').test(str);
}

function isIntege(str) {
    return new RegExp('^[1-9]\\d*$').test(str);
}






// 登录的时候存储的 token 值；
var token = localStorage.token;
//登录时存储的登录名
var username = localStorage.getItem("params.username");
username = JSON.parse(username); //转为JSON


//判断是否登录，如果登录就是刷新
/*
if (token && token.trim().length > 1) {
    window.token = token;
} else {
    var href = location.href;
    if(!(
        href.indexOf('register.html') > -1
        || href.indexOf('login.html') > -1
        || href.indexOf('index.html') > -1
        || href.indexOf('details.html') > -1
        || href.indexOf('forgot.html') > -1
        || href.indexOf('essay.html') > -1
        )){
        location.href = frontUrlBase + '/login/login.html';
    }
}
*/


var openId = getQueryString('openId');
var unionId = getQueryString('unionId');

if (openId && openId.trim().length > 1) {
    localStorage.setItem('openId', openId);
} else {
    openId = localStorage.getItem('openId');
}

if (unionId && unionId.trim().length > 1) {
    localStorage.setItem('unionId', unionId);
} else {
    unionId = localStorage.getItem('unionId');
}
//
if (token && token.trim().length > 1) {
}else{
    $.api.post(serverUrlBase + '/customer/wxlogin', {openid: openId, unionid: unionId}, function (resp) {
        if(resp.success){
            window.token = resp.data.token;
        }else{
            // errrTips('请先注册！');
        }
    });
}

//添加的方法
function contactObj(obj, param){
	for (var k in param) {
		obj[k] = param[k];
	}
	return obj;
}

function mapPosition() {
    var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
      resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'RB'
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', function(res){
        var lat = res.position.getLng();
        var lng = res.position.getLat();
        localStorage.setItem('position', JSON.stringify({
          lat: lat,
          lng: lng
        }));
      }); //返回定位信息
      AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
    });
}
window.Utils = {
    getUrlParams: function () {
        var search = window.location.search,
            str = search.substring(1),
            tmpArr = str.split('&');
        var urlParmObj = {};
        if (tmpArr.length > 0 && tmpArr[0] != '') {
            for (var i = 0, len = tmpArr.length; i < len; i++) {
                var tmp = tmpArr[i].split('=');
                urlParmObj[tmp[0]] = tmp[1];
            }
        }
        return urlParmObj;
    },
    format: {
        money: function(money,bool,fix){
            fix = fix || 2;
            bool = bool || false;
            if (bool) {
                return parseFloat((money / 100).toFixed(fix));
            } else {
                return (money / 100).toFixed(fix);
            }
        }
    }
}
window.pageInfo = Utils.getUrlParams();