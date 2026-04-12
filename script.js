// 1: Inventory Database (100 items)
const BULK_THRESHOLD = 10;
const DISCOUNT_RATE  = 0.10;

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

// 2: Cart State & DOM References
let cart = JSON.parse(localStorage.getItem("miniMartCart")) || [];

const select       = document.getElementById("productSelect");
const qtyInput     = document.getElementById("qtyInput");
const pricePreview = document.getElementById("pricePreview");
const previewText  = document.getElementById("previewText");
const feedbackBox  = document.getElementById("feedbackBox");
const feedbackText = document.getElementById("feedbackText");
const receiptBox   = document.getElementById("receiptBox");
const receiptDisp  = document.getElementById("receipt");
const cartBadge    = document.getElementById("cartBadge");

// 3: Helper Functions
function buildLabel(product, qty) {
    if (qty === 1) return `1 ${product.name}`;
    if (product.unit === "piece") {
        if (product.name.endsWith("y")) return `${qty} ${product.name.slice(0, -1)}ies`;
        if (product.name.endsWith("o")) return `${qty} ${product.name}es`;
        return `${qty} ${product.name}s`;
    }
    const unitPlural = product.unit.endsWith("y") ? product.unit.slice(0, -1) + "ies" : product.unit + "s";
    return `${qty} ${unitPlural} of ${product.name}`;
}

function calcLine(price, qty) {
    const subtotal = price * qty;
    const hasDiscount = qty > BULK_THRESHOLD;
    const saving = hasDiscount ? subtotal * DISCOUNT_RATE : 0;
    return { total: subtotal - saving, saving, hasDiscount };
}

function showFeedback(msg, type = "error") {
    feedbackText.textContent = msg;
    feedbackBox.className = `feedback-box feedback-${type}`;
    clearTimeout(showFeedback._timer);
    showFeedback._timer = setTimeout(() => feedbackBox.classList.add("hidden"), 3000);
}

function hideFeedback() { feedbackBox.classList.add("hidden"); }

// 4: Live Price Preview
function updatePreview() {
    const product = inventory.find(i => i.name === select.value);
    const qty = Number(qtyInput.value);
    if (!product) { pricePreview.classList.add("hidden"); return; }
    pricePreview.classList.remove("hidden");
    if (qty >= 1) {
        const { total, saving, hasDiscount } = calcLine(product.price, qty);
        previewText.innerHTML = `${buildLabel(product, qty)} = <strong>KSh ${total.toFixed(2)}</strong>` +
            (hasDiscount ? ` <span class="preview-saving">— save KSh ${saving.toFixed(2)}</span>` : "");
    } else {
        previewText.innerHTML = `Unit price: <strong>KSh ${product.price}</strong> / ${product.unit}`;
    }
}

select.addEventListener("change", () => { updatePreview(); hideFeedback(); receiptBox.classList.add("hidden"); });
qtyInput.addEventListener("input",  () => { updatePreview(); hideFeedback(); receiptBox.classList.add("hidden"); });

// 5: Filter & Dropdown Logic
function populateDropdown(filterCategory) {
    select.innerHTML = '<option value="" disabled selected>Choose a product...</option>';
    inventory
        .filter(item => filterCategory.toLowerCase() === "all" || item.category.toLowerCase() === filterCategory.toLowerCase())
        .forEach(item => {
            const option = document.createElement("option");
            option.text = option.value = item.name;
            select.add(option);
        });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = function() {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        populateDropdown(this.getAttribute("data-category"));
        pricePreview.classList.add("hidden");
        receiptBox.classList.add("hidden");
        hideFeedback();
    };
});

// 6: Calculation Logic
document.getElementById("calcBtn").onclick = function() {
    const product = inventory.find(i => i.name === select.value);
    const qty = Number(qtyInput.value);
    if (!product) { showFeedback("Please choose a product first."); return; }
    if (qty < 1)  { showFeedback("Please enter a quantity of at least 1."); return; }
    const { total, saving, hasDiscount } = calcLine(product.price, qty);
    receiptDisp.innerHTML = `Total for ${buildLabel(product, qty)}: <strong>KSh ${total.toFixed(2)}</strong>` +
        (hasDiscount ? `<br><small class="discount-note">10% bulk discount — you saved KSh ${saving.toFixed(2)}</small>` : "");
    receiptBox.classList.remove("hidden");
    hideFeedback();
};

// 7: Add to Cart Logic
document.getElementById("addToCartBtn").onclick = function() {
    const product = inventory.find(i => i.name === select.value);
    const qty = Number(qtyInput.value);
    if (!product) { showFeedback("Please choose a product first."); return; }
    if (qty < 1)  { showFeedback("Please enter a quantity of at least 1."); return; }
    const { total } = calcLine(product.price, qty);
    const existing = cart.find(item => item.name === product.name);
    if (existing) { existing.qty += qty; existing.totalPrice += total; }
    else cart.push({ name: product.name, qty, totalPrice: total });
    saveAndRender();
    showFeedback(`${product.name} added to cart!`, "success");
    receiptBox.classList.add("hidden");
};

// 8: Render Cart
function renderCart() {
    const cartList     = document.getElementById("cartList");
    const totalDisplay = document.getElementById("totalDisplay");
    cartList.innerHTML = "";
    if (cart.length === 0) {
        cartList.innerHTML = '<li class="cart-empty">Cart is empty</li>';
        totalDisplay.innerText = "0.00";
        cartBadge.classList.add("hidden");
        return;
    }
    cartBadge.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
    cartBadge.classList.remove("hidden");
    let grandTotal = 0;
    cart.forEach((item, index) => {
        grandTotal += item.totalPrice;
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-meta">× ${item.qty}</span>
            <span class="cart-item-price">KSh ${item.totalPrice.toFixed(2)}</span>
            <button class="remove-btn" onclick="removeItem(${index})">×</button>`;
        cartList.appendChild(li);
    });
    totalDisplay.innerText = grandTotal.toFixed(2);
}

// 9: Helper Functions for Storage & Reset
window.removeItem = function(index) { cart.splice(index, 1); saveAndRender(); };

function saveAndRender() {
    localStorage.setItem("miniMartCart", JSON.stringify(cart));
    renderCart();
}

document.getElementById("clearBtn").onclick = function() {
    select.value = ""; qtyInput.value = "";
    pricePreview.classList.add("hidden");
    receiptBox.classList.add("hidden");
    hideFeedback();
};

// 10: Initial Setup
populateDropdown("All");
renderCart();
