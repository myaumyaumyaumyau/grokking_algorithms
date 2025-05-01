module app;

import std;

alias Costs = double[string];
alias Graph = Costs[string];

Graph graph;
string[] processed;

string find_lowest_cost_node(const Costs costs)
{
    double lowestCost = double.infinity;
    string lowestCostNode;
    foreach(node; costs.byPair)
    {
        auto cost = node.value;
        if (cost < lowestCost && (!processed.canFind(node.key)))
        {
            lowestCost = cost;
            lowestCostNode = node.key;
        }
    }
    return lowestCostNode;
}

void main()
{
    graph["start"] = ["a": 6, "b": 2];
    graph["a"] = ["finish": 1];
    graph["b"] = ["a": 3, "finish": 5];
    graph["finish"] = new Costs;

    Costs costs;
    costs["a"] = 6;
    costs["b"] = 2;
    costs["finish"] = double.infinity;

    string[string] parents;
    parents["a"] = "start";
    parents["b"] = "start";

    auto node = find_lowest_cost_node(costs);
    while (!node.empty)
    {
        double cost = costs[node];
        auto neighbors = graph[node];
        foreach(n; neighbors.byKey())
        {
            double newCost = cost + neighbors[n];
            if (costs[n] > newCost)
            {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed ~= node;
        node = find_lowest_cost_node(costs);
    }

    writeln("Cost from the start to each node:");
    writeln(costs);
}
