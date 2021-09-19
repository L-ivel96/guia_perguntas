const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');
const { Sequelize } = require("sequelize");

//Database
connection
    .authenticate()
    .then(() => {})
    .catch((msg) => {
        console.log(msg);
    });

//Setando no Express usar EJS como view
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

//Rotas

//Teste
app.get("/teste/:nome/:lang", function(req, res){
    
    let produtos =[
        {nome: "bombom", preco: 2.95},
        {nome: "casquinha", preco: 4.99},
        {nome: "dinda", preco: 9.90},
    ];
    
    let dados = {
        nome: req.params.nome,
        lang: req.params.lang,
        empresa: "Compart",
        inscritos: 1596,
        exibirMsg: false,
        produtos: produtos
    };

    //Por padrão "render" parte da pasta views
    res.render("index_teste", dados);
});

app.get("/", function(req, res){
    Pergunta.findAll({
        raw: true,
        order: [
            ['id', 'desc']
        ]
    }).then(perguntas => {
        //console.log(perguntas);
        res.render("index", {
            perguntas: perguntas
        });
    });
    
});

app.get("/pergunta/:id", function(req, res) {
    var id = req.params.id;
    Pergunta.findOne({
       where: {id: id} 
    }).then(pergunta => {
        Resposta.findAll({
            raw: true,
            where: {perguntaId: pergunta.id},
            order: [['id', 'DESC']]
            /* where: {
                perguntaId: {
                    [Sequelize.in]: [pergunta.id]
                }
            } */
        }).then(respostas => {
            if(pergunta != undefined) {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            }
            else {
                res.redirect("/");
            }
        });
    });
});

app.post("/responder", function(req, res) {
    var perguntaId = req.body.pergunta;
    var corpo = req.body.corpo;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    });
});

app.get("/perguntar", function(req, res) {

    res.render("perguntar");
});

app.post("/salvarPergunta", (req, res) => {
    /* Pacote utilizado pra receber os dados 
        //Terminal
        npm install body-parser --save
    */
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(8080, ()=> {
    console.log("App rodando!");
});