
// 1. The Data Base (20 Fruits)
const inventory = [
    "Apple", "Banana", "Cherry", "Date", "Mango", 
    "Orange", "Papaya", "Watermelon", "Pineapple", "Avocado", 
    "Passion Fruit", "Lemon", "Lime", "Grape", "Strawberry", 
    "Plum", "Pear", "Guava", "Tangerine", "Kiwi"
];

const prices = [
    50, 30, 80, 100, 60, 
    40, 120, 350, 150, 50, 
    20, 15, 10, 200, 250, 
    70, 90, 45, 35, 110
];


// Speaking With Calculate Button
document.getElementById("calcBtn").onclick = function(){
    const searchFor = document.getElementById("fruitInput").value;
    const quantity = document.getElementById("qtyInput").value;
    const display = document.getElementById("receipt");


let foundPrice = 0;
let itemFound = false;

//The loop
for(let i = 0;i < inventory.length;i++){
    if(inventory[i].toLowerCase() === searchFor.toLowerCase()){
        foundPrice = prices[i];
        itemFound = true;
        break;
}
}

//The Output
if(itemFound){
    const qtyNum = Number(quantity)
    let total = foundPrice * qtyNum;
    
    let discountMessage = "";

    if(qtyNum > 10){
        total = total * 0.9;
        
        alert("10% Bulk Discount Applied! ✅ You  saved KSh " + (foundPrice * qtyNum * 0.1)
        .toFixed(2) + "!")
    }

const plural = qtyNum > 1 ? "s" : "";

    display.innerText = `Total for ${qtyNum} ${searchFor}${plural}: KSh.${total.toFixed(2)}.`;
    display.style.color = "green";
}
else{
    display.innerText = "Sorry, we don't have that fruit today."
    display.style.color = "red"
}
}

// Speaking with the Clear Button
document.getElementById("clearBtn").onclick = function(){
    // 1.Clear input boxes
    document.getElementById("fruitInput").value = "";
    document.getElementById("qtyInput").value = "";


    // 2.Clear result message
    document.getElementById("receipt").innerText = "";
};