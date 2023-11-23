const changeColor = document.getElementById('changeColor');

changeColor.addEventListener('click', function(){
    const headingOne = document.querySelector('h1');
    
    headingOne.style.color = "red";
});