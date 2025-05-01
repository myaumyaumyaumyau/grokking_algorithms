T sum_array(T)(T[] arr) {
    if (arr.empty)
        return 0;
    return arr[0] + sum_array(arr[1..$]);
}
