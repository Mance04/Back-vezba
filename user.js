let mg=require("mongoose");

let UserChema=new mg.Schema({
    ime:{
        type:String,
        require:true,
        trim:true
    },
    prezime:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    sifra:{
        type:String,
        require:true,
        trim:true
    }
})

module.exports=mg.model("user",UserChema);