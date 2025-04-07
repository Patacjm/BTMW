// navigation.js

document.addEventListener("DOMContentLoaded", function () {
  const links = {
    studentRegLink: "studentreg.html",
    studentLogLink: "studentlogg.html",
    adviserLink: "panel.html",
    panelRegLink: "panelreg.html",
    adminLink: "admin.html",
    adminLogLink: "adminlog.html",
  };

  Object.keys(links).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => {
        window.location.href = links[id];
      });
    }
  });
});
