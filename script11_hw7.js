let arr = [0,0,1,2,3,4,5,6,7,8,0,9,10,'skill','factory'+1];
console.log(arr);
let ev=0;
let od=0;
let nul=0;
for(i=0; i<arr.length; i++){
    if(typeof(arr[i])=='number'){
        if(arr[i]!=0){
            if(arr[i]%2==0){
                ev++;
            }
            else{
                od++;
            }
       }
       else if(arr[i]==0){
            nul++;
       }
    }
}
console.log('even ' + ev);
console.log('odd ' + od);
console.log('null ' + nul);