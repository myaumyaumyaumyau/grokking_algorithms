module app;

import std;

bool personIsSeller(string name) {
    return name[name.length - 1] == 'm';
}

bool search(string name) {
    auto search_queue = DList!string();
    search_queue.insertBack(name);
    bool[string] searched;
    while (!search_queue.empty) {
        auto person = search_queue.front();
        search_queue.removeFront();
        auto found = person in searched;
        if (found !is null)
            continue;
        if (personIsSeller(person)) {
            writeln(person, " is a mango seller!");
            return true;
        }
        search_queue.insertBack(graph[person]);
        searched[person] = true;
    }
    return false;
}

string[][string] graph;

void main() {
    graph["you"] = ["alice", "bob", "claire"];
    graph["bob"] = ["anuj", "peggy"];
    graph["alice"] = ["peggy"];
    graph["claire"] = ["thom", "jonny"];
    graph["anuj"] = [];
    graph["peggy"] = [];
    graph["thom"] = [];
    graph["jonny"] = [];

    search("you");
}
