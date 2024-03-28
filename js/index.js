function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name.trim() === "" || email.trim() === "") {
    document.getElementById("validationMessage").innerText =
      "oiiii isi dulu email atau nama muuuuu.";
    return false;
  } else {
    if (name.length < 3) {
      document.getElementById("validateName").innerText =
        "Nama harus terdiri dari minimal 3 karakter";
      return false;
    }
    if (email.indexOf("@gmail.com") == -1 || email.indexOf(".") == -1) {
      document.getElementById("validateGmail").innerText = "Email mu salahhhh";
      return false;
    }

    document.getElementById("validationMessage").innerText = "nahhh, Valid!";
    return true;
  }
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".slide").clientWidth;
  let counter = 0;

  setInterval(() => {
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(${-slideWidth * (counter + 1)}px)`;
    counter++;
    if (counter === slides.children.length - 1) {
      setTimeout(() => {
        slides.style.transition = "none";
        slides.style.transform = `translateX(0)`;
        counter = 0;
      }, 500);
    }
  }, 3000);
});
