const mongoose =require('mongoose');
const reservationModels= mongoose.Schema({
    Date:{
        type:Date,
  

    },
    place:{
        type:String,
  

    },
  
    prix:{
        type:Int,
  

    }
}

);
module.exports=mongoose.model('reservation',reservationModels)