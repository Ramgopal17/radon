const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    
	
	userId:
        {
        type:ObjectId,
        ref: "User"
        },

	 productId: {
        type:ObjectId,
        ref: "Product"
    },
	amount: Number,
	
	date:{
		type: Date,
        default: Date.now},
        isFreeAppUser: {type:Boolean, Default: false}
	
  
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
