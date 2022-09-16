function My_First_Function() {              //Defining a function andnamming it
    var str = "This is the button text!";   //Defining a variable and giving it
                                            //a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value
                                            //of the variable into the HTML element FromPoint
                                            //with the "Button_Text" id
}

function myFunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}