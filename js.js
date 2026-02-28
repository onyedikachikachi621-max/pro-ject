<script>
  // OPEN LOGIN MODAL
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

// CLOSE LOGIN MODAL
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// LOGIN FUNCTION
function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  // SIMPLE DEMO LOGIN (you can change this)
  if (user === "admin" && pass === "1234") {

    localStorage.setItem("loggedInUser", user);

    document.getElementById("userArea").innerHTML =
      "Welcome, " + user +
      " <button onclick='logout()' style='margin-left:10px;'>Logout</button>";

    closeLogin();
  } else {
    alert("Invalid username or password");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("userArea").innerHTML = "";
}
  function openMenu()
   {
    document.getElementById("sideMenu").style.right = "0";
  }
  function openMenu() {
    document.getElementById("sideMenu").style.right = "0";
  }

  function closeMenu() {
    document.getElementById("sideMenu").style.right = "-300px";
  }

  function sendToWhatsApp(event) {
    event.preventDefault();

    var title = document.getElementById("bookTitle").value;
    var category = document.getElementById("category").value;
    var price = document.getElementById("price").value;
    var condition = document.getElementById("condition").value;
    var description = document.getElementById("description").value;

    var message = `Hello COOU Book Store,
I want to sell a book:

📚 Title: ${title}
📂 Category: ${category}
💰 Price: ₦${price}
📌 Condition: ${condition}
📝 Description: ${description}`;

    var url = "https://wa.me/2349078878179?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
  }

  function closeMenu() {
    document.getElementById("sideMenu").style.right = "-300px";
  }
  // KEEP USER LOGGED IN
window.onload = function() {
  var savedUser = localStorage.getItem("loggedInUser");

  if (savedUser) {
    document.getElementById("userArea").innerHTML =
      "welcome, " + savedUser +
      " <button onclick='logout()' style='margin-left:10px;'>Logout</button>";
  }
};
</script>