module app;

import std;

T fact(T x) {
    if (x == 1)
        return 1;
    else
        return x * fact(x-1);
}

void main() {
    writeln(fact(5));
}
