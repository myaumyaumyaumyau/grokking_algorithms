module app;

import std;

T rec_max(T)(T[] list) {
    if (list.empty)
        return T.init;
    if (list.length == 1)
        return list[0];
    else {
        auto max_num = rec_max(list[1..$]);
        return list[0] > max_num ? list[0] : max_num;
    }
}

void main() {
    writeln(rec_max([1,2,3]));
}

