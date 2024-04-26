$(document).ready(function(){

    $.get("https://digimon-api.vercel.app/api/digimon", function(data, status){
        if(status === "success") {
            $.each(data, function(index, digimon){
                let digimonCard = `
                    <div class='col-md-4 mb-3'>
                        <div class='card'>
                            <img src="${digimon.img}" class='card-img-top' alt="${digimon.name}">
                            <div class='card-body'>
                                <h5 class='card-title'>${digimon.name}</h5>
                                <p class='card-text'>Tipo: ${digimon.level}</p>
                            </div>
                        </div></div>`;
                        
                $("#digimon-list").append(digimonCard);
            });
        } else {
            $("#digimon-list").html("<p>Error al cargar los datos de la API</p>");
        }
    });
})
