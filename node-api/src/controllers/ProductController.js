const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //ele me traz dez valores, as primeiras chaves dizem respeito a condições que eu poderia aplicar 

        //desestruturacao, pegando o argumento page na rota
        const { page = 1 } = req.query;
        
        //aqui eu estou passandp somente o atributo page, pois ele entende que a variavel page corresponde a ele 
        const products = await Product.paginate({}, {page, limimit: 10});

        return res.json(products);
    },

    async show(req, res){
        //Criação
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        //Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        //pego pelo id e atualizo pelo body
        //new : true -> estou dizendo ao moongose para ele retornar o valore atualizado para a minha variavel
    // se eu não passar esse valor ele me traz o valor antigo do banco      
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
    // não preciso retornar o produto, pois estou apagando ele  
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },
};


