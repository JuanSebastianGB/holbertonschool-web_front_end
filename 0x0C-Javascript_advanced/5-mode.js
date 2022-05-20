const changeMode = (size, weight, transform, background, color) => {
    return function () {
        document.body.style.size = `${size} px`;
        document.body.style.weight = `${weight}`;
        document.body.style.transform = `${transform}`;
        document.body.style.background = `${background}`;
        document.body.style.color = `${color}`;
    }
}

const main = () => {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    const text = document.createTextNode('Welcome Holberton !');
    paragraph.appendChild(text);

    const button = document.createElement('button');
    button.innerHTML = 'Spooky';
    button.addEventListener('click', spooky);
    document.body.appendChild(button);

    const button2 = document.createElement('button');
    button2.innerHTML = 'Dark mode';
    button2.addEventListener('click', darkMode);
    document.body.appendChild(button2);

    const button3 = document.createElement('button');
    button3.innerHTML = 'Scream mode';
    button3.addEventListener('click', screamMode);
    document.body.appendChild(button3);
}

document.addEventListener('DomContentLoaded', (event) => main())