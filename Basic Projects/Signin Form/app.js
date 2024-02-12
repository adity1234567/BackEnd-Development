const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const path=require("path");
require("./db/conn");
const hbs=require("hbs");

//public src...
const static_path=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
  //  res.send("hello from me!!");
  res.render("index");
});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
