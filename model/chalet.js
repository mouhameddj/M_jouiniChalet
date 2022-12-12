const mongoose =require('mongoose');
const ChaletModels= mongoose.Schema({
    Nom:{
        type:String,
  

    },

Surface_chalet:{
    type:Float32Array,


},
place:{
        type:String,
  

    }
}

  
  


);
module.exports=mongoose.model('chalet',ChaletModels)