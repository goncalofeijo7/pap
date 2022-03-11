const express = require('express')
const path = require('path');
const dotenv = require('dotenv');
const app = express()
const authController = require('./controller/auth.controller')
const cors = require('cors');
app.use(cors());
const connection = require('./config/dbconnect.js');

app.options('*', cors());
app.use((req, res, callback) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Language, Location');
res.header('Access-Control-Expose-Headers', 'Authorization, Language, Location');
    return callback();
})

dotenv.config({ path: './.env' });

//interpreteção do formato json
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use('/login', require('./routes/user.route.js'))

app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})

app.get('/navbarlogout', (req, res) => {
    res.sendFile(path.join(__dirname, './public/navbar_logout.html'))
})

app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, './public/footer.html'))
})

/*Rotas das Páginas dos Alojamentos*/

app.get('/Alojamento/alojamentospag1', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/alojamento.html'))
})

app.get('/Alojamento/alojamentospag2', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/alojamento_pag2.html'))
})

app.get('/Alojamento/alojamentospag3', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/alojamento_pag3.html'))
})

/*Rotas das Páginas das Regiões dos Alojamentos*/

app.get('/Alojamento/alojamentosLagoa', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/lagoa.html'))
})

app.get('/Alojamento/alojamentosNordeste', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/nordeste.html'))
})

app.get('/Alojamento/alojamentosPontaDelgada', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/ponta_delgada.html'))
})

app.get('/Alojamento/alojamentosRibeiraGrande', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/Alojamento/ribeira_grande.html'))
})

app.get('/Alojamento/alojamentosVilaFranca', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/vila_franca.html'))
})

app.get('/Alojamento/alojamentosPovoacao', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/vila_povoacao.html'))
})

/*Rotas das Páginas de Login e Register*/

app.get('/Conta/Register', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Conta/cadastro.html'))
})


app.post('/page',authController.checkAuth,(req,res)=>{
    if(req.body.level==="admin")    
         res.redirect('/')
    else
         res.redirect('/')
})

/*Rota da Página da História de São Miguel*/

app.get('/historiaSaoMiguel', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/historia.html'))
})

/*Rotas das Páginas dos Alojamentos na Lagoa*/

app.get('/Lagoa/CasasDoTermo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Lagoa/termo.html'))
})

app.get('/Lagoa/EpicenterSkyBar', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Lagoa/skybar.html'))
})

app.get('/Lagoa/QuintaSantaBarbara', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Lagoa/quinta.html'))
})

/*Rotas das Páginas dos Alojamentos em Nordeste*/

app.get('/Nordeste/PerolaAchadense', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Nordeste/perola.html'))
})

app.get('/Nordeste/CasaDoCampoAlgarvia', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Nordeste/casa_do_campo.html'))
})

/*Rotas das Páginas dos Alojamentos em Ponta Delgada*/

app.get('/Ponta Delgada/HotelVip', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ponta Delgada/hotelvip.html'))
})

app.get('/Ponta Delgada/ThomasPlace', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ponta Delgada/thomas.html'))
})

app.get('/Ponta Delgada/AtlanticHomeAzores', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ponta Delgada/atlantic.html'))
})

/*Rotas das Páginas dos Alojamentos na Ribeira Grande*/

app.get('/Ribeira Grande/AtlanticoApartments', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ribeira Grande/atlatico.html'))
})

app.get('/Ribeira Grande/HotelVerdeMar', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ribeira Grande/hotelverde.html'))
})

app.get('/Ribeira Grande/QuintaDoPastor', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Ribeira Grande/quintapastor.html'))
})

/*Rotas das Páginas dos Alojamentos em Vila Franca*/

app.get('/Vila Franca/CasaMarina', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Vila Franca/casamarina.html'))
})

app.get('/Vila Franca/VivendaGlorize', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Vila Franca/vivenda.html'))
})

app.get('/Vila Franca/BeijaMar', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/Vila Franca/beijamar.html'))
})

/*Rotas das Páginas dos Alojamentos na Povoação*/

app.get('/VilaPovoacao/CasaAuri', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/VilaPovoacao/casaauri.html'))
})

