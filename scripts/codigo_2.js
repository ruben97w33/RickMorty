const URLactual = window.location.href;
const URL_API = "https://rickandmortyapi.com/api/character/";

function getParameterByName(name, URLactual) {
    let reg = new RegExp('(=([^&#]*)|&|#|$)');
    return reg.exec(URLactual);
}

let resId = getParameterByName('id', URLactual);

const getInfo = async() => {

    try {
        const request = await fetch(URL_API + resId[2]);
        const infoId = await request.json();

        let title = document.querySelector(".titulo").textContent = infoId.name;
        let card = document.querySelector(".contenedor");

        console.log(infoId);

        card.innerHTML =
            `<div class="personaje">
                <img src= ${infoId.image}>
                <div class="info">
                    <p class="nombre" id= ${infoId.id}>Nombre: ${ infoId.name }</p>
                    <p class="gender">Gender: ${infoId.gender}</p>
                    <p class="status"> ${infoId.status}</p>
                    <p class="location">Last known location:<br> ${infoId.location.name}</p>
                </div>
            </div>`;
    } catch (e) {
        console.log(e)
    }
}

getInfo();