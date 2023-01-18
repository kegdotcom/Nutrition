if (localStorage.getItem("calorie-goal") != null) {
    document.getElementById('calorie-goal').innerHTML = localStorage.getItem("calorie-goal");
} else {
    document.getElementById('protein-goal').innerHTML = 2000;
}

if (localStorage.getItem("protein-goal") != null) {
    document.getElementById('protein-goal').innerHTML = localStorage.getItem("protein-goal");
} else {
    document.getElementById('protein-goal').innerHTML = 50;
}

if (localStorage.getItem("fat-goal") != null) {
    document.getElementById('fat-goal').innerHTML = localStorage.getItem("fat-goal");
} else {
    document.getElementById('fat-goal').innerHTML = 65;
}

if (localStorage.getItem("carb-goal") != null) {
    document.getElementById('carb-goal').innerHTML = localStorage.getItem("carb-goal");
} else {
    document.getElementById('carb-goal').innerHTML = 300;
}

function updateCalories() {
    localStorage.setItem("calorie-goal", document.getElementById('new-calorie-goal').value);
    document.getElementById('calorie-goal').innerHTML = localStorage.getItem("calorie-goal");
    return false;
}

function updateProtein() {
    localStorage.setItem("protein-goal", document.getElementById('new-protein-goal').value);
    document.getElementById('protein-goal').innerHTML = localStorage.getItem("protein-goal");
    return false;
}

function updateFat() {
    localStorage.setItem("fat-goal", document.getElementById('new-fat-goal').value);
    document.getElementById('fat-goal').innerHTML = localStorage.getItem("fat-goal");
    return false;
}

function updateCarbs() {
    localStorage.setItem("carb-goal", document.getElementById('new-carb-goal').value);
    document.getElementById('carb-goal').innerHTML = localStorage.getItem("carb-goal");
    return false;
}