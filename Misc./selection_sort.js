function selectionSort(a) {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    //current is min index
    let min = i;
    //search for new index from right side of current index
    for (let j = i + 1; j < n; j++) {
      //if found then swap with current index
      if (a[j] < a[min]) {
        let temp = a[j];
        a[j] = a[min];
        a[min] = temp;
      }
    }
  }

  return a;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
