// setTimeout and concurrency model in javascript 
// suppose if we se a setTimeout for 5 sec then it is not compulsory that it will run after 5 sec . it is confirmed that setTimeout  will run after 6 sec . it can run at the 5th sec and also at the end of the file due to concurrency model
// suppose you made a setTimeout for 5sec but there are millions of line of code after it . then a setTimeout is registered and when the time for running the set timeout is expired and due to million of line of codes the call stack is blocked then the function will run only when the file execution will complete
console.log('start');
setTimeout(() => {
    console.log('setTimeout')
}, 5000);
let startDate = new Date().getTime();
let endDate = new Date().getTime();
while (startDate<endDate+10000) {
    startDate =new Date().getTime();
}
console.log('end is here ');
// if we make the value of settimeout to 0 sec instead of 5000 then also it will run after the empty of call stack