module app;

import std;

int binary_search(T)(T[] arr, T target) {
    if (arr.length == 0)
        return -1;

    int mid = cast(int)arr.length / 2;
    if (arr[mid] == target)
        return mid;
    else if (arr[mid] > target)
        return binary_search(arr[0..mid], target);
    else {
        int recursive_response = binary_search(arr[mid + 1 .. $], target);
        return recursive_response == -1 ? recursive_response : (mid + 1) + recursive_response;
    }
}

void main() {
    writeln(binary_search([6, 7, 8, 9, 10], 8));
    writeln(binary_search([6, 7, 8, 9, 10], 6));
}
