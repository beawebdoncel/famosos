//...................................SERVIDOR..........................................
var express=require ('express');
var app=express();

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){ //cuando te pidan muestras la pagina
  res.sendFile(__dirname+'/index.html')
});

app.use(express.static('public')); //para q funcionen fotos

app.listen(3000,function(){
  console.log('servidor en marcha!');
});
//............
