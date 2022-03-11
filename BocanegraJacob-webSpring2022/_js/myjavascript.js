let myname= "Jacob"
console.log(myname);
console.log("Hello world")

function init () {
    changeheading();
    greeting ()
}

function changeheading() {
    let myheading = document.querySelector('h1');
    myheading.textContent = 'Hello world';
    alert("Page is loaded");
}
