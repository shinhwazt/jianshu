var WXBrowserReg = /micromessenger/;
var SERVER_URL = "http://webapi.efftravel.com/";
var IMAGE_URL = "http://images.efftravel.com/";
var origin = window.location.origin + "/";
var getWxConfigParamsUrl = SERVER_URL+"api/service/getjssdk";
function isWeixinBrowser() {
    var flag = WXBrowserReg.test(navigator.userAgent.toLowerCase());
    if (!flag) {
        window.location = "not-wx-browser.html";
    }
}
//isWeixinBrowser();
$.ajax({
    type: "get",
    url: getWxConfigParamsUrl,
    dataType: "json"
}).done(function (data) {
    var params = data.data;
    wx.config({
        debug: false,
        appId: params.AppId,
        timestamp: params.Timestamp,
        nonceStr: params.NonceStr,
        signature: params.Signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ]
    });
    wx.checkJsApi({
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function (res) {
        }
    });
    wx.ready(function () {
        var shareData = {//自定义分享数据
            title: '世纪金辉',
            desc: '我们用高端专业的旅行视角为您打造终生难忘的私密旅程',
            link: origin + 'HtmlService/not-fllowed.html',//链接地址
            imgUrl: origin + 'HtmlService/images/h5/logo.png',
            success: function () {
            },
            cancel: function () {
            }
        };

        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareTimeline(shareData);
    });
}).fail(function () {
    $(".server-error-alert-message").show();
    setTimeout(function () {
        $(".server-error-alert-message").hide();
    }, 2000)
})
