let a = prompt('Введите число: ');
a = Number(a);

// console.log(a + " " + typeof(a));

if(isNaN(a) == true){
    console.log('Упс, кажется, вы ошиблись')
}
else{
    if(typeof(a)=="number"){
        if(a % 2 == 0){
            console.log('Число ' + a + ' чётное');
        }
        else{
            console.log('Число ' + a + ' нечётное');
        }
    }
    
    else{
        console.log('Упс, кажется, вы ошиблись')
    }
}
