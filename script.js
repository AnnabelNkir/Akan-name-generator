let akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();

    gender = document.getElementById("gender").value
    dateOfBirth = document.getElementById("date").value
    dateOfBirth = new Date(dateOfBirth);

    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth

    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    dayOfTheWeek = parseInt(dayOfTheWeek);

    let akanName;

    maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


    femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    let bornDay;

    if (dayOfTheWeek == 0 && gender == "female") {
        bornDay = "Sunday";
        akanName = femaleAkanNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        bornDay = "Sunday";
        akanName = maleAkanNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        bornDay = "Monday";
        akanName = femaleAkanNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        bornDay = "Monday";
        akanName = maleAkanNames[1];


    } else if (dayOfTheWeek == 2 && gender == "female") {
        bornDay = "Tuesday";
        akanName = femaleAkanNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        bornDay = "Tuesday";
        akanName = maleAkanNames[2];


    } else if (dayOfTheWeek == 3 && gender == "female") {
        bornDay = "Wednesday";
        akanName = femaleAkanNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        bornDay = "Wednesday";
        akanName = maleAkanNames[3];


    } else if (dayOfTheWeek == 4 && gender == "female") {
        bornDay = "Thursday";

        akanName = femaleAkanNames[4];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        bornDay = "Thursday";
        akanName = maleAkanNames[4];


    } else if (dayOfTheWeek == 5 && gender == "female") {
        bornDay = "Friday";
        akanName = femaleAkanNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        bornDay = "Friday";
        akanName = maleAkanNames[5];


    } else if (dayOfTheWeek == 6 && gender == "female") {
        bornDay = "Saturday";
        akanName = femaleAkanNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        bornDay = "Saturday";
        akanName = maleAkanNames[6];
    }
    else{
        alert("You entered invalid month or day");
      }

    let result = document.getElementById("result").innerHTML = "Drumrolls!!! You were born on a " + bornDay + " so your akan name is " + akanName + "!"
    document.getElementById("akanForm").reset();
});
