var array1 = [1, 3, 5, 2, 7, 0, 4];
/*array1.sort(function (a, b) {
   return a > b ? 0 : a < b ? 1 : -1;
});*/
var array2 = [10, 5, 2, 3, 7, 3, 9];
/*array2.sort(function (a, b) {
    return a > b ? 0 : a < b ? 1 : -1;
});*/

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}

function sort_array (arr) {
    var len = arr.length;
    for (var outer = len; outer > 1; --outer) {
        for (var inner = 0; inner < outer; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner ++);
            }
        }
    }
    return arr;
};

console.log(sort_array(array1));
console.log(sort_array(array2));