
     🍎 Tanite Fruit Market Calculator
A  responsive web application designed for market vendors to calculate totals quickly, handle bulk discounts, and manage inventory with a "Fresh Market" aesthetic.

     Features
1.Smart Search: Instantly scans an inventory of 20 different fruits with case-insensitive matching.

2.Bulk Savings Engine: Automatically applies a 10% discount for orders over 10 units, triggering an interactive alert that calculates exact savings.

3.Modern UI: A clean "Card" design built with CSS Flexbox, featuring a specialized "Fresh Green" color palette and a dedicated reset system.

4.State Management: A one-touch "Clear" button to reset the workspace and refocus the input for the next customer.

    Technologies Used
1.HTML5: Semantic structure for accessibility and SEO.

2.CSS3: Custom styling using Flexbox, box-shadows, and smooth border-radius transitions.

3.JavaScript (ES6): Array manipulation, DOM event handling, and conditional business logic.

    Lessons Learnt
1.Data Type Management: mastered the conversion of HTML string inputs into functional numbers using Number() to perform accurate financial math.

2.Parallel Arrays: learnt coordination of data across multiple arrays (inventory and prices) using index-based loops.

3.The Power of Ternaries: using concise one-line logic (?) to handle UI changes like pluralization without bloating the code.

4.Debugging DOM Typos: learning the importance of exact naming conventions (e.g., fixing getElelementById) and using the browser console to track runtime errors.


    Future Prospects
1.Live Inventory Management: Adding a UI feature to allow vendors to add, delete, or update fruit prices directly from the browser without touching the code.

2.Receipt Export: Implementing a "Download Receipt" feature using jspdf to give customers a digital copy of their bill.

3.Persistent Storage: Integrating localStorage so the calculator remembers the previous transaction even if the page is refreshed.

4.Dark Mode Toggle: Adding a theme switcher to accommodate different lighting environments in a market setting.

    Installation & Usage
Clone this repository.

Open index.html in any modern web browser.

Enter a fruit name (e.g., "Mango") and a quantity.

Hit Calculate Total and watch the magic happen!

