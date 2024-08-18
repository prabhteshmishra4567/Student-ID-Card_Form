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

    // Update the image in the card
    const imageInput = document.getElementById('imageUpload');
    const profileImage = document.getElementById('profileImage');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            profileImage.src = e.target.result;
        }

        reader.readAsDataURL(imageInput.files[0]);
    }
}

function clearAll() {
    // Clear input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    // Reset the displayed student details
    document.getElementById("schoolNameVal").innerText = "School Name";
    document.getElementById("studentNameVal").innerText = "Devanshu";
    document.getElementById("dateOfbirthVal").innerText = "DD/MM/YYYY";
    document.getElementById("classVal").innerText = "9th";
    document.getElementById("rollNoVal").innerText = "########";
    document.getElementById("contactNoVal").innerText = "1234554321";

    // Reset the profile image
    document.getElementById('profileImage').src = './image/image.png';
}

function printIdcard() {
    window.print();
}
