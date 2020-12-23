console.log('local storage vs session storage');

const getLocalStorageData=(key)=>JSON.parse(localStorage.getItem(key))
const setLocalStorageData=(key,value)=>localStorage.setItem(key, JSON.stringify(value))
let abc={
    name: "saa",
    type: "male"
}
setLocalStorageData("abc", abc)
console.log(getLocalStorageData("abc"));
// local storage
    // Main features:
    // Data is shared between all tabs and windows from the same origin.
    // The data will not expire. It will remain even after browser restart and survive OS reboot too.
    // We only needs to be on the same origin (domain/port/protocol), the url path can be different.
    // Both ‘key’ and ‘value’ values should be string

// session storage 
    // The sessionStorage exists only within the current browser tab. Another tab with the same page will have a different session storage.
    // However it is shared between iframes in the same tab (assuming they come from the same origin).
    // The data survives page refresh, but not closing/opening the tab.
    // However if you open the same page in another tab, and try again there, the code above returns null, meaning “nothing found”. 
