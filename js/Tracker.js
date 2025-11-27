
// Left-side Tab System

const tabs = document.querySelectorAll('.tracker-tab');
const panels = document.querySelectorAll('.tracker-panel');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));
        tab.classList.add("active");

        const panelId = tab.dataset.tab;
        document.getElementById(panelId).classList.add("active");
    });
});


// Water Tracker

let WaterTotal = 0;
let weeklyWater = [0, 0, 0, 0, 0, 0, 0];
// today index (Mon 0 - Sun 6)
let today = (new Date().getDay() + 6) % 7;

const WaterBoxes = document.querySelectorAll('#water .water-box');
const WaterDisplay = document.getElementById('water-total');
const customInputW = document.querySelector('#water .custom-inputW');


// Update Today Bar

function updateTodayBar() {
    const todayBar = document.getElementById("today-bar");
    const todayLabel = document.getElementById("today-ml");

    const max = 2000;
    let percent = (WaterTotal / max) * 100;

    if (percent > 100) percent = 100;

    todayBar.style.width = percent + "%";
    todayLabel.textContent = WaterTotal + " ml";
}


// Update Weekly Bars

function updateWeeklyBars() {
    const ids = [
        "bar-mon", "bar-tue", "bar-wed", "bar-thu",
        "bar-fri", "bar-sat", "bar-sun"
    ];

    for (let i = 0; i < 7; i++) {
        const bar = document.getElementById(ids[i]);
        const percent = Math.min((weeklyWater[i] / 2000) * 100, 100);
        bar.style.width = percent + "%";
    }
}

// Handle water box clicks

WaterBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const value = Number(box.dataset.value);
        WaterTotal += value;
        WaterDisplay.textContent = WaterTotal;

        // update summary
        weeklyWater[today] = WaterTotal;
        updateTodayBar();
        updateWeeklyBars();
    });
});


// Handle custom water input

customInputW.addEventListener('change', () => {
    const value = Number(customInputW.value);

    if (value > 0) {
        WaterTotal += value;
        WaterDisplay.textContent = WaterTotal;
        customInputW.value = "";

        // update summary
        weeklyWater[today] = WaterTotal;
        updateTodayBar();
        updateWeeklyBars();
    }
});

// Calories Tracker

let CaloryTotal = 0;

const CalBoxes = document.querySelectorAll('#calories .cal-box');
const CalDisplay = document.getElementById('cal-total');
const customInputC = document.querySelector('#calories .custom-inputC');

CalBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const value = Number(box.dataset.value);
        CaloryTotal += value;
        CalDisplay.textContent = CaloryTotal;
    });
});

customInputC.addEventListener('change', () => {
    const value = Number(customInputC.value);

    if (value > 0) {
        CaloryTotal += value;
        CalDisplay.textContent = CaloryTotal;
        customInputC.value = "";
    }
});

// Right-side Tab System

const rightTabs = document.querySelectorAll('.tracker-tabR');
const rightPanels = document.querySelectorAll('.tracker-panelR');

rightTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        rightTabs.forEach(t => t.classList.remove("active"));
        rightPanels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");

        const panelId = tab.dataset.tab;
        document.getElementById(panelId).classList.add("active");
    });
});
