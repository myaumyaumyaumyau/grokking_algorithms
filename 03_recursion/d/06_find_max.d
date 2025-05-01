T find_max(T)(T[] arr) {
    if (arr.length == 0)
        return 0;
    else if (arr.length == 1)
        return arr[0];
    else if (arr.length == 2)
        return arr[0] > arr[1] ? arr[0] : arr[1];
    auto sub_max = find_max(arr[1..$]);
    return arr[0] > sub_max ? arr[0] : sub_max;
}
