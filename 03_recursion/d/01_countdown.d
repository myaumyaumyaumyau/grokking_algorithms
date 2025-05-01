module app;

import std;

void countdown(int i) {
    // base case
    if (i <= 0)
        return 0;
    // recursive case
    else {
        writeln(i);
        return countdown(i-1);
    }
}

void main() {
    countdown(5);
}
