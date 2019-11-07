const pizzas = require('../data/pizzas.json');

function getPizzas(pizzaId) {
    if(!pizzaId)
        return pizzas;
    const pizza = pizzas.find((pizza) => {
        return parseInt(pizza.id) === parseInt(pizzaId);
    });

    if(pizza)
        return pizza;
    throw new Error('The pizza you requested was not found.');
}

module.exports = getPizzas;
