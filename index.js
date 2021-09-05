let akanForm = document.getElementById("akanForm");

akanForm.addEventListener("submit", (e) => {
    e.preventDefault();

    gender = document.getElementById("gender").value
    dayOfBirth = document.getElementById("date").value
    dayOfBirth = new Date(dayOfBirth);
    let yearOfBirth = dayOfBirth.getFullYear();
    let birthMonth = dayOfBirth.getMonth() + 1;
    let dayOfBirth = dayOfBirth.getDate();

