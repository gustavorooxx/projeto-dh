const {Produto} = require('../database/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const IndexController = {
    show: async (req, res) => {

        //Pordutos da categoria "móveis" como produtos em alta
        const produtoEmAlta = await Produto.findAll({where:{ categoria_id: 1}})

        res.render('index', {usuario:req.session.usuario, produtosEmAlta: produtoEmAlta});
    },

    showProductsBanner: async (req, res) => {

        let {categoria_id} = req.params;

        const produtos = await Produto.findAll({where:{ categoria_id: categoria_id}})

        const preto = await Produto.findAll({where: {cor_id:1}})
        const amarelo = await Produto.findAll({where: {cor_id:2}})
        const bege = await Produto.findAll({where: {cor_id:3}})
        const azul = await Produto.findAll({where: {cor_id:4}})
        const vermelho = await Produto.findAll({where: {cor_id:5}})
        const branco = await Produto.findAll({where: {cor_id:6}})


        res.render("shop", {
            usuario:req.session.usuario, 
            produtos: produtos,
            preto: preto,
            amarelo: amarelo,
            bege:bege,
            azul: azul,
            vermelho: vermelho,
            branco: branco,
            cor_id: null
            
        })
    },

    busca: async (req, res) => {
        //cores
        const preto = await Produto.findAll({where: {cor_id:1}})
        const amarelo = await Produto.findAll({where: {cor_id:2}})
        const bege = await Produto.findAll({where: {cor_id:3}})
        const azul = await Produto.findAll({where: {cor_id:4}})
        const vermelho = await Produto.findAll({where: {cor_id:5}})
        const branco = await Produto.findAll({where: {cor_id:6}})

        //Guardar a string buscada em uma variavel searh
        var {search} = req.query;

        //Pesquisa com operador
        const produtos = await Produto.findAll({
            where: {
                nome:{
                    [Op.like]: `%${search}%`
                }
            }    
            })
        
       
        // Renderização
        res.render('shop', {
            usuario:req.session.usuario, 
            produtos: produtos,
            preto: preto,
            amarelo: amarelo,
            bege:bege,
            azul: azul,
            vermelho: vermelho,
            branco: branco,
            cor_id: null
            
        })

      
    }

}

module.exports = IndexController;