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
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-sm">
                    <div class="card" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;">
                        <img class="card-img-top" src="${cardImage}" style="width:auto; height: 180px; object-fit: cover; ">
                        <h2>${cardTitle}</h2>
                        <p>${cardDescription}</p>
                        <div class="d-flex justify-content-center">
                            <a target="_blank" href="/Alojamento/Hoteis/Ponta Delgada/hotelvip.html"><button style="position: absolute; left: 90px; top: 450px;">Reserve já!</button></a></div>
                        </div>
                </div>`
        }
    } catch (e) {

    }
}