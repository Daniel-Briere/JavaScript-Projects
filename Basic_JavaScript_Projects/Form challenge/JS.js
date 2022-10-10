function validateForm() {
    let x = document["myForm"]["fname"].value;
    if(x =="") {
        alert("Fields must be filled out");
        return false;
    }
}