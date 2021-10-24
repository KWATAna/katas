function quicksort(arr) {
	if(arr<2){
	return arr
	} else {
	let pivot = arr[0]
	let left = quicksort(leftpart(pivot, arr.slice(1)))
	let right = quicksort(rightpart(pivot, arr.slice(1)))
	
	return left.concat(pivot, right)
	}
}	
function leftpart(pivot, arr) {
let partition = []
for(i in arr) {
	if (arr[i]<=pivot) {
		partition.push(arr[i])
	}
   }
return partition  
}
function rightpart(pivot, arr) {
let partition = []
for(i in arr) {
	if (arr[i]>pivot) {
		partition.push(arr[i])
	}
   }
return partition 
}

/*  QuickSort with random pivot 

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const left = [];
  const right = [];
  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
} */