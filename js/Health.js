const areas = document.querySelectorAll("area");
const box = document.getElementById("infoBox");

areas.forEach(function(area) {
  area.onclick = function() {

    const text = area.dataset.text;
    const gifSrc = area.dataset.gif;
    const title = area.title;

    let newContent = '';
    
    newContent += '<h2>' + title.charAt(0).toUpperCase() + title.slice(1) + ' Exercises</h2>';

    if (gifSrc) {

      newContent += '<div class="gif-container">';
      newContent += '<img src="' + gifSrc + '" alt="' + title + ' exercise GIF" class="info-gif">';
      newContent += '</div>';
    }

    newContent += '<p>' + text + '</p>';

    box.innerHTML = newContent;

    box.style.display = "block";
  };
});