/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const addTextToElement = (elemntId, text) => {
  const element = document.getElementById(elemntId);
  element.textContent = text;
};

const nicknameSpan = addTextToElement('nickname', 'salma');
const favFoodSpan = addTextToElement('fav-food', 'Maqluba');
const hometownSpan = addTextToElement('hometown', 'Palestine');

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  item.classList.add('list-item');
});
