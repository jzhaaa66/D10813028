let topicsArray = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機信",
    "重複信",
    "條件判斷"
];

let startDate = new Date () ;

function setMonthAndDay(startMonth,startDay){
    //月份 日期
    startDate.setMonth(startMonth-1,startDay);
    // 時間
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(4,1);