package main

import "fmt"

func main() {
	fmt.Println(max([]int{1, 5, 10, 25, 16, 1}))
}

func max(arr []int) int {

	if len(arr) == 1 {
		return arr[0]
	}

	if arr[0] > max(arr[1:]) {
		return arr[0]
	}
	return max(arr[1:])
}
