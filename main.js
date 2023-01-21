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

document.getElementsByClassName("tablink")[0].click();

function openModalTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("modal-body");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("modal-tab-button");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("selected");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("selected");
}

//now the real shit starts

class Day {
     
    constructor() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const d = new Date();
        this.name = `${months[d.getMonth()]}-${d.getDate()}`;
        this.month = d.getMonth();
        this.day = d.getDate();
        this.year = d.getFullYear();
        this.calories = 0;
        this.protein = 0;
        this.fat = 0;
        this.carbs = 0;
        this.calorieGoal = localStorage.getItem("calorie-goal") != null ? Number(localStorage.getItem("calorie-goal")) : 2000;
        this.proteinGoal = localStorage.getItem("protein-goal") != null ? Number(localStoreage.getItem("protein-goal")) : 50;
        this.fatGoal = localStorage.getItem("fat-goal") != null ? Number(localStorage.getItem("fat-goal")) : 65;
        this.carbGoal = localStorage.getItem("carb-goal") != null ? Number(localStorage.getItem("fat-goal")) : 300;
        this.caloriesRemaining = this.calorieGoal - this.calories;
        this.proteinRemaining = this.proteinGoal - this.protein;
        this.fatRemaining = this.fatGoal - this.fat;
        this.carbsRemaining = this.carbGoal - this.carbs;
    }

    addCalories (c) { 
        this.calories += c; 
        this.caloriesRemaining -= c;
    };
    addProtein (p) { 
        this.protein += p;
        this.proteinRemaining -= p;
    };
    addFat (f) {
        this.fat += f;
        this.fatRemaining -= f;
    };
    addCarbs (c) {
        this.carbs += c;
        this.carbsRemaining -= c;
    };
    addFood (food) {
        if (food instanceof Food) {
            this.addCalories(food.calories);
            this.addProtein(food.protein);
            this.addFat(food.fat);
            this.addCarbs(food.carbs);
        } else {
            console.log('thats not a food');
        }
    }

    saveDay() {
        localStorage.setItem(this.name, JSON.stringify(this));
    }

    loadDay(d) {
        //format should be const jan14 = new Day().loadDay("Jan-14")
        const jsonObj = JSON.parse(localStorage.getItem("d"));
        this.name = jsonObj.name;
        this.month = Number(jsonObj.month);
        this.day = Number(jsonObj.day);
        this.year = Number(jsonObj.year);
        this.calories = Number(jsonObj.calories);
        this.protein = Number(jsonObj.protein);
        this.fat = Number(jsonObj.fat);
        this.carbs = Number(jsonObj.carbs);
        this.calorieGoal = Number(jsonObj.calorieGoal);
        this.proteinGoal = Number(jsonObj.proteinGoal);
        this.fatGoal = Number(jsonObj.fatGoal);
        this.carbGoal = Number(jsonObj.carbGoal);
        this.caloriesRemaining = Number(jsonObj.caloriesRemaining);
        this.proteinRemaining = Number(jsonObj.proteinRemaining);
        this.fatRemaining = Number(jsonObj.fatRemaining);
        this.carbsRemaining = Number(jsonObj.carbsRemaining);
    }
}

class Food {
    constructor (name, calories, protein, fat, carbs) {
        this.name = name;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbs = carbs;
    }
}

const today = new Day();
