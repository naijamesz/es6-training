const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
  let time0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log(`Found Nemo!`);
    }
  }
  let time1 = performance.now();
  console.log(`To find Nemo, it took ${time1 - time0} milliseconds`);
}

// findNemo(nemo); // O(1) --> Constant Time

findNemo(large);

// Out put : Found Nemo! To find Nemo, it took 0.10000000000000009 milliseconds+-
