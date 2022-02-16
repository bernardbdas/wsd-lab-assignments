let btn = document.getElementsByClassName('as-btn');
let desc = document.getElementsByClassName('desc-box');

let msg = ["Hello", "Welcome"]

for (i = 0; i < btn.length; i++) {
    onmouseover.btn[i] = function(evt) {
        desc[0].inner = msg[i];
    };
}