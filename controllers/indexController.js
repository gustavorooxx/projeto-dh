const IndexController = {
    show: (req, res) => {

        res.render('index', {usuario:req.session.usuario});
    }
}

module.exports = IndexController;