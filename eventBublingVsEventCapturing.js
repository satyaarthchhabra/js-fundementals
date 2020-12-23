console.log(" event bubling and event capturing ");
// in event bubling event bubles up from the innermost element to the top most element . in our case first event on child will execute then parent and then grandparent . by default event bubling is enabled
//  in event capturng => the  event is captured from top to bottom . in our case event on grandparent will execute then parent and then child  . if we pass the true in addeventlistner then it will go with event capturing

// when browser render then it look for event capturing  first and then event bubling. it moves in kab formula . first look for  capturing and then  it goes to the innermost element and start with capturing 

document.querySelector(".grandParent").addEventListener(
  "click",
  () => {
    console.log("grand parentwa clicked");
  },
  true
); // here the true is making event capturing on
document.querySelector(".parent").addEventListener("click", (e) => {
    console.log("parentwa clicked");
});
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();// by ading stop poropogatyion the event will not go on the next element , in our case the parent element 
    console.log("childwa clicked");
});
