function sacaCodigosDeNumeros(textoCC){
  var arrayMadre = [];
  for(var i = 0; i < textoCC.length; i++){

    var codigoLetra = textoCC.charCodeAt(i);
    if(codigoLetra >= 97 && codigoLetra <= 122){

      codigoLetra = codigoLetra - 32;
    }
    if(codigoLetra == 209 || codigoLetra == 241){

      arrayMadre.push(15);
    }
    if(codigoLetra == 32){
      arrayMadre.push(32);
    }else{
      if(codigoLetra-64 < 15){

        arrayMadre.push(codigoLetra-64);
        
      }else if(codigoLetra-64 >= 15 && codigoLetra-64 < 28){

         arrayMadre.push(codigoLetra-63);
      }
    }
  }
  return arrayMadre;
}
function Cifrador(CODES){
  var textoCifrar = document.getElementById('texto').value;
  var Contr = document.getElementById('contra').value;
  var codigosLetras = [];
  if(textoCifrar.length < 1 || Contr.length < 1){

    alert("La frase o la contraseña estan vacias")
    return;
  
  }


  var arrayContra = sacaCodigosDeNumeros(Contr);

  var arrayFrase = sacaCodigosDeNumeros(textoCifrar);

  var EspContador = 0;

  if (CODES == true){
    for(var i = 0; i < arrayFrase.length; i++){

      if(arrayFrase[i] == 32){


        codigosLetras.push(32);
        EspContador += 1;
      }else{
        codigosLetras.push((arrayContra[(i - EspContador) % arrayContra.length] + arrayFrase[i]) % 27);


      }
    }
  }else{
    for(var i = 0; i < arrayFrase.length; i++){

      if(arrayFrase[i] == 32){
        codigosLetras.push(32);

        EspContador += 1;
      }else{
        var Value = arrayFrase[i] - arrayContra[(i - EspContador) % arrayContra.length];
        if (Value < 1){
          Value += 27;


        }
        codigosLetras.push(Value % 27);
      }


    }
  }
  return codigosLetras;
}


function CreaCadena(FinalArray){
  var salida = ""
  for(var i = 0; i < FinalArray.length; i++){

    if (FinalArray[i] == 15 ){

      salida += String.fromCharCode(209);
    }if (FinalArray[i] == 32){

      salida += String.fromCharCode(32);
    }
    if (FinalArray[i] == 0){
      salida += String.fromCharCode(90);
    }
    if(FinalArray[i] < 15 && FinalArray [i] > 0)

      salida += String.fromCharCode(FinalArray[i]+64);
    else if(FinalArray[i] > 15 && FinalArray[i] < 28){

      salida += String.fromCharCode(FinalArray[i]+63);
    }
  }
  document.getElementById('textoC').value = salida;
}