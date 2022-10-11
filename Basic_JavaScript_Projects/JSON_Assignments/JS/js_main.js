var obj = { "item":"Food", "amount":"Number", "store":"Grocery Store"}
var myJSON = JSON.stringify(obj);
document.getElementById("todos").innerHTML = myJSON;

var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
document.getElementById("fName").innerHTML = obj.firstName

localStorage.setItem("lastname", "Smith");
document.getElementById("lName").innerHTML = localStorage.getItem("lastname");