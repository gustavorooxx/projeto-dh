const {Produto} = require('../database/models');

const IndexController = {
    show: async (req, res) => {

        //Móveis como produtos em alta
        const produtoEmAlta = await Produto.findAll({where:{ categoria_id: 1}})

        res.render('index', {usuario:req.session.usuario, produtosEmAlta: produtoEmAlta});
    },

    showProductsBanner: async (req, res) => {

        let {categoria_id} = req.params;

        const produtos = await Produto.findAll({where:{ categoria_id: categoria_id}})

        res.render("shop", {usuario:req.session.usuario, produtos: produtos})
    }

}

module.exports = IndexController;