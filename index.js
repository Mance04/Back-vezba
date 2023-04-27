const ex=require("express");
const cors=require("cors");

const baza=require("./baza/baza");

const user=require("./funkcije/user");

const app=ex();
const PORT=8080;

app.use(cors());
app.use(ex.json());

app.listen(PORT,function(){
console.log("server slusa na portu:"+PORT+"\n");
})

baza();

app.get("/",function(req,res){
    res.send("Hello world!!");
})

app.get("/api/user", user.get);
app.post("/ap/user", user.post);