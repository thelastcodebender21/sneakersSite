const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");
const checkout2 = document.querySelector('#checkout-button')

menuIcon.addEventListener("click", () => {
  backdrop.classList.add("active");
  navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  backdrop.classList.remove("active");
  navLinks.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("active");
  navLinks.classList.remove("active");
}); 




// checkout2.addEventListener("click", () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Not signed in? Redirect to sign in first
//   // if (!user) {
//   //   localStorage.setItem("returnTo", "checkout.html");
//   //   window.location.href = "signup.html";
//   //   return;
//   // }

//   // Build cart data
//   const cartItemsList = [...cartItems.querySelectorAll(".cart-item")];
//   const cartData = cartItemsList.map(item => ({
//     name: item.dataset.name,
//     quantity: parseInt(item.dataset.quantity),
//     image: item.querySelector("img").getAttribute("src"),
//     price: parseFloat(item.querySelector(".item-details p").textContent.split("x")[0].replace("$", "").trim())
//   }));

//   // Save cart to localStorage
//   localStorage.setItem("cart", JSON.stringify(cartData));

//   // Go to checkout
//   window.location.href = "checkout.html";
// });

document.addEventListener("DOMContentLoaded", function () {
  // Avatar and signout logic
  const avatarImg = document.getElementById("profile-avatar");
  const signoutBtn = document.getElementById("signout-btn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (avatarImg) {
    // Set avatar image based on user
    if (user && user.photo) {
      avatarImg.src = user.photo;
    } else if (user) {
      avatarImg.src = "images/image-avatar.png";
    } else {
      avatarImg.src = "images/profile.png";
    }

    // Hide signout button by default
    if (signoutBtn) signoutBtn.style.display = "none";

    // Toggle signout button on avatar click
    avatarImg.addEventListener("click", function () {
      if (signoutBtn) {
        signoutBtn.style.display = signoutBtn.style.display === "block" ? "none" : "block";
      }
    });

    if (signoutBtn) {
      signoutBtn.addEventListener("click", function () {
        localStorage.removeItem("user");
        window.location.reload();
      });
    }
  }

  // Logo click to go to index page
  const navbarLogo = document.getElementById("navbar-logo");
  if (navbarLogo) {
    navbarLogo.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  // Checkout popup logic
  const checkoutBtn = document.getElementById("checkout-button");
  const authPopup = document.getElementById("auth-popup");
  const popupSignup = document.getElementById("popup-signup");
  const popupSignin = document.getElementById("popup-signin");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function (e) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        e.preventDefault();
        if (authPopup) authPopup.style.display = "flex";
      } else {
        window.location.href = "checkout.html";
      }
    });
  }

  if (popupSignup) {
    popupSignup.addEventListener("click", function () {
      window.location.href = "signup.html";
    });
  }
  if (popupSignin) {
    popupSignin.addEventListener("click", function () {
      window.location.href = "signin.html";
    });
  }

  // Optional: Close popup when clicking outside the box
  if (authPopup) {
    authPopup.addEventListener("click", function(e) {
      if (e.target === authPopup) authPopup.style.display = "none";
    });
  }
});

