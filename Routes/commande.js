const Commande = require('../Models/CommandeModel');
const Product = require('../Models/productModel');
const auth = require('../VTOKEN');
const router = require('express').Router();

//buy new product

router.post('/newCommande', auth, async(req, res) => {
    await Product.findOne({ _id: req.body.productID }, (err, data) => {

        if (err) {
            console.log(err)
        }
        if (data == null) {
            res.send({ message: "Something Went Wrong. Try Again" })
        } else {
            let newQtn = data.Quantity - req.body.Quantity //new quantity
            Product.findOneAndUpdate({ _id: data._id }, { Quantity: newQtn }, function(err, result) {})
            let newcommande = new Commande({...req.body })
            newcommande.save()
            res.send({ msg: "success", data: newcommande })
        }
    })
})


//user orders de commande by userID
router.get('/myOrders/:id', auth, (req, res) => {
    let id = req.params.id
    Commande.find({ userId: id }, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.send(data)
    })
})



//all orders by admin
router.get('/allOrders', auth, (req, res) => {
    if (req.user.IsAdmin == true) {
        Commande.find({}, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.send(data)
        })
    }

})



module.exports = router;