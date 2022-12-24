module.exports = async function (context) {
    //
    context.res.json({
        time: get_time()
    });
};

function get_time(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return (
        toString(year) + "/" + 
        toString(month) + "/" +
        toString(date) + " " +
        toString(hour) + ":" +
        toString(minute)
    );
}