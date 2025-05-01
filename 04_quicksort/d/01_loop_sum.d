module app;

import std;

T loop_sum(T[] arr) {
    T total;
    foreach(x; arr)
        total += x;
    return total;
}

void main() {
    writeln(loop_sum([1,2,3,4]));
}
