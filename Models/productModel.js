const mongoose=require ('mongoose')
var schema=mongoose.Schema
ProductSchema=new schema ({

userId:{type:String,required:true},
ProductName:{type:String,required:true},
ProductPrice:{type:String,required:true},
Quantity:{type:Number,required:true},
ProductPhoto:{type:String,required:false,default:""},
ProductDescription:{type:String,required:true},
DateAdd: { type: Date, required: false ,default:new Date().toDateString()}
})


var Product=mongoose.model('Products',ProductSchema)
module.exports = Product;
