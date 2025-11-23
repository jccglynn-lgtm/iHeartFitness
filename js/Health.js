const areas = document.querySelectorAll("area");
const box = document.getElementById("infoBox");

areas.forEach(function(area) {
  area.onclick = function() {
    box.textContent = area.dataset.text;
    box.style.display = "block";
  };
});