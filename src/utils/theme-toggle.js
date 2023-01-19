const toggleSwitch = document.querySelector(
  '.form-switch input[type="checkbox"]'
);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    toggleSwitch.checked = false;
    document.getElementById("navbarCollapsible").className =
      "navbar navbar-expand-md navbar-light bg-dark";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("navbarCollapsible").className =
      "navbar navbar-expand-md navbar-dark bg-dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.getElementById("navbarCollapsible").className =
      "navbar navbar-expand-md navbar-light bg-dark";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
