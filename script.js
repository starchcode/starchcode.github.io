const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const workLink = document.getElementById("myWork-link");
const contactLink = document.getElementById("contact-link");
const underNav = document.getElementById("underNav");


//Navigation: animation settings
const navAnimDur = 0.25
const navAnim = navAnimDur.toString() + 's ease-out 0s 1 normal forwards running ';
homeLink.onclick = function() {
  underNav.style.animation = navAnim + ' underHome'
  setTimeout(function(){underNav.style.left = '0%'}, navAnimDur * 1000);

}
aboutLink.onclick = function() {
  /* @keyframes duration | timing-function | delay | 
iteration-count | direction | fill-mode | play-state | name */
  underNav.style.animation = navAnim +' underAbout'
  setTimeout(function(){underNav.style.left = '23%'}, navAnimDur * 1000)
}
workLink.onclick = function() {
  underNav.style.animation = navAnim + ' underWork';
  setTimeout(function(){underNav.style.left = '47%'}, navAnimDur * 1000);
}
contactLink.onclick = function() {
  underNav.style.animation = navAnim + ' underContact'
  setTimeout(function(){underNav.style.left = '75%'}, navAnimDur * 1000)
}


//email copy func.
const emailAdd = document.getElementById('emailAdd');
function myFunc() {
    // source: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = emailAdd.innerHTML;                  // Set its value to the string that you want copied
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
    document.getElementById('copied').style.display = "block";
    setTimeout(() => { document.getElementById('copied').style.display = "none";
  }, 3000);
};

emailAdd.onmousedown = myFunc;





/*useful code for window y offset
https://javascript.info/onscroll
*/

//learn jQuery for animation and stuff! there's one on CodeCedemy!

// get id of the clicked element: https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button

// good idea for controling animation with JS: https://codepen.io/thetallweeks/pen/boinE