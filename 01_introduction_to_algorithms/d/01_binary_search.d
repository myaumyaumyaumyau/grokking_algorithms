module app;

import std.stdio: writeln;
import std.range: assumeSorted, SortedRange;

long binary_search(T)(SortedRange!(T[]) list, T item) {
    long low = 0;
    long high = list.length - 1;

    while (low <= high) {
        auto mid = (low + high) / 2;
        T guess = list[mid];
        if (guess == item)
            return mid;
        else if (guess > item)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

void main() {
    auto my_list = [1, 3, 5, 7, 9];
    writeln(binary_search(assumeSorted(my_list), 3));
    writeln(binary_search(assumeSorted(my_list), -1));
}
