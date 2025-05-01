module app;

import std;

T[] quicksort(T[] arr) {
    if (arr.length < 2)
        return arr;
    else {
        auto pivot = arr[0];
        auto less = arr.filter!(el => el < pivot).array;
        auto greater = arr.filter!(el => el > pivot).array;
        return quicksort(less) ~ arr.filter!(el => el == pivot).array ~ quicksort(greater);
    }
}

void main() {
    writeln(quicksort([10, 5, 2, 3]));
}
