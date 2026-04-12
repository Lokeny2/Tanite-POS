// 1: Expanded Inventory Database (100 items)
const inventory = [
    // FRUITS (20)
    {name: "Apple", price: 50, category: "Fruit", unit: "piece"}, {name: "Banana", price: 30, category: "Fruit", unit: "piece"},
    {name: "Cherry", price: 80, category: "Fruit", unit: "piece"}, {name: "Date", price: 100, category: "Fruit", unit: "piece"},
    {name: "Mango", price: 60, category: "Fruit", unit: "piece"}, {name: "Orange", price: 40, category: "Fruit", unit: "piece"},
    {name: "Papaya", price: 120, category: "Fruit", unit: "piece"}, {name: "Watermelon", price: 350, category: "Fruit", unit: "piece"},
    {name: "Pineapple", price: 150, category: "Fruit", unit: "piece"}, {name: "Avocado", price: 50, category: "Fruit", unit: "piece"},
    {name: "Passion Fruit", price: 20, category: "Fruit", unit: "piece"}, {name: "Lemon", price: 15, category: "Fruit", unit: "piece"},
    {name: "Lime", price: 10, category: "Fruit", unit: "piece"}, {name: "Grape", price: 200, category: "Fruit", unit: "piece"},
    {name: "Strawberry", price: 250, category: "Fruit", unit: "piece"}, {name: "Plum", price: 70, category: "Fruit", unit: "piece"},
    {name: "Pear", price: 90, category: "Fruit", unit: "piece"}, {name: "Guava", price: 45, category: "Fruit", unit: "piece"},
    {name: "Tangerine", price: 35, category: "Fruit", unit: "piece"}, {name: "Kiwi", price: 110, category: "Fruit", unit: "piece"},

    // VEGETABLES (20)
    {name: "Sukuma Wiki", price: 20, category: "Vegetable", unit: "bundle"}, {name: "Tomato", price: 15, category: "Vegetable", unit: "piece"},
    {name: "Onion", price: 10, category: "Vegetable", unit: "piece"}, {name: "Cabbage", price: 50, category: "Vegetable", unit: "piece"},
    {name: "Spinach", price: 25, category: "Vegetable", unit: "bundle"}, {name: "Carrot", price: 10, category: "Vegetable", unit: "piece"},
    {name: "Potato", price: 40, category: "Vegetable", unit: "piece"}, {name: "Capsicum", price: 30, category: "Vegetable", unit: "piece"},
    {name: "Cucumber", price: 35, category: "Vegetable", unit: "piece"}, {name: "Ginger", price: 150, category: "Vegetable", unit: "kg"},
    {name: "Garlic", price: 200, category: "Vegetable", unit: "piece"}, {name: "Broccoli", price: 180, category: "Vegetable", unit: "piece"},
    {name: "Cauliflower", price: 120, category: "Vegetable", unit: "piece"}, {name: "Eggplant", price: 45, category: "Vegetable", unit: "piece"},
    {name: "Pumpkin", price: 150, category: "Vegetable", unit: "piece"}, {name: "Beetroot", price: 60, category: "Vegetable", unit: "piece"},
    {name: "Zucchini", price: 80, category: "Vegetable", unit: "piece"}, {name: "Celery", price: 90, category: "Vegetable", unit: "bundle"},
    {name: "Green Beans", price: 70, category: "Vegetable", unit: "packet"}, {name: "Peas", price: 130, category: "Vegetable", unit: "packet"},

    // DAIRY (20)
    {name: "Fresh Milk", price: 70, category: "Dairy", unit: "packet"}, {name: "Yogurt", price: 120, category: "Dairy", unit: "cup"},
    {name: "Cheese", price: 450, category: "Dairy", unit: "block"}, {name: "Butter", price: 300, category: "Dairy", unit: "tub"},
    {name: "Margarine", price: 180, category: "Dairy", unit: "tub"}, {name: "Heavy Cream", price: 250, category: "Dairy", unit: "carton"},
    {name: "Mala", price: 110, category: "Dairy", unit: "packet"}, {name: "Condensed Milk", price: 220, category: "Dairy", unit: "can"},
    {name: "Ghee", price: 600, category: "Dairy", unit: "jar"}, {name: "Powdered Milk", price: 800, category: "Dairy", unit: "tin"},
    {name: "Sour Cream", price: 150, category: "Dairy", unit: "tub"}, {name: "Mozzarella", price: 550, category: "Dairy", unit: "pack"},
    {name: "Cheddar", price: 500, category: "Dairy", unit: "block"}, {name: "Paneer", price: 400, category: "Dairy", unit: "block"},
    {name: "Cottage Cheese", price: 350, category: "Dairy", unit: "tub"}, {name: "Ice Cream", price: 600, category: "Dairy", unit: "tub"},
    {name: "Whipping Cream", price: 280, category: "Dairy", unit: "carton"}, {name: "Skimmed Milk", price: 85, category: "Dairy", unit: "packet"},
    {name: "Soy Milk", price: 160, category: "Dairy", unit: "carton"}, {name: "Almond Milk", price: 450, category: "Dairy", unit: "carton"},

    // GRAINS (20)
    {name: "Rice", price: 210, category: "Grain", unit: "kg"}, {name: "Maize Flour", price: 145, category: "Grain", unit: "packet"},
    {name: "Wheat Flour", price: 170, category: "Grain", unit: "packet"}, {name: "Oats", price: 250, category: "Grain", unit: "tin"},
    {name: "Millet", price: 180, category: "Grain", unit: "kg"}, {name: "Sorghum", price: 160, category: "Grain", unit: "kg"},
    {name: "Barley", price: 220, category: "Grain", unit: "kg"}, {name: "Quinoa", price: 1200, category: "Grain", unit: "packet"},
    {name: "Pasta", price: 110, category: "Grain", unit: "packet"}, {name: "Spaghetti", price: 100, category: "Grain", unit: "packet"},
    {name: "Macaroni", price: 95, category: "Grain", unit: "packet"}, {name: "Brown Rice", price: 350, category: "Grain", unit: "kg"},
    {name: "Couscous", price: 400, category: "Grain", unit: "packet"}, {name: "Cornmeal", price: 80, category: "Grain", unit: "kg"},
    {name: "Breadcrumbs", price: 150, category: "Grain", unit: "packet"}, {name: "Popcorn", price: 200, category: "Grain", unit: "packet"},
    {name: "Noodles", price: 60, category: "Grain", unit: "packet"}, {name: "Lentils", price: 240, category: "Grain", unit: "kg"},
    {name: "Green Grams", price: 220, category: "Grain", unit: "kg"}, {name: "Kidney Beans", price: 180, category: "Grain", unit: "kg"},

    // GROCERY (20)
    {name: "Sugar", price: 160, category: "Grocery", unit: "kg"}, {name: "Salt", price: 30, category: "Grocery", unit: "packet"},
    {name: "Cooking Oil", price: 350, category: "Grocery", unit: "liter"}, {name: "Tea Leaves", price: 120, category: "Grocery", unit: "packet"},
    {name: "Coffee", price: 500, category: "Grocery", unit: "jar"}, {name: "Honey", price: 400, category: "Grocery", unit: "jar"},
    {name: "Tomato Sauce", price: 150, category: "Grocery", unit: "bottle"}, {name: "Jam", price: 250, category: "Grocery", unit: "jar"},
    {name: "Peanut Butter", price: 350, category: "Grocery", unit: "jar"}, {name: "Baking Powder", price: 60, category: "Grocery", unit: "tin"},
    {name: "Yeast", price: 40, category: "Grocery", unit: "sachet"}, {name: "Vinegar", price: 100, category: "Grocery", unit: "bottle"},
    {name: "Soy Sauce", price: 280, category: "Grocery", unit: "bottle"}, {name: "Mayonnaise", price: 450, category: "Grocery", unit: "jar"},
    {name: "Mustard", price: 200, category: "Grocery", unit: "jar"}, {name: "Black Pepper", price: 150, category: "Grocery", unit: "sachet"},
    {name: "Curry Powder", price: 80, category: "Grocery", unit: "sachet"}, {name: "Cinnamon", price: 120, category: "Grocery", unit: "sachet"},
    {name: "Biscuits", price: 50, category: "Grocery", unit: "packet"}, {name: "Chocolate", price: 200, category: "Grocery", unit: "bar"}
];

