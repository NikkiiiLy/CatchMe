const img = document.querySelector('img');

img.addEventListener('mouseover', function () {
    console.log("Mouse Over Me");
    const h = Math.floor(Math.random() * window.innerHeight);
    const w = Math.floor(Math.random() * window.innerWidth);
    img.style.left = `${w}px`
    img.style.top = `${h}px`
});

img.addEventListener('click', function () {
    document.getElementById('kichi').src = 'Sanji.png';
    const h2 = document.getElementById('noBath');
    h2.innerHTML = "Sanji does not want to take a bath too. Catch him!";
})

