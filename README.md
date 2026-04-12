       🛒 Tanite Mini-Mart POS System
A modern, side-by-side shopping dashboard designed for small vendors. This app calculates prices and manages a full shopping cart with persistence, category filtering, and a professional "receipt" aesthetic.

       What’s New (Features)
1.Massive Inventory: Expanded from 20 fruits to 100+ items across 5 categories (Fruits, Vegetables, Dairy, Grains, and Grocery).

2.Category Filtering: Quick-access "pills" to filter the inventory so users don't have to scroll through one giant list.

3.Persistent Shopping Cart: Thanks to localStorage, the items in the cart stay there even if you refresh the page or close your browser.

4.Smart Merging: If you add "Mangoes" twice, the app is smart enough to find the existing entry and just update the quantity instead of creating a messy duplicate.

5.Individual Item Control: Added a "Remove" (×) button for every item in the cart, allowing for granular edits without clearing the whole order.

6.Side-by-Side Dashboard: A professional layout that keeps the calculator on the left and the running receipt on the right for better visibility on larger screens.

       Lessons Learnt
This stage of the project was a huge jump in my JavaScript journey. Here are the breakthroughs I achieved:

a.Mastering the Array "Big Three": I moved beyond simple loops and mastered .find() (to merge items), .filter() (to sort categories), and .splice() (to remove specific items from the middle of the cart).

b.Browser Memory: I learned how to use JSON.parse and JSON.stringify to save complex data into the browser’s localStorage, making the app feel like a real tool.

c.The Accumulator Pattern: Learning how to loop through a cart array to calculate a "Grand Total" that updates live as the user shops.

d.Flexbox Layouts: I practiced using display: flex to create a dashboard where the sidebar stays fixed while the user interacts with the main form.

e.State vs. UI: Understanding that the "State" (my JavaScript array) is what actually matters. If I change the array, I just need to "re-render" the UI to match it.

       Technologies Used
1.HTML5: Semantic structure including a two-column dashboard layout.

2.CSS3: Custom properties (variables), dashed "receipt" borders, and responsive Flexbox positioning.

3.JavaScript (ES6): Advanced array methods, Event Listeners, and LocalStorage integration.

       How to Use
a.Filter: Click a category button (like "Dairy") to narrow down the selection.

b.Check Price: Select an item and quantity, then hit Check Price to see the total and any applicable bulk discounts.

c.Add to Cart: If the price looks good, hit Add to Cart.

d.Manage: Use the "×" next to any item to remove it, or use the Clear button to wipe the whole session and start a new customer.

               🔮 Future Prospects
1.Search Bar: Adding a "type-to-search" feature to find items even faster.

2.Print to PDF: A button to generate a clean, printable PDF receipt for the customer to take home.