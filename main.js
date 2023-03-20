let btn = document.getElementById("btn");

alert("Enter only Text or Numbers !!");

function sato() {
    let victor = document.getElementById("me").value;
    let splitString = victor.split("");
    let reverseArray = splitString.reverse("");
    let joinArray = reverseArray.join("");

          if (victor == joinArray) {
            document.getElementById("response").innerText = (`${victor} is a Palindrome`)
          } else {
            document.getElementById("response").innerText = (`${victor} is not a Palindrome`)
          }
           console.log(joinArray)        
    };



    /*-----------*/
    const typedTextSpan = document.querySelector(".typed-text");
    
    const textArray = ["if your words are in Palindrome.", "if your numbers are in Palindrome."];
    const typingDelay = 190;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      }
      else {
        setTimeout(erase, typingDelay);
      }
    }

    function erase() {
      if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1)
        charIndex--;
        setTimeout(erase, erasingDelay);
      }
      else {
        textArrayIndex++;
        if (textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
        
      }
    }
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(type, newTextDelay + 250);
    })
    /*------*/