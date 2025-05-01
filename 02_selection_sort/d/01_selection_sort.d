module app;

import std.stdio: writeln;
import std.algorithm: minIndex, remove;


// or it is possible to use minIndex
T findSmallest(T)(T[] arr) {
    auto smallest = arr[0];
    auto smallest_index = 0;
    foreach(i; 0 .. cast(int)arr.length) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

T[] selectionSort(T)(T[] arr) {
    T[] newArr = [];
    foreach(i; 0 .. cast(int)arr.length) {
        auto smallest = findSmallest(arr); // or use minIndex(arr);
        newArr ~= arr[smallest];
        arr = arr.remove(smallest);
    }
    return newArr;
}

void main() {
    writeln(selectionSort([5, 3, 6, 2, 10]));
}
