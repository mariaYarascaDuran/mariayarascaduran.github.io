
    var mssjI = document.querySelector("#textarea"); 
 
    /*Botones de la pagina*/
    var botonfencriptar = document.querySelector("#fencriptar"); 
    var botonfdesencriptar = document.querySelector("#fdesencriptar"); 
    var botoncopiar = document.querySelector("#copiartxt"); 
    var mssjF = document.querySelector("#txtresult"); 
     /*INICIO DE ENCRIPTAR Y DESENCRIPTAR*/
 
 
     /*ENCRIPTAR O CODIFICAR*/
 
     function mssgInicioencriptar (txt){
         if(txt=="a")
         {
         txt="ia";
         return txt;
         }
         else if(txt=="e"){
             txt="enter";
             return txt;
         }
         else if(txt=="i"){
             txt="imes";
             return txt;
         } 
         else if (txt == "o") {
             txt = "ober";
             return txt;
         } 
         else if (txt == "u") {
             txt = "ufat";
             return txt;
         }
     }
 
 
     function fencriptar(txt){
         var mssjIEncriptado = txt.replace(/a|e|i|o|u/g,mssgInicioencriptar); 
         let noneEncontrado = document.getElementById('contenido_desencriptar');
         let mensajeF = document.getElementById('txtresult');
         let copiartxt = document.getElementById('copiartxt');
         let enter = document.getElementById('fencriptar');
         noneEncontrado.style.display = "none";
         mensajeF.style.display = 'flex';
         copiartxt.style.display = 'block';
         return mssjIEncriptado;
     }
 
    
     
 
    /*DESENCRIPTAR O DECODIFICAR*/
 
     function mssgInicialdesencriptar(txt){
         if(txt=="ia"){
             txt="a";
             return txt;
         }else if(txt=="enter"){
             txt="e";
             return txt;
         }else if(txt=="imes"){
             txt="i";
             return txt;
         }else if(txt=="ober"){
             txt="o";
             return txt;
         }else if(txt=="ufat"){
             txt="u";
             return txt;
         }
     }
 
     function fdesencriptar(txt){
         var mssjIDesencriptado = txt.replace(/ia|enter|imes|ober|ufat/g,mssgInicialdesencriptar);
         return mssjIDesencriptado;
     }
 
     botonfencriptar.addEventListener("click", function(event){
         event.preventDefault();
         var txt = mssjI.value;
         var msjSeguro = fencriptar(txt);
         mssjF.value = msjSeguro;
         console.log(msjSeguro);
        
     });
 
     botonfdesencriptar.addEventListener("click", function(event){
         event.preventDefault();
         var txt = mssjI.value;
         var msjSeguro = fdesencriptar(txt);
         mssjF.value = msjSeguro;
         console.log(msjSeguro);
          
     });
 
     /*COPIAR EL TEXTO O MENSAJE FINAL PARA CODIFICAR*/
 
     botoncopiar.addEventListener("click", function(event){
         event.preventDefault();
         mssjF.select();
         navigator.clipboard.writeText(mssjF.value);
     });