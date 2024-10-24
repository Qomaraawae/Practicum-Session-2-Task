// Array warna untuk dipilih secara acak
const colors = ["white", "lightblue", "lightgreen", "lightyellow", "lightcoral", "lavender", "peachpuff", "skyblue", "khaki", "plum"];

// Change Background Color to a random color
document.getElementById('random-bg-color').addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Change Font Size
document.getElementById('font-size').addEventListener('input', function() {
    document.body.style.fontSize = this.value + 'px';
});

// Toggle Dark Mode
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    if (isDarkMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById('toggle-dark-mode').innerText = 'Toggle Light Mode';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('toggle-dark-mode').innerText = 'Toggle Dark Mode';
    }
});

// Change Font Style
document.getElementById('font-style').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});
