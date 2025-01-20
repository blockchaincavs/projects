import { menuArray } from "./data.js";

const orderSection = document.getElementById("order-section");
const modal = document.getElementById("modal")

let itemsSelected = [];
let totalPrice = 0;



/**
 * Handle Event for all clicks. 
 * Refer to e.target.dataset for which button was clicked
 */
document.addEventListener("click", function(e) {

    const { buttonId } = e.target.dataset;

    if (buttonId) {
        addToOrder(Number(buttonId));
    } else if (e.target.id === "btn-complete") {
        completeOrder()
    }
    
});

function addToOrder(buttonId) {

    if (buttonId < 0 || buttonId >= menuArray.length) {
        return;
    }
    
    if (orderSection.style.display === '') {
        orderSection.style.display = 'flex';
    }

    const menuItem = menuArray.at(buttonId);

    itemsSelected.push(`
        <div class="order-item flex">
                    <p>${menuItem.name}</p>
                    <p class="item-remove">remove</p>
                    <p class="total-item-price">${menuItem.price}</p>
        </div>
    `)

    totalPrice += menuItem.price;

    orderSection.innerHTML = `
        <h3>Your order</h3> 
        ${itemsSelected.join('')} 
        <div class="total-div flex">
                    <p>Total price:</p>
                    <p>${totalPrice}</p>
        </div>
        <button id="btn-complete">Complete order</button>
    `;

}

function completeOrder() {
    modal.style.display = 'flex';
}

function render() {
    document.getElementById('main-content').innerHTML = getContentHtml();
}

function getContentHtml() {
    let contentHtml = ``;

    menuArray.forEach( item => {
        contentHtml += `
            <section class="item-content">
                <p class="food-emoji">${item.emoji}</p>
                <div class="item-description">
                    <p class="food-item">${item.name}</p>
                    <p class="food-toppings">${item.ingredients}</p>
                    <p class="food-price">${item.price}</p>
                </div>
                <button class="add-btn" data-button-Id=${item.id}>+</button>
            </section>
        `   
    });

    return contentHtml;
}

render();
