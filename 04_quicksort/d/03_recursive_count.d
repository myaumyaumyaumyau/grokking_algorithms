module app;

import std;

T rec_count(T[] list) {
    if (list.empty)
        return 0;
    return 1 + rec_count(list[1..$]);
}

void main() {
    writeln(rec_count([1,2,3,4]));
}
