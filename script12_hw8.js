let map1 = new Map();
while(true){
    let key = prompt('Введите ключ: ');
    if(key == 'stop'){
        break;
    }
    else{
        let value = prompt('Введите значение ключа: ');
        if(value == 'stop'){
            break;
        }
        else{
            map1.set(key,value);
        }  
    }
}
for(let name of map1.entries()){
    console.log(name);
}