// Initialize Cart from LocalStorage or empty array
let cart = JSON.parse(localStorage.getItem("miniMartCart")) || [];

const select = document.getElementById("productSelect");

// 2: Logic for Filtering and Populating the Dropdown
function populateDropdown(filterCategory) {
    select.innerHTML = '<option value="" disabled selected>Choose a product...</option>';

    const filteredItems = inventory.filter(item => {
        return filterCategory.toLowerCase() === "all" || 
               item.category.toLowerCase() === filterCategory.toLowerCase();
    });

    filteredItems.forEach(item => {
        let option = document.createElement("option");
        option.text = item.name;
        option.value = item.name;
        select.add(option);
    });
}

// 3: Category Filter Event Listeners
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = function() {
        const category = this.getAttribute("data-category");
        populateDropdown(category);
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    };
});

// 4: Calculation (Preview Price) Logic
document.getElementById("calcBtn").onclick = function() {
    const productName = select.value;
    const quantity = document.getElementById("qtyInput").value;
    const receiptBox = document.getElementById("receiptBox");
    const receiptDisplay = document.getElementById("receipt");

    const product = inventory.find(item => item.name === productName);

    if (product && quantity > 0) {
        const qtyNum = Number(quantity);
        let total = product.price * qtyNum;
        
        if (qtyNum > 10) total *= 0.9; // Preview 10% Discount

        // Pluralization logic for display
        let displayLabel = "";
        if (qtyNum === 1) {
            displayLabel = `1 ${product.name}`;
        } else {
            if (product.unit === "piece") {
                if (product.name.endsWith("y")) displayLabel = `${qtyNum} ${product.name.slice(0, -1)}ies`;
                else if (product.name.endsWith("o")) displayLabel = `${qtyNum} ${product.name}es`;
                else displayLabel = `${qtyNum} ${product.name}s`;
            } else {
                let unitPlural = product.unit.endsWith("y") ? product.unit.slice(0, -1) + "ies" : product.unit + "s";
                displayLabel = `${qtyNum} ${unitPlural} of ${product.name}`;
            }
        }

        receiptDisplay.innerText = `Preview: ${displayLabel} = KSh ${total.toFixed(2)}`;
        receiptBox.classList.remove("hidden");
    } else {
        alert("Please select an item and quantity first!");
    }
};

