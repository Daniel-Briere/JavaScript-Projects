function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

var X = 10
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    var Y = 70;
    document.write(Y + 100);
}
function Add_numbers_3() {
    document.write(Y - 50);
}

function get_Time() {
    if (new Date().getHours() < 20) {
    document.getElementById("Goodnight").innerHTML = "Sleep tight!";
    }
}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 60) {
        Ride = "You are tall enough to ride!";
    }
    else {
        Ride = "You are not tall enough to ride!";
    }
    document.getElementById("How_tall_are_you?").innerHTML = Ride;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}