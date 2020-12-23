console.log('throttling is here  ');
// throttling is done to prevent api calls. in throttling if  a fucntion is called once the it gets caled only after a set time even if the user try to call it in bw ,it will not get called again

const expensive=()=>console.log(` value is `)
function throttle(fn,limit){
    let flag=true;
    return()=>{
        let context=this;
        let args=arguments;
        if(flag){
            fn.call(context,...args);
            flag=false;
            setTimeout(()=>flag=true,limit)
        }
    }
}
// here first the flag is true and then the flag gets false when it calls and then if gets automaticallly true because of the setTimeout
const lessExpensive=throttle(expensive,4000)