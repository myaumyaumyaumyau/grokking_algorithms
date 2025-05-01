module app;

import std;

void greet2(string name) {
    writeln(i"how are you $(name)?");
}

void bye() {
    writeln("ok bye!");
}

void greet(string name) {
    writeln(i"hello, #(name)!");
    greet2(name);
    writeln("gettin ready to say bye...");
    bye();
}

void main() {
    greet("adit");
}
