function updateCard() {
    document.getElementById("schoolNameVal").innerText =
        document.getElementById("schoolName").value;

    document.getElementById("studentNameVal").innerText =
        document.getElementById("studentName").value;

    document.getElementById("dateOfbirthVal").innerText =
        document.getElementById("dateOfbirth").value;

    document.getElementById("classVal").innerText =
        document.getElementById("class").value;

    document.getElementById("rollNoVal").innerText =
        document.getElementById("rollno").value;

    document.getElementById("contactNoVal").innerText =
        document.getElementById("contact").value;
}



function clearAll() {
    // Clear input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    // Optionally, clear the displayed student details
    document.getElementById("schoolNameVal").innerText = "School Name";
    document.getElementById("studentNameVal").innerText = "Devanshu";
    document.getElementById("dateOfbirthVal").innerText = "10/05/2005";
    document.getElementById("classVal").innerText = "2";
    document.getElementById("rollNoVal").innerText = "3";
    document.getElementById("contactNoVal").innerText = "1234554321";

    // document.getElementById("profileImage").src = "PFP.jpeg";
}






function printIdcard() {
    window.print();
}



































// function updateCard () {

//    document.getElementById("schoolNameVal").innerText =
//     document.getElementById("schoolName").value;
  
//    document.getElementById("studentNameVal").innerText =
//     document.getElementById("studentName").value;

//    document.getElementById("dateOfbirthVal").innerText =
//     document.getElementById("dateOfbirth").value;

//    document.getElementById("classVal").innerText =
//     document.getElementById("class").value;

//    document.getElementById("rollNoVal").innerText =
//     document.getElementById("rollno").value;

//    document.getElementById("contactNoVal").innerText =
//     document.getElementById("contact").value;
// }




































// function clearAll () {


// document.getElementById("schoolName").value = "";
  
// document.getElementById("studentName").value = "";

// document.getElementById("dateOfbirth").value = "";

// document.getElementById("class").value = "";

// document.getElementById("rollno").value = "";

// document.getElementById("contact").value = "";
// }