// 5: Add to Cart Logic
document.getElementById("addToCartBtn").onclick = function() {
    const productName = select.value;
    const quantity = document.getElementById("qtyInput").value;
    const product = inventory.find(item => item.name === productName);

    if (product && quantity > 0) {
        const qtyNum = Number(quantity);
        let total = product.price * qtyNum;
        if (qtyNum > 10) total *= 0.9;

        // Search if item already exists in cart
        let existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.qty += qtyNum;
            existingItem.totalPrice += total;
        } else {
            cart.push({ name: productName, qty: qtyNum, totalPrice: total });
        }

        saveAndRender();
        document.getElementById("receiptBox").classList.add("hidden");
    } else {
        alert("Select a product to add!");
    }
};

// 6: Render Cart with Remove Button
function renderCart() {
    const cartList = document.getElementById("cartList");
    const totalDisplay = document.getElementById("totalDisplay");
    let grandTotal = 0;
    
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = '<li style="border:none; color:var(--muted)">Cart is empty</li>';
        totalDisplay.innerText = "0.00";
        return;
    }

    cart.forEach((item, index) => {
        grandTotal += item.totalPrice;
        cartList.innerHTML += `
            <li>
                ${item.name} x ${item.qty} 
                <span>
                    KSh ${item.totalPrice.toFixed(2)} 
                    <button class="remove-btn" onclick="removeItem(${index})">×</button>
                </span>
            </li>`;
    });

    totalDisplay.innerText = grandTotal.toFixed(2);
}

// 7: Helper functions for removal and storage
window.removeItem = function(index) {
    cart.splice(index, 1);
    saveAndRender();
};

function saveAndRender() {
    localStorage.setItem("miniMartCart", JSON.stringify(cart));
    renderCart();
}

// 8: Reset & Clear Feature
document.getElementById("clearBtn").onclick = function() {
    if (confirm("Clear entire cart and inputs?")) {
        cart = [];
        saveAndRender();
        select.value = "";
        document.getElementById("qtyInput").value = "";
        document.getElementById("receiptBox").classList.add("hidden");
    }
};

// Initial setup
populateDropdown("All");
renderCart();