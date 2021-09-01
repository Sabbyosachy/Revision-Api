document.getElementById('Error').style.display = 'none';

function SearchFood() {
    const SearchField = document.getElementById('Search-Field');
    const SearchText = SearchField.value;
    SearchField.value = '';
    if (SearchText == '') {
        document.getElementById('Error').style.display = 'block';
    } else {

        const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
        fetch(Url)
            .then(res => res.json())
            .then(data => DisplayFood(data.meals));
    }
}

function DisplayFood(meals) {
    const ContainerDiv = document.getElementById('Card');
    ContainerDiv.innerText = '';
    for (const Meal of meals) {
        console.log(Meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `    
        <div class="card">
            <img width="200px" src="${Meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title fw-bold">${Meal.strMeal}</h3>
                <p class="card-text">${Meal.strInstructions.slice(0,250)}</p>
                <button onclick="SingleData(${Meal.idMeal})" type="button" class="btn btn-danger">Details</button>
            </div>
        </div>
        `;
        ContainerDiv.appendChild(div);
    }
}

function SingleData(MealId) {
    const Url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`;
    fetch(Url)
        .then(res => res.json())
        .then(data => DisplayMeal(data.meals[0]));
}

function DisplayMeal(meal) {
    const Container = document.getElementById('SingleMeal');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `    
    <div class="card">
        <img width="100px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title fw-bold">${meal.strMeal}</h3>
            <h6 class="card-title">Category: ${meal.strCategory}</h6>
            <h6 class="card-title">Area: ${meal.strArea}</h6>
            <p class="card-text">Description: ${meal.strInstructions.slice(0,200)}</p>
            <a href="${meal.strSource}" class="btn btn-danger">Learn More</a>
           

        </div>
    </div>
    `;
    Container.appendChild(div);
}