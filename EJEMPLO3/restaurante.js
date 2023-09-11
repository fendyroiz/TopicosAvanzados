'use strict'

const restaurants = {
    name: 'Classico Italiano',
    lacation: 'Via Angelo Tavari 23, firenza Italy',
    categories: ['Italian', 'Mexican', 'vegetarian','Organic'],
    startedMenu: ['Garlic Bread', 'Foccacia', 'Caprese salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

const [first, second] = restaurants.categories;

console.log(first, second);