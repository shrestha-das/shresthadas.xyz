const toggle = document.getElementById('mode-toggle');
const body = document.body;

// check saved mode on load
if (localStorage.getItem('mode') === 'light') {
    body.classList.add('light-mode');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // save preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('mode', 'light');
    } else {
        localStorage.setItem('mode', 'dark');
    }
});