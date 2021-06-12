const Product = require('../Models/productModel');
const User = require('../Models/UserModel');
const auth = require('../VTOKEN');
const router = require('express').Router();

//  add new product
router.post('/addProduct', auth, (req, res) => {
    if (req.user.IsAdmin == true) {
        let product = new Product({...req.body })
        product.save()
        res.send({ msg: "success", data: product })
    } else {
        res.send({ message: "This is an administrator's secure route, verify your information and try again " })
    }

})



//get all products{} ay product
router.get('/allProducts', auth, (req, res) => {
    Product.find({}, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.send(data)
    })
})


//Get Product by ID
router.get('/allProducts/:id', auth, (req, res) => {
    let id = req.params.id
    Product.findOne({ _id: id }, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.send(data)
    })
})


//get admin products by AdminID

router.get('/allProductslist/:adminId', auth, (req, res) => {
    if (req.user.IsAdmin == true) {
        let adminId = req.params.adminId
        Product.find({ userId: adminId }, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.send(data)
        })
    } else {
        res.send({ message: "This is an administrator's secure route, verify your information and try again " })
    }

})

//Edit Product By ID
router.put('/edit/product/:id', auth, async(req, res) => {
        if (req.req.user.IsAdmin == true) {
            let id = req.params.id
            await Product.findOneAndUpdate({ _id: id }, {...req.body }, function(err, result) {
                if (err) console.log(err)
            })
            Product.find({}, (err, data) => {
                res.send(data)
            })

        }
    })
    //delete product


router.delete("/verif/database", (req, res) => {

    product.deleteOne({ verifiedEmail: false }, (err, data) => {
        if (err) console.log(err)
        else {
            res.send("deleted")
        }
    })
})
module.exports = router;