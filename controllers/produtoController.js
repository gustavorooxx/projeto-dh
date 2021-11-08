const ProductController = {
    show: (req, res) => {
        res.render('produto', {usuario:req.session.usuario});
    }
}

module.exports = ProductController;