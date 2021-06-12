const mongoose=require ('mongoose')
var schema=mongoose.Schema
CommandeSchema=new schema ({

userId:{type:String,required:true},
ProductName:{type:String,required:true},
ProductPrice:{type:String,required:true},
UserPhone:{type:String,required:true},
UserEmail:{type:String,required:false},
Quantity:{type:Number,required:true},
UserAddress:{type:String,required:false,default:""},
PaymentMethod:{type:String,required:true},
livraison:{type:Boolean,required:true},
DateBuy: { type: Date, required: false ,default:new Date().toDateString()}
})


var Commande=mongoose.model('Commandes',CommandeSchema)
module.exports = Commande;
