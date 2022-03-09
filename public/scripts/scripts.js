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

function insertCardsPontaDelgada() {
    fetch('http://localhost:3000/cInfoPontaDelgada')
        .then(res => res.json())
        .then(data => insertCardInfo(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsLagoa() {
    fetch('http://localhost:3000/cInfoLagoa')
        .then(res => res.json())
        .then(data => insertCardInfo(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsNordeste() {
    fetch('http://localhost:3000/cInfoNordeste')
        .then(res => res.json())
        .then(data => insertCardInfo(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsPovoacao() {
    fetch('http://localhost:3000/cInfoPovoacao')
        .then(res => res.json())
        .then(data => insertCardInfo(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsRibeiraGrande() {
    fetch('http://localhost:3000/cInfoRibeiraGrande')
        .then(res => res.json())
        .then(data => insertCardInfo(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsVFdoCampo() {
    fetch('http://localhost:3000/cInfoVFdoCampo')
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
                        <p style="text-align: center;">${cardDescription}</p>
                        <div class="d-flex justify-content-center">
                        </div>
                </div>`
        }
    } catch (e) {

    }
}

function insertNavbarInfoPontaDelgada() {
    fetch('http://localhost:3000/navInfoPontaDelgada')
        .then(resp => resp.json())
        .then(data => insertNavbarInfos(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertNavbarInfos(data){
    console.log(data)
    const navInfo = document.getElementById('navInfos')
    try{
        console.log('a')
        for(let a = 0; a < data.length; a++){
            let aR = data[a].accomodationRegion
            navInfo.innerHTML +=
                            `<a class="dropdown-item" href="/Alojamento/ponta_delgada.html">${aR}</a>`
                            
        }
    } catch (e) {
                
    }
}

function logout() {
    localStorage.removeItem("token", "");
    localStorage.removeItem("level", "");
    fetch("http://localhost:3000")
      .then((res) => {
        console.log(res);
        window.location.replace(res.url);
      })
      .catch((error) => console.log(error));
  }
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let loginObj = {
      username: username,
      password: password,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginObj),
    };
    fetch("http://localhost:3000/Conta/login", options)
      .then((res) => {
        if(res.status===406){
          alert(res.json().msg)
          return
        }       
        let token = res.headers.get("Authorization");
        localStorage.setItem("token", token);
        return res.json();
      })
      .then((data) => {
        getPage(data)
      })
      .catch((error) => console.log(error));
  }

  function getPage(data){
    localStorage.setItem("level", data.level); 
    const obj = {
        level: localStorage.getItem('level')
    }
    let options = {
        method:"POST",
        headers: {
            'Content-type': "application/json",
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    };
    fetch("http://localhost:3000/page", options)
      .then((res) => {
        console.log(res);
        window.location.replace(res.url);
      })
      .catch((error) => console.log(error));
}