let arr = [1, 1, 1  , 1, 1, 0];
console.log(arr);
let i=0;
st=true;
while(st=true){
    // console.log(i + " " + arr[i] + " " + arr[i+1])
    if(arr[i] != arr[i+1]){
        st=false;
        console.log('Значения массива неодинаковы')
        break;
    }
    if(i == arr.length-2){
        st=false;
        console.log('Значения массива одинаковы')
        break;
    }
    i++;
}