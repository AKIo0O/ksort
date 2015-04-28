
"use strict";

module.exports = function quickSort (array, compfunc, p, r) {

    compfunc = compfunc || function(a, b){return a > b};

    var p = p || 0, r = r || array.length - 1, index;
    
    if (p < r) {
        index = partition(array, p, r, compfunc);
        quickSort(array, compfunc, p, index - 1);
        quickSort(array, compfunc, index + 1, r);
    }
    return array;
};

function partition (array, p, r, compfunc) {
    
    var x = array[r], i = p - 1;
    
    for (var j = p; j < r; j++) {
        if (compfunc(array[j], x)) {
            swap(array, i++, j);
        }
    }
    swap(array, i+1, r);
    return i + 1;
};

function swap(array, lIndex, rIndex){
    array[lIndex] = [array[rIndex], array[rIndex] = array[lIndex]][0];
}

