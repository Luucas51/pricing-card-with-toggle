const basicMonthly = document.getElementById('basic-monthly');
const basicYearly = document.getElementById('basic-yearly');
const proMonthly = document.getElementById('pro-monthly');
const proYearly = document.getElementById('pro-yearly');
const masterMonthly = document.getElementById('master-monthly');
const masterYearly = document.getElementById('master-yearly');
const switchBtn = document.querySelector('.check-btn');

function displayMonth() {
    basicMonthly.style.display = "block";
    proMonthly.style.display = "block";
    masterMonthly.style.display = "block";
    basicYearly.style.display = "none";
    proYearly.style.display = "none";
    masterYearly.style.display = "none";
}

function displayYear() {
    basicMonthly.style.display = "none";
    proMonthly.style.display = "none";
    masterMonthly.style.display = "none";
    basicYearly.style.display = "block";
    proYearly.style.display = "block";
    masterYearly.style.display = "block";
}

switchBtn.addEventListener('change', e => {
    if (switchBtn.checked) {
        displayMonth();
    }
    else {
        displayYear();
    }
})

document.addEventListener('keydown', e => {
    if (e.key == "ArrowLeft") {
        switchBtn.checked = false;
        displayYear();
    }
    else if (e.key == "ArrowRight") {
        switchBtn.checked = true;
        displayMonth();
    }
})