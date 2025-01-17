/**
 * 镜像js中只需修改这个文件
 */
window.splitDomainConfig = function (num, domainHost) {
    var arr = domainHost.split("."),
        len = arr.length,
        array = [];
    if (num > len) return;
    for (var i = 0; i < num; i++) {
        array.push(arr[len - (i + 1)]);
    }
    return array.reverse().join('.');
};

window.getDomain = function () {
    domainHost = window.location.host;
    if (!domainHost) return;
    var domain = domainHost.substring(domainHost.lastIndexOf(".") + 1, domainHost.length);
    if (!domain) return;

    if (domain == 'cn') {
        return splitDomainConfig(3, domainHost);
    } else {
        return splitDomainConfig(2, domainHost);
    }
};

window.getCookie = function (name) {
    var oRegExp = new RegExp("(^|)" + name + "=([^;]*)(;|$)", "gi").exec(document.cookie),
        aCookie;
    if (aCookie = oRegExp) {
        var e = unescape(aCookie[2]);
        if (e != null && typeof (e) != "undefined") {
            return e;
        }

        return "";
    }
    return "";
};

window.ServerHost = {
    moocDomain: window.location.protocol + "//" + window.location.host,
    moocHostName: "http://www.fanya." + getDomain(),
    purl: "https://p.ananas.chaoxing.com",
    spaceDomain: "http://i.mooc.chaoxing.com",
    passporturl: "http://passport2." + getDomain(),
    passportlogin: "http://passport2." + getDomain() + "/api/passport2-onlineinfo.js?key=true&refer=",
    fanyaurl: "http://course.fanya." + getDomain(),
    photoDomain: "http://photo.fanya.chaoxing.com",
    domainurl_old: "http://fanya.chaoxing.com",
    yunyadomain: "http://yunya.mooc.chaoxing.com",
    bjdomain: "http://bj.chaoxing.com",
    solrDomain: "http://solr.ananas.com:8983",
    msgDomain: "http://msg.mooc." + getDomain(),
    schoolApiDomain: "http://schoolapi.mooc.chaoxing.com",
    appDomain: "http://apps.ananas.chaoxing.com",
    csDomain: "http://cs.ananas.chaoxing.com",
    csDomainHttps: "https://cs-ans.chaoxing.com",
    cloudDomain: "http://cloud.ananas.chaoxing.com",
    newCloudDomain: location.protocol + "//pan-yz.chaoxing.com",
    xueyinonlineDomain: location.protocol + "//www.xueyinonline.com",
    xueyinonlineChaoXingDomain: location.protocol + "//xueyinonline.chaoxing.com",
    pananas: "http\:\/\/p.ananas\.chaoxing\.com\/star\/origin\/",
    schoollist: "http://www.fanya." + getDomain() + "/school/schoollist.html",
    moocTJDomain: "https://fystat-ans.chaoxing.com",
    createScript: function (srcUrl) {

        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = srcUrl;
        var oHead = document.getElementsByTagName("head")[0];
        try {
            oHead = oHead || document.documentElement;
            oHead.appendChild(oScript);
        } catch (e) {}

    }
};
