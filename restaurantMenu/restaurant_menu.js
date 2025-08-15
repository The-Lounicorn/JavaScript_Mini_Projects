const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $15', 'Oatmeal - $9', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $40', 'Chicken - $22', 'Pasta - $25', 'Burger - $20', 'Salmon - $32'];
const dessertMenu = ['Cake - $10', 'Ice Cream - $8', 'Pudding - $9', 'Fruit Salad - $7'];

//utilizing map method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//utilizing forEach method
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//utilizing for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

