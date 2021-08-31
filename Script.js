function LoadInfo() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => Displayquta(data));
}

function Displayquta(data) {
    const Container = document.getElementById('Quota');
    const div = document.createElement('div');
    div.innerText = data.quote;
    Container.appendChild(div);
}