console.log('event delegation is here  ');
document.querySelector("#form").addEventListener('keyup',(e)=>{
console.log(e.target.dataset);
if (e.target.dataset.uppercase!=undefined) {
  e.target.value=e.target.value.toUpperCase();  
}
})
// in event delegation we use event bubling as we pass a event to its parent function so that if more and more elements are added to parent element then we dont have top attach the event listner to each element 
// in above example if we add more fields to the form then we dont have to attach event listner to each input field 
// it is the use of input field
// pros
    // memory saver 
    // write less code hence code readability increase 
    // dom manipulation
// cons
// all events are not bubled up like blur ,focus , scroll ,
//cant use  stop propogation here as it will breAK the code  