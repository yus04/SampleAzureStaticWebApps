module.exports = async function (context) {
    var time = show_time();
    context.res.json({
        time: time
    });
};

function show_time(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return (
        toString(year) + "年" + 
        toString(month) + "月" +
        toString(date) + "日" +
        toString(hour) + "時" +
        toString(minute) + "分" +
        toString(second) + "秒"
    );
}