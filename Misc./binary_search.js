//divide the array by 2, determine l and r based on target element
function binSearch(a, target) {
  let l = 0;
  let r = a.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (a[mid] === target) return mid;

    if (a[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}

console.log(binSearch([1, 2, 3, 4, 5], 4));
