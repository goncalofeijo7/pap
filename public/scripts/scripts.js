function initForm() {
    getNavbar();
    getFooter();
}

function getNavbar() {
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
        .then(res => res.text())
        .then((html) => {
            nbar.innerHTML += html
        })
        .catch(function(err) {
            alert('Ocorreu um problema...')
        })
}

function getFooter() {
    const foot = document.getElementById('foot')
    fetch('http://localhost:3000/footer')
        .then(res => res.text())
        .then((html) => {
            foot.innerHTML += html
        })
        .catch(function(err) {
            alert('Ocorreu um problema...')
        })
}

function insertCards() {
    fetch('http://localhost:3000/cInfo')
        .then(res => res.json())
        .then(data => insertCardInfo(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardInfo(data) {
    const cardInfo = document.getElementById('cardInfos')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < 3; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML += `<div class="card">
                                        <img class="card-img-top" src=${cardImage} style="width:auto; height: 180px; object-fit: cover;">
                                        <h2>${cardTitle}</h2>
                                        <p>${cardDescription}</p>
                                        <div class="d-flex justify-content-center">
                                            <a target="_blank" href="/Alojamento/Hoteis/Ponta Delgada/hotelvip.html"><button>Reserve já!</button></a></div>
                                    </div>`

        }
    } catch (e) {

    }
}