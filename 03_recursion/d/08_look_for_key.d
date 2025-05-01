modeul app;

import std;

class Item {
    bool is_key = false;
    Item[] items_in_box;

    this() {
        this.is_key = false;
    }

    this(bool key) {
        this.is_key = key;
    }

    bool is_a_box() {
        return !this.is_key;
    }

    bool is_a_key() {
        return this.is_key;
    }
}

void look_for_key(Item box) {
    foreach(item; box.items_in_box)
        if (item.is_a_box())
            // recursive case
            look_for_key(item);
        else if (item.is_a_key())
            // base case
            writeln("found the key!");
}

/*
main_box
├── box_A
│   ├── box_B
│   └── box_C
└── box_D
    └── box_E
        └── key
*/
void main() {
    auto main_box = new Item();
    auto box_A = new Item();
    auto box_B = new Item();
    auto box_C = new Item();
    box_A.items_in_box = [box_B, box_C];

    auto box_D = new Item();
    auto box_E = new Item();
    auto key = new Item(true);
    box_E.items_in_box = [key];
    box_D.items_in_box = [box_E];

    main_box.items_in_box = [box_A, box_D];

    look_for_key(main_box);
}
