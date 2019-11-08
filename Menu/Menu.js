/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuCreator = (arr) => {


  const fullMenu = document.createElement('div');
  const menuList = document.createElement('ul');
  
  fullMenu.appendChild(menuList);

  fullMenu.classList.add('menu');

  arr.forEach(item => {
    item = document.createElement('li');
    item.textContent = arr[0];
    menuList.appendChild(item);
  })

  const menuOpen = document.querySelector('.menu-button');

  menuOpen.addEventListener("click", () => {
    fullMenu.classList.toggle('menu--open');
  });
  
  return fullMenu;

  // const fullMenu = document.createElement('div');
  // const menuList = document.createElement('ul');
  // const menuItem1 = document.createElement('li');
  // const menuItem2 = document.createElement('li');
  // const menuItem3 = document.createElement('li');
  // const menuItem4 = document.createElement('li');
  // const menuItem5 = document.createElement('li');
  // const menuItem6 = document.createElement('li');

  // fullMenu.appendChild(menuList);
  // menuList.appendChild(menuItem1);
  // menuList.appendChild(menuItem2);
  // menuList.appendChild(menuItem3);
  // menuList.appendChild(menuItem4);
  // menuList.appendChild(menuItem5);
  // menuList.appendChild(menuItem6);

  // fullMenu.classList.add('menu');
}

const newMenu = menuCreator(menuItems);

const parentMenu = document.querySelector('.header');

parentMenu.appendChild(newMenu);