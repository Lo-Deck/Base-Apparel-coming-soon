# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/Base-Apparel-coming-soon/blob/main/screenshot/Base%20Apparel%20coming%20soon-desktop.png).
![screenshot mobile](https://github.com/Lo-Deck/Base-Apparel-coming-soon/blob/main/screenshot/Base%20Apparel%20coming%20soon-mobile.png).

![screenshot desktop-NoValidate](https://github.com/Lo-Deck/Base-Apparel-coming-soon/blob/main/screenshot/Base%20Apparel%20coming%20soon-desktop-NoValidate.png).
![screenshot mobile-NoValidate](https://github.com/Lo-Deck/Base-Apparel-coming-soon/blob/main/screenshot/Base%20Apparel%20coming%20soon-mobile-NoValidate.png).



### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Base-Apparel-coming-soon).
- Live Site URL: [Website](https://lo-deck.github.io/Base-Apparel-coming-soon/).



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-JS


### What I learned


How I can check out whether a form is valid or not by using JS and `addEventListener('submit', )` and provide a different style from the browser.


```html
 <form class="form-container" id="sendEmail" action="./index.html" novalidate>
```


```js
if(!myInput.validity.valid)
{
   
        	error.innerText = 'Please provide a valid form';
	myInput.style.borderColor = 'red';

        	myError.classList.add('hidden');
        	myInput.focus(); 
	event.preventDefault();
        
}
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.