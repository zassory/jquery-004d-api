$(document).ready(function(){

    $("#error1").text("");
    $("#error2").text("");
    $("#resultado").text("");

    
    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;

    let largoInput = 0;

    const soloNumeros = /^\d+$/;

    $("#btnSumar").click(function(){
        
        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar un numero");
            $("#error1").css("color","red");
            return;
        }

        if(!soloNumeros.test(numero1)){
            $("#error1").text("Solo numeros");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe agregar el segundo numero");
            $("#error2").css("color","red");
            return;
        }

        if(!soloNumeros.test(numero2)){
            $("#error1").text("Solo numeros");
            $("#error1").css("color","red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","red");
        $("#resultado").css("fontSize","2rem");

        limpiar();
    })

    $("#btnEsconder").click(function(){

        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();

    });

    $("#btnMostrar").click(function(){

        $("#div1").show();
        $("#div2").show();
        $("#div3").show();

    });

    // $("#numero2").hide();
    // $("#numero1").keypress(function(){
    //     largoInput = $(this).val().length;
    //     if(largoInput > 5){
    //         $("#numero2").show();
    //     }
    // });
    

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    }
    
    

    $.get("https://digimon-api.vercel.app/api/digimon", function(data, status){        
        if(status === "success") {
            localStorage.setItem("digimones",JSON.stringify(data));
            //localStorage.setItem("digimon",data.json());
            // $.each(data, function(index, digimon){
            //     let digimonCard = `
            //         <div class='col-md-4 mb-3'>
            //             <div class='card'>
            //                 <img src="${digimon.img}" class='card-img-top' alt="${digimon.name}">
            //                 <div class='card-body'>
            //                     <h5 class='card-title'>${digimon.name}</h5>
            //                     <p class='card-text'>Tipo: ${digimon.level}</p>
            //                 </div>
            //             </div></div>`;
                        
            //     $("#digimon-list").append(digimonCard);
                
            // });
        } else {
            // $("#digimon-list").html("<p>Error al cargar los datos de la API</p>");
        }
    });



    
    


});


//let numero1 = document.getElementById("numero1");

// Swal.fire({
//     title: "Solo acepta números",
//     text: "Para realizar el calculo no acepta letras",
//     icon: "warning"
//   });