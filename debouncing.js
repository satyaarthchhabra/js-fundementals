console.log("debouncing methord");
// like when we implement the search functionality , in search we call api on every key press and it slows down the search process . so to overcome this we call the api when there is a delay in typing(when the user have done typing a word) .this process of delay is callleed debouncing
let counter = 0;
let timer;

const getData = () => {
  let value = document.querySelector("#value").value;
  console.log(`the count  ${counter++} ${value} `);
};
function debouncing(fn, delay) {
  //   the argument here refers to the arguments(props) the function is reciving
  
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
}
const betterFunction = debouncing(getData, 300);
