

//https://pokeapi.co/api/v2/pokemon/1
let myPromises = [];
for(i = 0; i<10; i++){

    let something = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(function(httpResponse){
            console.log(httpResponse);
            return httpResponse.json();
        })
        .then(function(pokeData){
            let name = pokeData.name;

            let img_url = pokeData.sprites.front_shiny;
            console.log("our pokeData", pokeData)
            console.log(img_url);

            const image = document.createElement("img")
            image.src = img_url
            const bulbasaurName = document.createElement("span");
            bulbasaurName.textContent = name;
            document.getElementById('pokemon-container').appendChild(bulbasaurName);
            document.getElementById('pokemon-container').append(image);
            return pokeData;
        })
    myPromises.push(something);
}

Promise.all(myPromises)
    .then()


    console.log("logging something", something); 