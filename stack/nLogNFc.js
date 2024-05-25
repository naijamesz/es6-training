function nLogNfunction(n) {
  let y = n;
  let time = performance.now();
  while (n > 1) {
    n = Math.floor(n / 2); //n divided by 2
    for (let i = 1; i <= y; i++) {
      console.log(i);
    }
  }
  let time1 = performance.now();
  console.log(`${time1 - time} milliseconds`);
}

nLogNfunction(32); // O(n log n) --> L
