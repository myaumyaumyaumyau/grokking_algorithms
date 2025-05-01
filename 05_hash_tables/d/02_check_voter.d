module app;

import std;

bool[string] voted;

void check_voter(string name) {
    auto p = name in voted;
    if (p !is null)
        writeln("Kick them out!");
    else {
        voted[name] = true;
        writeln("Let them vote!");
    }
}

void main() {
    check_voter("tom");
    check_voter("mike");
    check_voter("mike");
}    
