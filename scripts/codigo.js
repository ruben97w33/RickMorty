const URL_API = "https://rickandmortyapi.com/api/character/";

const getInfo = async() => {

    try {

        const request = await fetch(URL_API);
        const allCharacter = await request.json()
        console.log(allCharacter);
        let cardInfo = document.querySelector(".container-character");

        for (const element of allCharacter.results) {
            cardInfo.innerHTML += `<div class ="personaje">
                <img src = ${element.image}>
                    <div class = "info">
                        <a href= "#" class="nombre" id = ${element.id}>${ element.name }</a>
                        <p class = "status"> ${element.status}</p>
                        <p class = "location">Last known location:<br> ${element.location.name}</p>
                    </div>
                </div>`
        }

        const selecionado = document.querySelectorAll(".nombre");

        for (let iterator of selecionado) {
            iterator.addEventListener("click", () => { open("index_2.html?rickandmortyapi.com/api/character/id=" + iterator.id) });
        }
    } catch (error) {
        console.log(error);
    }
}

getInfo();