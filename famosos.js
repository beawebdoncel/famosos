//...................................SERVIDOR..........................................
var express=require ('express');
var app=express();

var bodyParser=require('body-parser'); //siempre q haya formulario
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){ //cuando te pidan muestras la pagina
  res.sendFile(__dirname+'/index.html');
});

app.use(express.static('public')); //para q funcionen fotos

app.listen(3000,function(){
  console.log('servidor en marcha!');
});
//............posteo o BOTON ENVIAR

app.post("/",function(req,res){
  res.setHeader("Content-Type","text/html;charset=utf-8")
  //recogemos los valores q envía el FORMULARIO
  var nombre=req.body.nombre;
  var mes=Number(req.body.mes); //como vamos hacer una resta 2020-edad usuario, necesitamos numeros
  var anio=Number(req.body.anio);
/*array con los nombres de los famosos*/
  var nombres=["Bruce Willys","Jennifer Aniston","Lady Gaga"];
  var nombreFamoso=nombres[mes];

  /*calculo edad*/
  var edad= 2020-anio;
  /*con send envio una linea, con write envio varias*/
  res.write("<h1>Felicidades "+nombre+"!! Naciste el mismo mes que "+nombreFamoso+".</h1>");
  res.write("<h2>Este año cumplirás "+edad+" años.</h2>");
  res.send(); //para enviar todos los write de golpe

})
