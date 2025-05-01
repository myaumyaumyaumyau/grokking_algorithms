module app;

import std;

alias Set = bool[string];

void main()
{
    Set statesNeeded = assocArray(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"], true.repeat);
    Set[string] stations;
    stations["kone"] = assocArray(["id", "nv", "ut"], true.repeat);
    stations["ktwo"] = assocArray(["wa", "id", "mt"], true.repeat);
    stations["kthree"] = assocArray(["or", "nv", "ca"], true.repeat);
    stations["kfour"] = assocArray(["nv", "ut"], true.repeat);
    stations["kfive"] = assocArray(["ca", "az"], true.repeat);

    Set finalStations;

    while (!statesNeeded.empty)
    {
        string bestStation;
        Set statesCovered;
        foreach(station; stations.byPair)
        {
            auto coverage = setIntersection(station.value.keys.sort, statesNeeded.keys.sort).array;
            if (coverage.length > statesCovered.keys.length)
            {
                bestStation = station.key;
                statesCovered = assocArray(coverage, true.repeat);
            }
        }
        if (statesCovered.length)
        {
            foreach(st; statesCovered.keys)
                statesNeeded.remove(st);
        }
        finalStations[bestStation] = true;
    }
    writeln(finalStations.keys);
}
