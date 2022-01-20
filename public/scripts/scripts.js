function initForm(){
    getNavbar();
    getFooter();
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getFooter(){
    const foot = document.getElementById('foot')
    fetch('http://localhost:3000/footer')
    .then(res => res.text())
    .then((html)=>{
        foot.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}