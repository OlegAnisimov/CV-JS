function assert(value, desc) {
    let li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
window.onload = function() {
    assert(true, "The test suite is running.");
    assert(false, "Fail!");
};
