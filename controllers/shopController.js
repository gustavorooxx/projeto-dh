const {Produto} = require('../database/models');

const ShopController = {
    show: async (req, res) => {

        const produtos = await Produto.findAll()
        
        res.render('shop', {usuario:req.session.usuario, produtos: produtos});
        
    },

    showProduct: async (req, res) => {

        let { id } = req.params;
        
        let produto = await Produto.findOne({where:{id:id}})

        res.render("produto" , {usuario:req.session.usuario, produto:produto})
    }

}

module.exports = ShopController;