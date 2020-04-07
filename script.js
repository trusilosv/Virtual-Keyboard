'use strict'
/*window.addEventListener('blur', (event) => {
    alert(event.type.toString());
    console.log(event);
})*/

document.head.innerHTML = ' <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Virtual-Keyboard</title>  <link rel="stylesheet" href="style.css">  ';
let script = document.createElement('script');
script.src = "classes.js"
document.head.append(script);


window.onload = function() {

    let script = document.createElement('script');
    script.src = "Keyboard.js"
    document.head.append(script);

}