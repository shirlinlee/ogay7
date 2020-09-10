var allFunc = {
  addCommas: function (val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
    }
    return val;
  },
  getUrlParam: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  randomFunc: function (min, max) {
    var maxNum = max;
    var minNum = min;
    var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return n;
  },
  outsideClick: function (e) {
    console.log(e);
  },
};
