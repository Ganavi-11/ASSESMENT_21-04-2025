function flattenAndSort(arr) {
    const flat = arr.flat(); 
    const uniqueSorted = [...new Set(flat)].sort((a, b) => a - b);
    return uniqueSorted;
  }
  

  console.log(flattenAndSort([[3, 2, 1], [4, 5, 2], [1, 6]])); 
  