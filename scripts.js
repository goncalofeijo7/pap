function getNavbar(){
    const nbar = document.getElementById(navbar)
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html

    })
    .catch(function(err){
        alert('Ocurreu um problema...')
    })
}