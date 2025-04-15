// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

const purchaseBtn = document.getElementById("purchaseBtn");
const errorPara = document.getElementById("error");

purchaseBtn.addEventListener("click", function() {
    errorPara.textContent = "Something went wrong, please try again";
});










