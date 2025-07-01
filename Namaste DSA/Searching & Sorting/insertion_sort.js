function insertionSort(a) {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    let curr = a[i];
    let p = i - 1;

    //while loop to check if left portion of current index has greater value, if its there then shift by 1
    while (curr < a[p] && p >= 0) {
      a[p + 1] = a[p];
      p--;
    }

    //shift as per say
    a[p + 1] = curr;
  }

  return a;
}

console.log(insertionSort([4, 3, 2, 7, 9]));
