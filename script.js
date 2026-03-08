let display=document.querySelector('#display');

function appendValue(val){
  if(display.value=="Error" || display.value=="Infinity" || display.value=="-Infinity"){
    display.value="";
  }
  display.value+=val;
}

function equal(){
  try{
    let ans= eval(display.value);
    display.value=ans;
  }
  catch{
    display.value="Error";
  }
}

function deleteElement(){
  display.value=display.value.slice(0,-1);
}

function clearDisplay(){
  display.value="";
}

document.addEventListener("keydown", function(event){
  if(event.key=="Backspace"){
    deleteElement();
  }
  else if(event.key=="Enter"){
    if(display.value!=""){
      equal();
    }
  }
  else if(event.key=="Delete"){
    clearDisplay();
  }
  else{
    const operators = ["+", "-", "*", "/", ".","(",")"];
    if (event.key >= "0" && event.key <= "9" || operators.includes(event.key)) {
      appendValue(event.key);
    }
  }
})