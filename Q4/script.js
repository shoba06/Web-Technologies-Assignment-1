function calculateResult() {

    // Get student name
    let studentName = document.getElementById("studentName").value;


    // Get marks of five subjects
    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);


    // Validate input
    if (
        studentName === "" ||
        isNaN(mark1) ||
        isNaN(mark2) ||
        isNaN(mark3) ||
        isNaN(mark4) ||
        isNaN(mark5)
    ) {
        alert("Please enter the student name and marks for all five subjects.");
        return;
    }


    // Check marks range
    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 ||
        mark4 < 0 || mark4 > 100 ||
        mark5 < 0 || mark5 > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }


    // Calculate total
    let total = mark1 + mark2 + mark3 + mark4 + mark5;


    // Calculate average
    let average = total / 5;


    // Calculate grade using selection statement
    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }


    // Pass / Fail
    let status;

    if (
        mark1 >= 40 &&
        mark2 >= 40 &&
        mark3 >= 40 &&
        mark4 >= 40 &&
        mark5 >= 40
    ) {
        status = "PASS";
    }
    else {
        status = "FAIL";
    }


    // Display result
    document.getElementById("displayName").textContent = studentName;

    document.getElementById("total").textContent =
        total + " / 500";

    document.getElementById("average").textContent =
        average.toFixed(2);

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("status").textContent =
        status;


    // Show result section
    document.getElementById("result").style.display = "block";
}


function resetForm() {

    document.getElementById("studentName").value = "";

    document.getElementById("mark1").value = "";
    document.getElementById("mark2").value = "";
    document.getElementById("mark3").value = "";
    document.getElementById("mark4").value = "";
    document.getElementById("mark5").value = "";

    document.getElementById("result").style.display = "none";
}