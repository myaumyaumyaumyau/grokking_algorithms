module app;

import std;

alias DpTable = ulong[][];

DpTable longest_common_substring(T)(T[] table1, T[] table2)
{
    DpTable dp_table = new DpTable(table1.length, table2.length);

    foreach(i, c1; table1)
        foreach(j, c2; table2)
        {
            if (c1 == c2)
                dp_table[i][j] = dp_table[i > 0 ? i - 1 : 0][j > 0 ? j - 1 : 0] + 1;
            else
                dp_table[i][j] = 0;
        }
    return dp_table;
}


DpTable longest_common_subsequence(T)(T[] table1, T[] table2)
{
    DpTable dp_table = new DpTable(table1.length, table2.length);

    foreach(i, c1; table1)
        foreach(j, c2; table2)
        {
            if (c1 == c2)
                dp_table[i][j] = dp_table[i > 0 ? i-1 : 0][j > 0 ? j-1 : 0] + 1;
            else
            {
                dp_table[i][j] = max(dp_table[i > 0 ? i-1 : 0][j],
                                     dp_table[i][j > 0 ? j-1 : 0]);
            }
        }
    return dp_table;
}

void main()
{
    auto dp_table_blue = "blue";
    auto dp_table_clues = "clues";
    
    writeln("Longest substring:");
    foreach(line; longest_common_substring(dp_table_blue.array, dp_table_clues.array))
        writeln(line);

    writeln("Longest subsequence:");
    foreach(line; longest_common_subsequence(dp_table_blue.array, dp_table_clues.array))
        writeln(line);
}
