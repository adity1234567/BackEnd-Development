const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/learnMongo",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connection successful..."))
.catch((err)=> console.log(err));


/**schema
-----------
define the structure of the document
default values,validators etc..
**/

const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype: String,
    videos: Number,
    author: String,
    active:Boolean,
    date: {
        type:Date,
        default:Date.now
    }
})


/**
 mongoose model is a wrapper on the mongoose schema.
 mongoose schema defines the structure of the doc,value,validators etc
 whereas a mongoose model  provides an interface to the database
 for creating,querying,updating,deleting records etc..
 */

const Playlist = new mongoose.model("Playlist",playlistSchema);

const createDocument=async()=>{
try{
const reactPlaylist = new Playlist({
    name:"React JS",
    ctype:"Front End",
    videos: 45,
    author:"thapa",
    active:true
})

const nodePlaylist = new Playlist({
    name:"NODE JS",
    ctype:"Back End",
    videos: 5,
    author:"thapa",
    active:true
})

const databasePlaylist = new Playlist({
    name:"Database",
    ctype:"Front End",
    videos: 40,
    author:"thapa",
    active:true
})

const expressPlaylist = new Playlist({
    name:"Express JS",
    ctype:"Front End",
    videos: 76,
    author:"thapa",
    active:true
})

const jsPlaylist = new Playlist({
    name:"JS",
    ctype:"Full Stack",
    videos: 5,
    author:"thapa",
    active:true
})

const result=await Playlist.insertMany([jsPlaylist,expressPlaylist,reactPlaylist,nodePlaylist,databasePlaylist]);
console.log(result);
}catch(err)
{
   console.log(err);
}
}


//createDocument();


//to read document


const getDocument =async()=>{
    try {
        const result=await Playlist.find({ctype: "Front End"})
        .select({name:1})
        .limit(1);
        
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
   
}

getDocument();