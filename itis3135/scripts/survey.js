function submitHandling(event) {
    event.preventDefault();

    const requiredFields = [
        'first-name', 'last-name', 'mascot', 'image-caption',
        'personal-background', 'professional-background',
        'academic-background', 'background-webdev',
        'computer-platform'
    ];

    // Validate required fields
    for (let id of requiredFields) {
        const input = document.getElementById(id);
        if (input.value.trim() === "") {
            alert(`Please fill out the "${id.replace('-', ' ')}" field.`);
            return false;
        }
    }

    // Validate image file
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];
    const validExtension = /(\.jpg|\.jpeg|\.png)$/i;

    if (!file) {
        alert("Please upload an image.");
        return false;
    }

    if (!validExtension.test(file.name)) {
        alert("Not a valid image extension. Please upload JPG or PNG.");
        return false;
    }

    // Validate checkbox agreement
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
        alert("You must agree to the terms.");
        return false;
    }

    
    document.getElementById("intro-form").style.display = "none";

    const fileURL = URL.createObjectURL(file);
    const output = document.getElementById("output");

    const courseList = Array.from(document.querySelectorAll('input[name="courses[]"]'))
    .map((input) => `<li>${input.value}</li>`).join();


    output.innerHTML = `
        <h2>${document.getElementById("first-name").value} ${document.getElementById("last-name").value}'s Intro</h2>
        <img src="${fileURL}" alt="Uploaded Image" style="max-width:300px"><br>
        <em>${document.getElementById("image-caption").value}</em>
        <p><strong>Mascot:</strong> ${document.getElementById("mascot").value}</p>
        <p><strong>Personal Background:</strong> ${document.getElementById("personal-background").value}</p>
        <p><strong>Professional Background:</strong> ${document.getElementById("professional-background").value}</p>
        <p><strong>Academic Background:</strong> ${document.getElementById("academic-background").value}</p>
        <p><strong>Background in Web Development:</strong> ${document.getElementById("background-webdev").value}</p>
        <p><strong>Primary Computer Platform:</strong> ${document.getElementById("computer-platform").value}</p>
        <p><strong>Courses:</strong><ul>${courseList}</ul></p>
        <p><strong>Funny Thing:</strong> ${document.getElementById("funny-thing").value}</p>
        <p><strong>Anything Else:</strong> ${document.getElementById("anything-else").value}</p>
        <br>
        <button onclick="resetFormProgress()">Reset Form</button>
    `;

    return false;
}


function addCourse() {
    const coursesContainer = document.getElementById("courses-container");


    const div = document.createElement("div");
    div.className = "course-entry";

    // creating elements for new courses 
    const input = document.createElement("input");
    input.type = "text";
    input.name = "courses[]";
    input.placeholder = "Enter a course";

    // creating a delete buttone element
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => div.remove();

    div.appendChild(input);
    div.appendChild(deleteBtn);
    coursesContainer.appendChild(div);
}


function resetFormProgress() {
    const form = document.getElementById("intro-form");
    form.reset();
    form.style.display = "block";

    // Clear output
    document.getElementById("output").innerHTML = "";

    // Clear course inputs
    const coursesContainer = document.getElementById("courses-container");
    const courseFields = coursesContainer.querySelectorAll(".course-entry");
    courseFields.forEach((field) => field.remove());
}
