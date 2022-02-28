const express = require('express')
const path = require('path');
const dotenv = require('dotenv');
const app = express()

dotenv.config({ path: './.env' });

const connection = require('./public/scripts/dbconnect.js');


app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})

app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, './public/footer.html'))
})

/*Rotas das Páginas dos Alojamentos*/

app.get('/alojamentospag1', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/alojamento.html'))
})

app.get('/alojamentospag2', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/alojamento_pag2.html'))
})

app.get('/alojamentospag3', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/alojamento_pag3.html'))
})

/*Rotas das Páginas das Regiões dos Alojamentos*/

app.get('/alojamentosLagoa', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/lagoa.html'))
})

app.get('/alojamentosNordeste', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/nordeste.html'))
})

app.get('/alojamentosPontaDelgada', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/ponta_delgada.html'))
})

app.get('/alojamentosRibeiraGrande', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/Alojamento/ribeira_grande.html'))
})

app.get('/alojamentosVilaFranca', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/vila_franca.html'))
})

app.get('/alojamentosPovoacao', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/vila_povoacao.html'))
})

/*Rotas das Páginas de Login e Register*/

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Conta/cadastro.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Conta/login.html'))
})

/*Rota da Página da História de São Miguel*/

app.get('/historiaSaoMiguel', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/historia.html'))
})

/*Rotas das Páginas dos Alojamentos na Lagoa*/

app.get('/CasasDoTermo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Lagoa/termo.html'))
})

app.get('/EpicenterSkyBar', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Lagoa/skybar.html'))
})

app.get('/QuintaSantaBarbara', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Lagoa/quinta.html'))
})

/*Rotas das Páginas dos Alojamentos em Nordeste*/

app.get('/PerolaAchadense', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Nordeste/perola.html'))
})

app.get('/CasaDoCampoAlgarvia', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Nordeste/casa_do_campo.html'))
})

/*Rotas das Páginas dos Alojamentos em Ponta Delgada*/

app.get('/HotelVip', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ponta Delgada/hotelvip.html'))
})

app.get('/ThomasPlace', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ponta Delgada/thomas.html'))
})

app.get('/AtlanticHomeAzores', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ponta Delgada/atlantic.html'))
})

/*Rotas das Páginas dos Alojamentos na Ribeira Grande*/

app.get('/AtlanticoApartments', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ribeira Grande/atlatico.html'))
})

app.get('/HotelVerdeMar', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ribeira Grande/hotelverde.html'))
})

app.get('/QuintaDoPastor', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ribeira Grande/quintapastor.html'))
})

/*Rotas das Páginas dos Alojamentos em Vila Franca*/

app.get('/CasaMarina', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Vila Franca/casamarina.html'))
})

app.get('/VivendaGlorize', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Vila Franca/vivenda.html'))
})

app.get('/BeijaMar', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Vila Franca/beijamar.html'))
})

/*Rotas das Páginas dos Alojamentos na Povoação*/

app.get('/CasaAuri', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/VilaPovoacao/casaauri.html'))
})

app.get('/QuintaDasPalmeiras', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/VilaPovoacao/quintapalmeiras.html'))
})

app.get('/ValeDosEncantos', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/VilaPovoacao/valeencantos.html'))
})

/*Rotas para as páginas das experiencias e atividades*/

app.get('/AtividadesNaTerra', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/experiencia_atividades.html'))
})

app.get('/AtividadesNoMar', (req, res) =>{
    res.sendFile(path.join(__dirname,'./public/Experiencia_Atividades/expriencia_mar.html'))
})

app.get('/AtividadesNoAr', (req, res) =>{
    res.sendFile(path.join(__dirname,'./public/Experiencia_Atividades/expriencia_ar.html'))
})

app.get('/Canoagem', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/canoagem.html'))
})

app.get('/Canyoning', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/canyoning.html'))
})

app.get('/Golf', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/golf.html'))
})

app.get('/Iatismo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/iatismo.html'))
})

app.get('/Mergulho', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/mergulho.html'))
})

app.get('/ObservacaoDeAves', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/observacao_aves.html'))
})

app.get('/ObservacaoDeCataceos', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/observacao_cataceos.html'))
})

app.get('/Parapente', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/parapente.html'))
})

app.get('/PasseiosDeCavalo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/passeiodecavalo.html'))
})

app.get('/PasseiosDeBicicleta', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/passeiosdebike.html'))
})

app.get('/Surf', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/surf.html'))
})

app.get('/Experiencias_Atividades/Trilhos', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/trilhos.html'))
})

app.get('/Wakeboard', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/wakeboard.html'))
})

/*Rota da Página da Equipa*/

app.get('/Equipa', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Equipa/team.html'))
})

/*Rotas das Páginas para visita e explora*/

app.get('/VisitaExploraPag1', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/visit_explor.html'))
})

app.get('/VisitaExploraPag2', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/visit_explor2.html'))
})

app.get('/CulturaDeAnanas', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/ananas.html'))
})

app.get('/JardimAnteroDeQuental', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/antero_quental.html'))
})

app.get('/JardimAntonioBorges', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/antonio_borges.html'))
})

app.get('/AuditorioDaUniversidade', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/auditorio.html'))
})

app.get('/CaldeiraVelha', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/caldeira.html'))
})

app.get('/CentrosDeInterpretacao', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/centros_interpretacao.html'))
})

app.get('/Expolab', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/expolab.html'))
})

app.get('/FabricaDoCha', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/fabrica.html'))
})

app.get('/JardinsEParques', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/jardins_parques.html'))
})

app.get('/MuseusECentros', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/museus_centros.html'))
})

app.get('/PocasSulDosMosteiros', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/pocos_mosteiros.html'))
})

app.get('/Visita_Explora/PraiaDeAguaDalto', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/praia_agua_dalto.html'))
})

app.get('/Visita_Explora/PraiaDoFogo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/praia_fogo.html'))
})

app.get('/Visita_Explora/TeatroMicaelense', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/teatro.html'))
})

app.get('/ParqueTerraNostra', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/terra_nostra.html'))
})

app.get('/ZonasBalneares', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/zona_balneare.html'))
})

/*Rota da informação da base de dados para os cards*/

app.get('/cInfoPontaDelgada', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 1;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

app.get('/cInfoLagoa', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 3;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

app.get('/cInfoNordeste', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 4;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

app.get('/cInfoPovoacao', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 5;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})


const port = 3000


app.listen(port, () => {
    console.log('Listenning...')
})