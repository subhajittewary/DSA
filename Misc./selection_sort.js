function selectionSort(a) {
    let n = a.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[min]) {
                let temp = a[j];
                a[j] = a[min];
                a[min] = temp
            }
        }
    }

    return a;
}

console.log(selectionSort([5,4,3,2,1]));
