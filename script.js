function adjustLayout() {
  const bgImageContainer = document.getElementById("bgImageContainer");
  const formContainer = document.getElementById("formContainer");
  const logoContainer = document.getElementById("logoContainer");

  if (window.innerWidth <= 768) {
    bgImageContainer.style.display = "none"; // Hide background image
    formContainer.style.width = "100%";
    formContainer.style.maxWidth = "90%";
    formContainer.style.margin = "0 auto";

    const signUpLink = formContainer.querySelector("p.text-center"); //logo to new position
    signUpLink.parentNode.insertBefore(logoContainer, signUpLink.nextSibling);
  } else {
    bgImageContainer.style.display = "block";
    formContainer.style.width = "33.3333%";
    formContainer.style.margin = "0";

    const originalPosition = formContainer.querySelector(".mt-5");
    formContainer.insertBefore(logoContainer, originalPosition);
  }
}

adjustLayout();

window.addEventListener("resize", adjustLayout);

//Note: Have to refresh everytime resizing window!
