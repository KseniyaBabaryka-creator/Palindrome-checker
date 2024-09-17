const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
 const regex = /[\W]/g;



function check(){
  let str = textInput.value; 
  str = str.toLowerCase();
  str = str.trim();
  str = str.replace(/\s/g, "");
  str = str.replace(/[\W]/g,"");
  str = str.replace("\_","");
  let reversed = str.split('').reverse().join('');
  
  
  console.log(reversed);
  const matches = str.match(regex);

  if(str === ""){
    alert('Please input a value');
  } else if(textInput.value.length === 1){
    result.style.display = 'block';
    result.innerHTML = `<span>${textInput.value}</span> is a palindrome.`;
  } else if(str === reversed){
   
    result.style.display = 'block';
    result.innerHTML = `<span>${textInput.value}</span> is a palindrome.`;
  } /*else if(matches){
    str = str.replace(/[\W]/g,"");
    reversed = reversed.replace(/[\W]/g,"");
    if(str === reversed){
result.style.display = 'block';
    result.innerHTML = `<span>${textInput.value}</span> is a palindrome.`;
    } else {
       result.style.display = 'block';
    result.innerHTML = `<span>${textInput.value}</span> is not a palindrome.`;
    }
  // else if(str[0] === '\_'){
    //result.style.display = 'block';
    //result.innerHTML = `<span>${textInput.value}</span> is a palindrome.`;
 // } 
  
  
   else {
    let counter = 0;
    for(let i = 0; i < str.length; i++){
      if (str[i] === '\_'){
        counter++;
      }   
    }
     if(counter > 0){
        result.style.display = 'block';
    result.innerHTML = `<span>${textInput.value}</span> is a palindrome.`;
      } */else {
      
        result.style.display = 'block';
    result.innerHTML = `<span>${textInput.value}</span> is not a palindrome.`;
      
      }
		
  //}
}


checkButton.addEventListener('click', check);

