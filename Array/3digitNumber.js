function print2largest(arr, arr_size) {
    let i, first, second;
    if (arr_size < 2) {
        console.log(" Invalid Input ");
        return;
    }
    arr.sort();
    for (i = arr_size - 2; i >= 0; i--) {
    
        if (arr[i] != arr[arr_size - 1]) {
            console.log("The second largest element is " + arr[i]);
            return;
        }
         else{
                console.log("There is no second largest element");
            }
    }     
    
        /* find the second smallest element */
       
    // for (let i = 0; i < arr_size ; i ++){
    //     if (arr[i] != arr[arr_size+1]){
    //          console.log("The second Smallest element is " + arr[i] );
    //         return;
    //         }
    //     else{
    //         console.log("There is no second smallest element\n");}
           
       // }
 }
var arr =[]
while(arr.length < 10){
  var r = [Math.floor(Math.random() * 900)+99];
if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr)
let n = arr.length;
print2largest(arr, n);