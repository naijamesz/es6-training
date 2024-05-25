// ES5
function compressAllBoxesES5(boxes) {
  let t = performance.now();
  boxes.forEach(function (item) {
    console.log(item);
  });
  let t1 = performance.now();
  console.log(`${t1 - t} milliseconds`); // O(n) --> Linear Time
}

compressAllBoxesES5(['box1']);

// ES6
const compressAllBoxesES6 = boxes => {
  let t = performance.now();
  boxes.forEach(box => console.log(box));
  let t1 = performance.now();
  console.log(`${t1 - t} milliseconds`); // O(n) --> Linear Time
};

compressAllBoxesES6(['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10']);
