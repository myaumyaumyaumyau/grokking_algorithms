# Finds the smallest value in an array
find_smallest <- function(arr) {
  # Stores the smallest value
  smallest = arr[1]
  # Stores the index of the smallest value
  smallest_index = 1
  for (i in 1:length(arr)) {
    if (arr[i] < smallest) {
      smallest_index = i
      smallest = arr[i]
    }
  }
  return(smallest_index)
}

# Sort array
selection_sort <- function(arr) {
  newArr = c()
  for (i in 1:length(arr)) {
    # Finds the smallest element in the array and adds it to the new array
    smallest = find_smallest(arr)
    newArr = c(newArr, arr[smallest])
    # Removes that smallest element from the original array
    arr = arr[-smallest]
  }
  return(newArr)
}

print(selection_sort(c(5, 3, 6, 2, 10)))
  