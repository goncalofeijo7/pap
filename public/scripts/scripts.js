function initForm() {
    renderNavbars();
    getFooter();
}

function renderNavbars(){
    if(localStorage.getItem("token")){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify()
        }

        fetch('http://localhost:3000/open/getAuth', options)
        .then((res) => {
            if(res.status===200){
                return res.json()
            }
            else{
                localStorage.removeItem("token");
                getNavbar();
                return null
            }
        })
        .then((res)=>{
            if(res){
            console.log(res);
            switch (res.level) {
                case 'regular':
                    getNavbarLogout();
                    break;
                case 'admin':
                    getNavbarLogout();
                    break;
            }
        }else return;
        })
        .catch((error) => console.log(error));
    }else{
        getNavbar();
    }
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

function getNavbarLogout() {
    const nbar = document.getElementById('nbarlo')
    fetch('http://localhost:3000/navbarLogout')
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
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsLagoa() {
    fetch('http://localhost:3000/cInfoLagoa')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsNordeste() {
    fetch('http://localhost:3000/cInfoNordeste')
        .then(res => res.json())
        .then(data => insertCardInfoNordeste(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsPovoacao() {
    fetch('http://localhost:3000/cInfoPovoacao')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsRibeiraGrande() {
    fetch('http://localhost:3000/cInfoRibeiraGrande')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsVFdoCampo(){
    fetch('http://localhost:3000/cInfoVFdoCampo')
        .then(res => res.json())
        .then(data => insertCardInfoResto(data))
        .catch(function(err) {
            alert('Ocorreu um problema...' + err)
        })
}

function insertCardsAtividadesTerra(){
    fetch('http://localhost:3000/cInfoAtividadesTerra')
    .then(res => res.json())
    .then(data => insertCardInfoAtividades(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}


function insertCardsAtividadesMar(){
    fetch('http://localhost:3000/cInfoAtividadesMar')
    .then(res => res.json())
    .then(data => insertCardInfoAtividades(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsAtividadesAr(){
    fetch('http://localhost:3000/cInfoAtividadesAr')
    .then(res => res.json())
    .then(data => insertCardInfoAtividades(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsCentrosdeInterpretacao(){
    fetch('http://localhost:3000/cInfoCentrosInterpretacao')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsMuseusCentros(){
    fetch('http://localhost:3000/cInfoMuseusCentros')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsJardinsParques(){
    fetch('http://localhost:3000/cInfoJardinsParques')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardsZonasBalneares(){
    fetch('http://localhost:3000/cInfoZonasBalneares')
    .then(res => res.json())
    .then(data => insertCardInfoResto(data))
    .catch(function(err){
        alert('Ocurreu um problema...' + err)
    })
}

function insertCardInfoNordeste(data) {
    const cardInfo = document.getElementById('cardInfosNordeste')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-md"> 
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

function insertCardInfoResto(data) {
    const cardInfo = document.getElementById('cardInfosResto')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-md-4"> 
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

function insertCardInfoAtividades(data) {
    const cardInfo = document.getElementById('cardInfosAtividades')
    cardInfo.innerHTML = ''
    try {
        for (let i = 0; i < data.length; i++) {
            let cardImage = data[i].cardImage
            let cardTitle = data[i].cardTitle
            let cardDescription = data[i].cardDescription
            cardInfo.innerHTML +=
                `<div class="col-md-3">
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
/*
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
*/
function logout(){
    localStorage.removeItem("token");
    location.replace("http://localhost:3000/");
}

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(document.getElementById("username").value != "" && document.getElementById("username").value != null 
        && document.getElementById("password").value != "" && document.getElementById("password").value != null){
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
              fetch("http://localhost:3000/login", options)
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
    }else {
        alert("Preencha os campos corretamente!");
        console.log('teste');
    }
  }

  function validaRegisto(){
    if(document.getElementById("username").value != "" && document.getElementById("username").value != null &&
       document.getElementById("email").value != "" && document.getElementById("email").value != null &&
       document.getElementById("password").value != "" && document.getElementById("password").value != null)
       return true;
    else
        alert("Preencha os campos de registo corretamente!");
        return false;
}

async function register(){

    if(validaRegisto()){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                level:"regular"
            })
        }
    
        await fetch('http://localhost:3000/register', options)
        .then((res) => {
            if(res.status == 200)
            location.reload();
            else{
               
                document.getElementById("username").value = ""
                document.getElementById("email").value = ""
                document.getElementById("password").value = ""
                document.getElementById("msgErro").style.display = "block" 
            }
          })
          .catch((error) => console.log(error));
          
    }      
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