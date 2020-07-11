const input = document.getElementById('volStars');
const forest = document.getElementById('forestImg');
const checkBox = document.getElementById('lightOn');
const exit = document.getElementById('exit');
const leftMenu = document.querySelector('.leftMenu');
const rightIcon = document.querySelector('.rightIcon');
const content = document.querySelector('.content');
const moon = document.querySelector('.moon');
const container = document.querySelector('.container');
const inputValueNumber = document.getElementById('inputValueNumber');
let inputValue = input.value;
let enabled = true;

inputValueNumber.innerHTML = inputValue;

const openLeftMenu = () => {
    leftMenu.classList.add('transformStyleOpen');
    leftMenu.classList.remove('transformStyleClose');
}
const closeLeftMenu = () => {
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
    if(enabled) {
        for(let i = 0; i < numberOfStars; i++) {
            let newStar = document.createElement('i');
            let newDiv = document.createElement('div');
            let newText = document.createElement('p');
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

            newDiv.style.top = y + 10 + 'px';
            newDiv.style.left = x - 75 + 'px';
            
            setInterval(() => {
                newText.innerHTML = "<b>Top: </b>" + newStar.getBoundingClientRect().top + " " + "<b>Left: </b>" + newStar.offsetLeft; 
            }, 500);

            newDiv.style.animationDuration = newStar.style.animationDuration;
            newDiv.style.animationDelay = newStar.style.animationDelay;

            newStar.className = 'stars';
            newDiv.className = 'starWindow';

            newStar.addEventListener('click', () => {
                window.removeEventListener('click', closeStarWindow);
                newDiv.style.opacity = 1;
                newDiv.style.visibility = 'visible';
                console.log('click');
                setTimeout(() => {
                    window.addEventListener('click', closeStarWindow)
                }, 100)
            });

            content.appendChild(newDiv);
            newDiv.appendChild(newText);
            content.appendChild(newStar);
        }
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

checkBox.addEventListener('click', () => {
    if (checkBox.checked == false) {
        container.style.background = "";
        moon.style.backgroundColor = "";
        moon.style.boxShadow = "";
        forest.src = "./images/forest.png";
        enabled = true;
        generateStars(inputValue);
    } else {
        container.style.background = "linear-gradient(#9be2fe, #67d1fb)";
        moon.style.backgroundColor = "#f9d71c";
        moon.style.boxShadow = "0px 0px 10px #f9d71c";
        forest.src = "./images/forestDay.png";
        removeStars();
        enabled = false;
    }
});

const closeStarWindow = (e) => {
    // console.log(e.target);
    const divSelector = document.querySelectorAll('.starWindow');
    for (let k = 0; k < divSelector.length; k++) {
        divSelector[k].style.opacity = 0;
        divSelector[k].style.visibility = '';
    }
}

window.addEventListener('click', closeStarWindow);