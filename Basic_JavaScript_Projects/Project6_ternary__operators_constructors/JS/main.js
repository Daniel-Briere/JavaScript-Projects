function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").Value;
    Can_Ride = ("Height" < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride = " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020,"Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Plane(Make, Model, Year, Color) {
    this.Plane_Make = Make;
    this.Plane_Model = Model;
    this.Plane_Year = Year;
    this.Plane_Color = Color;
}

var Jim = new Plane("Cessna", "172", 2020,"Red and White");
var May = new Plane("Mustang", "P-51", 1944, "Silver and Black");
var Scott = new Plane("Cessna", "210", 1971, "White with Blue Strip");
function New_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "May flys a " + May.Plane_Color + "-colored " + May.Plane_Model + 
    " manufactured in " + May.Plane_Year;
}

function Count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }

}