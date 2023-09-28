console.log('JS is linked!');
let myCount = document.getElementById('counter');
let count = 0;

let main = document.querySelector('main');
let body = document.querySelector('body');
let btns = document.querySelectorAll('button.theme');

btns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        let theme = evt.target.innerText;
        console.log(theme);
        selectTheme(theme.toLowerCase());
    })
});

const selectTheme = (theme) => {
    console.log("SelectTheme: ", theme)
    main.className = theme;
    body.className = theme;
}


// COUNT METHODS
const increase = () => {
    count++;
    updateCount();
}
const decrease = () => {
    count--;
    updateCount();
}
const reset = () => {
    count = 0;
    updateCount();
}
const updateCount = () => { myCount.textContent = count; console.log(count); }

