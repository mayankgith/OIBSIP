function convert(){
    var degree = document.getElementById("degree");
     var result=document.getElementById("a");

     var x = document.getElementById("unit");
     var text = x.options[x.selectedIndex].text;

    if (degree.value !== "") {
        if (text === "choose a unit") 
        {
            alert("please select a unit");	
        }
        else{
            if (text === "Fahrenheit") {
                

                result=document.getElementById("a");
var convert = (degree.value*9/5)+32;
result.innerHTML = "Result is:"+convert+"&deg;F"; 
            }
            else if (text === "Celsius") {
                
                result.innerHTML = "Result is:"+convert;   
var convert = (degree.value-32)*(5/9);
  result.innerHTML = "Result is:"+convert+"&deg;C";
            }
        }
    }else{
        alert("please enter temperature !!");
    }
 }
