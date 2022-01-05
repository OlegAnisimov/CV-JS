function Ninja() {
    let feints = 0;
    this.getFeints = function(){
        return feints;
    };
    this.feint = function(){
        feints++;
    };
}

let ninja1 = new Ninja();
ninja1.feint();

console.log(ninja1.getFeints())
