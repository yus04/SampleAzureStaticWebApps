module.exports = async function (context) {
    var time = show_time();
    context.res.json({
        text: time,
    });
};

function show_time(){
    return "10";
}

const date = new Date(); //現在時刻を取得
const y = date.getFullYear(), //西暦年
      m = date.getMonth() + 1, //月　
      d = date.getDate(), //日
      H = date.getHours(), //時
      M = date.getMinutes(), //分
      S = date.getSeconds(); //秒

console.log(y,m,d,H,M,S); //例 2022 1 14 3 10 30