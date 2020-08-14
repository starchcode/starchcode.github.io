

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