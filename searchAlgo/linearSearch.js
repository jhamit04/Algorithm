const arr = [5,10,4,4,7,8,10];
let target = 20

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(arr,target))