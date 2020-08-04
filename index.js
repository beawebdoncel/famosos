
//variables



//si hay un cambio le cambias el atributo a la imagen
 $("select").on("change",function(){
   //defino variable
   var opcion=$(this).val();
   //cambiar la imagen

   //en caso de opcion 1 haz esto, si no...
    switch (opcion) {
      case "1":$("img").attr("src","enero.jpg");
        break;
      case "2":$("img").attr("src","febrero.jpg");
        break;
     case "3":$("img").attr("src","marzo.jpg");
       break;
     case "0":$("img").attr("src","icono.jpg");

       break;
    }

 });