app.get('/VilaPovoacao/QuintaDasPalmeiras', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/VilaPovoacao/quintapalmeiras.html'))
})

app.get('/VilaPovoacao/ValeDosEncantos', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Alojamento/Hoteis/VilaPovoacao/valeencantos.html'))
})

/*Rotas para as páginas das experiencias e atividades*/

app.get('/Experiencia_Atividades/AtividadesNaTerra', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/experiencia_atividades.html'))
})

app.get('/Experiencia_Atividades/AtividadesNoMar', (req, res) =>{
    res.sendFile(path.join(__dirname,'./public/Experiencia_Atividades/expriencia_mar.html'))
})

app.get('/Experiencia_Atividades/AtividadesNoAr', (req, res) =>{
    res.sendFile(path.join(__dirname,'./public/Experiencia_Atividades/expriencia_ar.html'))
})

app.get('/Experiencia_Atividades/Canoagem', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/canoagem.html'))
})

app.get('/Experiencia_Atividades/Canyoning', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/canyoning.html'))
})

app.get('/Experiencia_Atividades/Golf', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/golf.html'))
})

app.get('/Experiencia_Atividades/Iatismo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/iatismo.html'))
})

app.get('/Experiencia_Atividades/Mergulho', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/mergulho.html'))
})

app.get('/Experiencia_Atividades/ObservacaoDeAves', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/observacao_aves.html'))
})

app.get('/Experiencia_Atividades/ObservacaoDeCataceos', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/observacao_cataceos.html'))
})

app.get('/Experiencia_Atividades/Parapente', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/parapente.html'))
})

app.get('/Experiencia_Atividades/PasseiosDeCavalo', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/passeiodecavalo.html'))
})

app.get('/Experiencia_Atividades/PasseiosDeBicicleta', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/passeiosdebike.html'))
})

app.get('/Experiencia_Atividades/Surf', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/surf.html'))
})

app.get('/Experiencia_Atividades/Experiencias_Atividades/Trilhos', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/trilhos.html'))
})

app.get('/Experiencia_Atividades/Wakeboard', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Experiencia_Atividades/wakeboard.html'))
})

/*Rota da Página da Equipa*/

app.get('/Equipa/Equipa', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Equipa/team.html'))
})

/*Rotas das Páginas para visita e explora*/

app.get('/Visita_Explora/VisitaExploraPag1', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/visit_explor.html'))
})

app.get('/Visita_Explora/VisitaExploraPag2', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/visit_explor2.html'))
})

app.get('/Visita_Explora/CulturaDeAnanas', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/ananas.html'))
})

app.get('/Visita_Explora/JardimAnteroDeQuental', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/antero_quental.html'))
})

app.get('/Visita_Explora/JardimAntonioBorges', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/antonio_borges.html'))
})

app.get('/Visita_Explora/AuditorioDaUniversidade', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/auditorio.html'))
})

app.get('/Visita_Explora/CaldeiraVelha', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/caldeira.html'))
})

app.get('/Visita_Explora/CentrosDeInterpretacao', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/centros_interpretacao.html'))
})

app.get('/Visita_Explora/Expolab', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/expolab.html'))
})

app.get('/Visita_Explora/FabricaDoCha', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/fabrica.html'))
})

app.get('/Visita_Explora/JardinsEParques', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/jardins_parques.html'))
})

app.get('/Visita_Explora/MuseusECentros', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/museus_centros.html'))
})

app.get('/Visita_Explora/PocasSulDosMosteiros', (req, res) =>{
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

app.get('/Visita_Explora/ParqueTerraNostra', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/Visita_Explora/terra_nostra.html'))
})

app.get('/Visita_Explora/ZonasBalneares', (req, res) =>{
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

app.get('/cInfoRibeiraGrande', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 6;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

app.get('/cInfoVFdoCampo', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 7;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

app.get('/cInfoAtividadesTerra', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription FROM activity_cards WHERE activitiesID = 1;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})

/*
app.get('/navInfoPontaDelgada', function(req, resp) {
    connection.query('SELECT * FROM accomodation;', function(err, result){
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            resp.json(result)
        }  
    })
})
*/

const port = 3000


app.listen(port, () => {
    console.log('Listenning...')
})