module app;

import std;

int count(T[] arr) {
    if (arr.empty)
        return 0;
    return 1 + count(arr[1..$]);
}
