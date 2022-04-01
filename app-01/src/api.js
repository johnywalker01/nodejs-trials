
exports.getIngredients = (color) => {
    if (color == 'white') {
        return ingredients.filter(item => item.id > 2);
    }

    if (color == 'red') {
        return ingredients.filter(item => item.id <= 2);
    }

    return ingredients;
}


const ingredients = [
    {
        "id": 1,
        "item": "Bacon"
    },
    {
        "id": 2,
        "item": "Eggs"
    },
    {
        "id": 3,
        "item": "Milk"
    },
    {
        "id": 4,
        "item": "Butter"
    }
];