const underNav = document.getElementById('underNav')
const pages = document.querySelectorAll('.main');
const underNavPos = ['0', '23%', '47%', '75%'];

//Navigation: animation settings
const navAnimDur = 0.25
// const navAnim = navAnimDur.toString() + 's ease-out 0s 1 normal forwards running ';

function isVisible(element) {
  let elementBox = element.getBoundingClientRect();
    if(elementBox.top < window.innerHeight / 3 ){
      return true;
  } else {
      return false;
  } 
}
function isVisibleContent(element) {
  let elementBox = element.getBoundingClientRect();
    if(elementBox.top < window.innerHeight * 3 / 4 ){
      return true;
  } else {
      return false;
  }
}
function scanDocument() {
  pages.forEach(function(page, index) {
     if (isVisible(page)){
        underNav.style.left = underNavPos[index];
     }
   });
   
     let sectionList = document.querySelectorAll('.leftAnim');
     sectionList.forEach(function(section, index) {
         if(isVisibleContent(section)) {
 
      section.classList.remove('leftAnim');
         };
     });
 
 }
 
document.addEventListener("scroll", _.throttle(scanDocument, 500));




//email copy func.
const emailAdd = document.getElementById('emailAdd');
const emailAdd2 = document.getElementById('emailAdd2');
function emailCopier() {
    // source: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = "Davoud@starchCode.com";                  // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =            
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    /*if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }*/
    document.getElementById('copied').style.visibility = "visible";
    setTimeout(() => { document.getElementById('copied').style.visibility = "hidden";
  }, 3000);
};






// change content based on query
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("paragraphContact").style.display = "none"
    emailAdd.onmousedown = null;
    emailAdd2.onmousedown = null;
  } else {
    document.getElementById("paragraphContact").style.display = "initial";
    emailAdd.onmousedown = emailCopier;
    emailAdd2.onmousedown = emailCopier;
  }
}

var x = window.matchMedia("(min-width: 375px) and (max-width: 667px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*useful code for window y offset
https://javascript.info/onscroll
*/

//learn jQuery for animation and stuff! there's one on CodeCedemy!

// get id of the clicked element: https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button

// good idea for controling animation with JS: https://codepen.io/thetallweeks/pen/boinE