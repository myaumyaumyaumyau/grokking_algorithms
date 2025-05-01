module app;

import std;

void printnames(string dir)
{
    foreach(DirEntry name; dirEntries(dir, SpanMode.shallow))
    {
        if (name.isFile)
            writeln(name);
        else
            printnames(name);
    }
}

void main()
{
    printnames("test1");
}
