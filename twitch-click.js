// working
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done waiting");
      resolve(ms)
    }, ms )
  })
} 
function foo() {
    var i = document.getElementsByClassName("tw-button--success")[0];
    if (i != undefined) {i.click(); console.log(i);}
}

// 1560 = 5 hours 10 minutes
var i;
for (i = 0; i < 1560; i++) {
  foo();
  await wait(10000);
} 