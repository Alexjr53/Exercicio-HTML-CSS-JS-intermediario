const btnSubmit = document.getElementById("btn");
const inputs = document.querySelectorAll(".inputs");
const errorAlert = document.querySelectorAll(".error-alert");

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();

     inputs.forEach((item, index) => {
        if (item.value === "") {
            inputs[index].classList.add("input-invalid");
            errorAlert[index].style.display= 'block'
         } else {
            inputs[index].classList.remove("input-invalid");
            inputs[index].classList.add("input-valid");
            errorAlert[index].style.display= 'none'
         }
        });
})
