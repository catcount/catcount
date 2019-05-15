//breakfast

var scrambledeggs = {
    name: "Scrambled Eggs",
    calories: "210",
    protein: "15 g",
    carbs: "5 g",
    fats: "7 g",
};

var bacon = {
    name: "Bacon",
    calories: "80",
    protein: "7 g",
    carbs: "5 g",
    fats: "11 g",
};

var porksausage = {
    name: "Pork Sausage",
    calories: "90",
    protein: "8 g",
    carbs: "5 g",
    fats: "6 g",
};

var sweetpotatoes = {
    name: "Sweet Potatoes",
    calories: "110",
    protein: "2 g",
    carbs: "5 g",
    fats: "3 g",
};

var oats = {
    name: "Oats",
    calories: "180",
    protein: "2 g",
    carbs: "20g",
    fats: "1 g",
};


//lunch

var grilledchicken = {
    name: "Grilled Chicken",
    calories: "170",
    protein: "24 g",
    carbs: "5 g",
    fats: "4 g",
};

var porkloin = {
  name: "Pork Loin",
  calories: "200",
  protein: "22 g",
  carbs: "4 g",
  fats: "8 g",
};

var rice = {
  name: "Rice",
  calories: "130",
  protein: "1 g",
  carbs: "10 g",
  fats: "2 g",
}

var corn = {
  name: "Corn",
  calories: "170",
  protein: "2 g",
  carbs: "18 g",
  fats: "3 g",
};

var zucchini = {
  name: "Zucchini",
  calories: "40",
  protein: "0 g",
  carbs: "5 g",
  fats: "0 g",
};


//dinner

var salmon = {
  name: "Salmon",
  calories: "320",
  protein: "23 g",
  carbs: "8 g",
  fats: "7 g",
};

var alfredo = {
  name: "Alfredo",
  calories: "250",
  protein: "6 g",
  carbs: "32 g",
  fats: "5 g",
}

var broccoli = {
  name: "Broccoli",
  calories: "40",
  protein: "1 g",
  carbs: "4 g",
  fats: "0 g",
};

var pizza= {
  name: "Pizza",
  calories: "320",
  protein: "11 g",
  carbs: "23 g",
  fats: "17 g",
};

var greenbeans = {
  name: "Green Beans",
  calories: "20",
  protein: "1 g",
  carbs: "3 g",
  fats: "1 g",
};

var calories = 0;

// meal times
var breakfast = [scrambledeggs, bacon, porksausage, sweetpotatoes, oats];

var lunch = [grilledchicken, porkloin, rice, corn, zucchini];

var dinner = [salmon, alfredo, broccoli, pizza, greenbeans];

$(document).ready(function () {

    breakfast.forEach(function (element) {
        var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
        $("#selection").append(menu);
    });

    $("#breakfast_btn").change(function (){
      $("#selection .food_option").remove();
      console.log("breakfast pressed");

      if ($(this).is(':checked')) {
        breakfast.forEach(function (element) {
            var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
            $("#selection").append(menu);
        });
      }


    })

    $("#lunch_btn").change(function (){
      $("#selection .food_option").remove();
      console.log("lunch pressed");

      if ($(this).is(':checked')) {
        lunch.forEach(function (element) {
            var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
            $("#selection").append(menu);
        });
      }



    })

    $("#dinner_btn").change(function (){
      $("#selection .food_option").remove();
      console.log("dinner pressed");

      if ($(this).is(':checked')) {
        dinner.forEach(function (element) {
            var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
            $("#selection").append(menu);
        });
      }



    })





    $("#selection").click(function () {
        // console.log($("#selection option:selected").text())
        $("#foodName").text($("#selection option:selected").text());
        foodName = $("#selection option:selected").text();
        //remove space and make lower case
        foodName_small = foodName.replace(/ +/g, "").toLowerCase();
        var selected_food = eval(foodName_small);
        $(foodInfo).html("Protein: " + selected_food.protein);



    })


    $("#add-item").click(function () {
      foodName = $("#selection option:selected").text();
      //remove space and make lower case
      foodName_small = foodName.replace(/ +/g, "").toLowerCase();
      var selected_food = eval(foodName_small);

      calories = calories + parseInt(selected_food.calories);
      $("#calories").html("Calories: " + calories);

        var food = '<li>' + $("#selection option:selected").text() + '</li>';
        $("#food-list").append(food);
    })
});

var protein = document.getElementById('protein');
var calories = document.getElementById('calories');
var fats = document.getElementById('fats');
var carbs = document.getElementById('carbs');
