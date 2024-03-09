var num = +prompt("Enter your number")

if ( num >0){
    console.log("positive");
}
else if (num ===0){
    console.log("neutral");
}
else{
    console.log("negative");
}
var num1 = +prompt("Enter Your Percentage")

if(num1 > 80){
    alert("You got A Grade")
}

else if(num1 > 60){
    alert("You got B Grade")
}

else if(num1 > 40){
    alert("You got C Grade")
}

else if(num1 > 20){
    alert("You got D Grade")
}
else{
    alert("You are Fail")
}
