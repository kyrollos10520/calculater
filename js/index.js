let inputElement = document.querySelector('input');
let reset1 = document.getElementById('reset1');
let reset2 = document.getElementById('reset2');
let equalBtn = document.getElementById('equal');
let remove = document.getElementById('remove');
let square = document.getElementById('square');
let dot = document.getElementById('dot');
let divide = document.getElementById('divide');
let negative = document.getElementById('minus');
let root = document.getElementById('root');


divide.addEventListener('click',()=>{
  inputElement.value = 1/inputElement.value;
})

negative.addEventListener('click',()=>{
 
  inputElement.value = -inputElement.value

})

dot.addEventListener('click',()=>{
 
  inputElement.value += '.'

})
square.addEventListener('click',()=>{
  inputElement.value = Math.pow(inputElement.value,2);
})
root.addEventListener('click',()=>{
  inputElement.value = Math.sqrt(inputElement.value);
})
remove.addEventListener('click',()=>{
  inputElement.value = inputElement.value.slice(0, inputElement.value.length-1)
  if(inputElement.value.length == 0)
    inputElement.value =0; 
})

var arr =[]

reset1.addEventListener('click', ()=>{
  inputElement.value =0;
})

reset2.addEventListener('click', ()=>{
  inputElement.value =0;
})


function calc(ele){
  let num = ele.textContent;
  
  if(!isNaN(num) || num == '.'){

    if(inputElement.value == 0  ){ 
      inputElement.value = num;
       
    }
    else if(arr[arr.length-1] == '=' ){
       inputElement.value = num;
       arr= [];
    }
  else{
   inputElement.value = inputElement.value + num;
  }
  }else{ 
    arr.push(inputElement.value);
    arr.push(num);
    inputElement.value =0; 
  }
 ;
}


equalBtn.addEventListener('click', ()=>{
     let x;
  for (let i = 0; i < arr.length; i++) {
  if(arr[i] == '+'){
     x= (+arr[i-1] + +arr[i+1]);
   inputElement.value = x;
  }
  else if(arr[i] == '-'){
    x= (+arr[i-1] - +arr[i+1]);
    inputElement.value = x;
  }
  else if(arr[i] == 'x'){
    x= (+arr[i-1] * +arr[i+1]);
    inputElement.value = x;
  }
  else if(arr[i] == '÷'){
     x = (+arr[i-1] / +arr[i+1]);
     inputElement.value = x;
  }
  else if(arr[i] == '%'){
     x = (+arr[i-1] % +arr[i+1]);
     inputElement.value = x;
  }
  
}
}
 
)

