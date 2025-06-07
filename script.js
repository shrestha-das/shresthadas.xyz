const toggle = document.getElementById('mode-toggle');
const body = document.body;

// check saved mode on load
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});