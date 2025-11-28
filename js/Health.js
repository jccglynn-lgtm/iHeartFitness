/* ELEMENT SELECTION */
const areas = document.querySelectorAll("area"); 
const box = document.getElementById("infoBox"); 

/* EVENT LISTENER LOOP */
areas.forEach(function(area) {
   area.onclick = function() {

     /* DATA RETRIEVAL */
    const text = area.dataset.text; 
    const gifSrc = area.dataset.gif;
    const title = area.title;

    let newContent = '';

    /* BUILD TITLE (Capitalized) */
    newContent += '<h2>' + title.charAt(0).toUpperCase() + title.slice(1) + ' Exercises</h2>';

    /* GIF CHECK AND INSERTION */
    if (gifSrc) {
      newContent += '<div class="gif-container">';
      newContent += '<img src="' + gifSrc + '" alt="' + title + ' exercise GIF" class="info-gif">';
      newContent += '</div>';
    }

    /* TEXT INSERTION */
    newContent += '<p>' + text + '</p>';

    /* RENDER AND DISPLAY */
    box.innerHTML = newContent;
    box.style.display = "block";
  };
});