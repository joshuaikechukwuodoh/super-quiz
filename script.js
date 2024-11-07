const details = document.querySelectorAll('details');

details.forEach((detail) => {
    detail.addEventListener('click', () => {
        details.forEach((item) => {
            if (item !== detail) {
                item.removeAttribute('open');
            }
        }); 
    });

});

const inputs = document.querySelectorAll(".text-input");
const continueLink = document.getElementById("continue-link");

function checkInputs() {
    let allFilled = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

   continueLink.style.display = allFilled ? "block" : "none";
}


inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
});


// Main page js


const bar = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-close')
// const header = document.querySelector('.header')
const Nava = document.querySelector('.middle-logo')

function showMenu(){
    bar.style.display = 'none'
    closeBtn.style.display = 'block'
    // header.style.height = '70vh'
    Nava.style.display ='block'

}

function hideMenu(){
    bar.style.display = 'block'
    closeBtn.style.display = 'none'
    //    header.style.height = '20vh'
       Nava.style.display ='none'
}

bar.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)

// Preview js

function previewFile() {
    const fileInput = document.getElementById("fileinput");
    const previewImage = document.getElementById("previewImage");

    const file = fileInput.files[0];

    // Check if a file is selected and its name ends with the allowed extensions
    if (file && /\.(png|jpe?g)$/i.test(file.name)) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            previewImage.src = event.target.result;
            previewImage.style.display = "block"; // Show the preview image
            previewImage.style.filter = "saturate(1.5)"; // Apply the filter effect
            fileInput.style.display = "none"; // Hide the file input after selection
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please select an image file with a .png, .jpg, or .jpeg extension.");
        fileInput.value = ""; // Clear the invalid file selection
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const beginLink = document.getElementById("beginLink");
    const minWidth = 320;  
    const maxWidth = 1080;  

    
    if (navigator.userAgent.toLowerCase().includes("android") && window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {
      beginLink.setAttribute("href", "../HTML_files/begin.html");  
    } else {
      beginLink.setAttribute("href", "../HTML_files/navig.html");  
    }
});





  



  