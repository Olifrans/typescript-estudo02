/* Código simples, apenas para fornecer o serviço para a aplicação */
var api = {}

api.dados = function(req, res) {

    res.json([
        { montante: 200.5, vezes: 2 },
        { montante: 250.1, vezes: 3 },
        { montante: 585.5, vezes: 58 },
        { montante: 400.5, vezes: 28 },
        { montante: 100.2, vezes: 5 },
        { montante: 50.5, vezes: 1 },
        { montante: 70.5, vezes: 2 }
    ]);    
};

module.exports = api;