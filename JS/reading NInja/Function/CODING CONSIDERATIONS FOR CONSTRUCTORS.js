'use strict'
function Ninja() {
    this.skulk = function() {
        return this;
    };
}
var whatever = Ninja();

console.log(whatever.skulk());
