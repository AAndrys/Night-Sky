const input = document.getElementById('volStars');
const exit = document.getElementById('exit');
const leftMenu = document.querySelector('.leftMenu');
const rightIcon = document.querySelector('.rightIcon');
const content = document.querySelector('.content');
const inputValueNumber = document.getElementById('inputValueNumber');
let inputValue = input.value;
let enabled = false;

inputValueNumber.innerHTML = inputValue;

const openLeftMenu = () => {
    leftMenu.classList.add('transformStyleOpen');
    leftMenu.classList.remove('transformStyleClose');
}
const closeLeftMenu = async () => {
    leftMenu.classList.remove('transformStyleOpen');
    leftMenu.classList.add('transformStyleClose');
}

rightIcon.addEventListener('click', openLeftMenu);
exit.addEventListener('click', closeLeftMenu);

input.addEventListener("input", (e) => {
    inputValue = e.target.value;
    inputValueNumber.innerHTML = inputValue;
    removeStars();
    generateStars(inputValue);
});

const generateStars = (value) => {
    let numberOfStars = value;

    for(let i = 0; i < numberOfStars; i++) {
        let newStar = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let sizeOfStar = Math.random() * 2;

        newStar.style.width = 1 + sizeOfStar + 'px';
        newStar.style.height = 1 + sizeOfStar + 'px';
        newStar.style.top = y + 'px';
        newStar.style.left = x + 'px';

        newStar.style.animationDuration = 5 + duration + 's';
        newStar.style.animationDelay = duration + 's';

        newStar.className = 'stars';

        content.appendChild(newStar);
    }
};
const removeStars = () => {
    const starsI = document.querySelectorAll('i');
    for (let j = 0; j < starsI.length; j++) {
        starsI[j].remove();
    }
};

generateStars(inputValue);

window.addEventListener('resize', () => {
    removeStars();
    generateStars(inputValue);
});