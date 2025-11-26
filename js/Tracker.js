const tabs = document.querySelectorAll('.tracker-tab');
const panels = document.querySelectorAll('.tracker-panel');
let weeklyWater = [0, 0, 0, 0, 0, 0, 0];
let today = (new Date().getDay() + 6) % 7;

tabs.forEach(tab => {
    tab.onclick = () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panelId = tab.dataset.tab;
    document.getElementById(panelId).classList.add('active');
}
})
// Water Tracker Code

let WaterTotal = 0;
// click boxes
const WaterBoxes = document.querySelectorAll('#water .water-box');
const WaterDisplay = document.getElementById('water-total');
// input
const customInputW = document.querySelector('#water .custom-inputW');
//handle boxes
WaterBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const value = Number(box.dataset.value);
        WaterTotal += value;
        WaterDisplay.textContent = WaterTotal;

    })
});
//handle custom inputs
customInputW.addEventListener('change', () => {
    const value = Number(customInputW.value);
    if(value > 0) {
        WaterTotal += value;
        WaterDisplay.textContent = WaterTotal;
        customInputW.value = ""; // clearing after adding
    }
});

// Calory Tracker Code

let CaloryTotal = 0;
// click boxes
const CalBoxes = document.querySelectorAll('#calories .cal-box');
const CalDisplay = document.getElementById('cal-total');
// input
const customInputC = document.querySelector('#calories .custom-inputC');
//handle boxes
CalBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const value = Number(box.dataset.value);
        CaloryTotal += value;
        CalDisplay.textContent = CaloryTotal;

    })
});
//handle custom inputs
customInputC.addEventListener('change', () => {
    const value = Number(customInputC.value);
    if(value > 0) {
        CaloryTotal += value;
        CalDisplay.textContent = CaloryTotal;
        customInputC.value = ""; // clearing after adding
    }
});
function updateWeeklyBars() {
    const ids = [
        "bar-mon", "bar-tue", "bar-wed", "bar-thu",
        "bar-fri", "bar-sat", "bar-sun"
    ];

    for (let i = 0; i < 7; i++) {
        let amount = weeklyWater[i];
        let percent = Math.min((amount / 2000) * 100, 100);  
        document.getElementById(ids[i]).style.width = percent + "%";
    }
}
