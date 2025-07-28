document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.querySelector("#checkout-quantity");
  const totalDisplay = document.querySelector("#checkout-price");

  let grandTotal = 0;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Save where user wanted to go
    localStorage.setItem("returnTo", "checkout.html");

    // Redirect to sign-in
    window.location.href = "signup.html";
    return;
  }

  // Show signed-in user's email
  const emailDisplay = document.getElementById("user-email");
  if (emailDisplay && user.email) {
    emailDisplay.textContent = `Signed in as: ${user.email}`;
  }

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    const itemEl = document.createElement("div");
    itemEl.classList.add("checkout-item");
    itemEl.innerHTML = `
      <div style = "width: 100%; display: flex; align-items: center; justify-content: center;" >
      <img src="${item.image}" alt="${item.name}" width="50" />
      </div>
      <div style="display: flex; flex-direction: column; gap: 5px; align-items: center; justify-content: center;" >
        <p><strong>${item.name}</strong></p>
        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
        <p>Total: $${itemTotal.toFixed(2)}</p>
      </div>
    `;
    container.appendChild(itemEl);
  });

  totalDisplay.innerHTML = `<h3 style="width: 100%; text-align: center;">Grand Total: $${grandTotal.toFixed(2)}</h3>`;
});
