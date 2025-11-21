const tabs = document.querySelectorAll('.tracker-tab');
const panels = document.querySelectorAll('.tracker-panel');

tabs.forEach(tab => {
    tab.onclick = () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panelId = tab.dataset.tab;
    document.getElementById(panelId).classList.add('active');
}
})
let WaterTotal = 0;
// click boxes
const WaterBoxes = document.querySelectorAll('#water .water-box');
const WaterDisplay = document.getElementById('water-total');
// input
const customInput = document.querySelector('#water .custom-input');
//handle boxes
WaterBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const value = Number(box.dataset.value);
        WaterTotal += value;
        WaterDisplay.textContent = WaterTotal;

    })
});
//handle custom inputs
customInput.addEventListener('change', () => {
    const value = Number(customInput.value);
    if(value > 0) {
        WaterTotal += value;
        WaterDisplay.textContent = WaterTotal;
        customInput.value = ""; // clearing after adding
    }
});