const {Produto} = require('../database/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const {gt, lte, ne, in: opIn} = Sequelize.Op;

const ShopController = {
    show: async (req, res) => {
    //Todos os produtos
        const produtos = await Produto.findAll()
    // Produtos por cor
        const preto = await Produto.findAll({where: {cor_id:1}})
        const amarelo = await Produto.findAll({where: {cor_id:2}})
        const bege = await Produto.findAll({where: {cor_id:3}})
        const azul = await Produto.findAll({where: {cor_id:4}})
        const vermelho = await Produto.findAll({where: {cor_id:5}})
        const branco = await Produto.findAll({where: {cor_id:6}})
        
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
        });
        
    },

    showProduct: async (req, res) => {

        let { id } = req.params;
        
        const produto = await Produto.findOne({where:{id:id}})

        res.render("produto" , {usuario:req.session.usuario, produto: produto})
    },

    colorFilters: async(req, res) => {
        const {cor_id} = req.params;

        //produtos por cor
        const produtos = await Produto.findAll({where:{cor_id: cor_id}})
        //quantidade de produtos por cor
        const preto = await Produto.findAll({where: {cor_id:1}})
        const amarelo = await Produto.findAll({where: {cor_id:2}})
        const bege = await Produto.findAll({where: {cor_id:3}})
        const azul = await Produto.findAll({where: {cor_id:4}})
        const vermelho = await Produto.findAll({where: {cor_id:5}})
        const branco = await Produto.findAll({where: {cor_id:6}})
 

        res.render("shop" , {
            usuario:req.session.usuario, 
            produtos: produtos, 
            preto: preto,
            amarelo: amarelo,
            bege:bege,
            azul: azul,
            vermelho: vermelho,
            branco: branco,
            cor_id: cor_id
           
        })

        console.log(cor_id)


    },

    priceFilter: async (req, res) => {
        var {maxPrice, minPrice} = req.query

        //quantidade de produtos por cor
        const preto = await Produto.findAll({where: {cor_id:1}})
        const amarelo = await Produto.findAll({where: {cor_id:2}})
        const bege = await Produto.findAll({where: {cor_id:3}})
        const azul = await Produto.findAll({where: {cor_id:4}})
        const vermelho = await Produto.findAll({where: {cor_id:5}})
        const branco = await Produto.findAll({where: {cor_id:6}})
       
        //filtro de preço
        const produtos = await Produto.findAll({
            where: {
                preco: {
                    [gt]: minPrice,
                    [lte]: maxPrice
                },
            }
        })

        console.log(produtos)
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

module.exports = ShopController;