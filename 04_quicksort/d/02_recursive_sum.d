module app;

import std;

T rec_sum(T[] list) {
    if (list.empty)
        return 0;
    return list[0] + sum(list[1..$]);
}

void main() {
    writeln(rec_sum([1,2,3,4]));
}
