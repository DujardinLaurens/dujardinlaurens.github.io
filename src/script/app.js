(function() {

    //dom volledig klaar
    document.addEventListener("DOMContentLoaded", init);
    function init () {
        api.get('https://rickandmortyapi.com/api/character/').then(function(response){
            console.info(response);
            console.info(response.results.length);
            console.info(typeof(response.results.length));
            let length = response.results.length;
            let characterArray = [];
            for(let i = 0; i < length ; i++){
                let c = new Character(
                  response.results[i].id,
                  response.results[i].name,
                  response.results[i].status,
                  response.results[i].species,
                  response.results[i].gender,
                  response.results[i].image,
                  response.results[i].origin.name
                );
                characterArray.push(c);
            }
            renderHtml(characterArray);
        });
        //GenerateRandomQuote();
        //timeOutFunction();
        //searchExactAmountOfQuotes();
    }

    function renderHtml(characters){
        let bobTheHTMLBuilder = ``;
        for(let i = 0, l = characters.length; i < l; i++){
            bobTheHTMLBuilder +=
            `<div class="characters">
                <div class="characters__name">${characters[i].name}</div>
                <div class="characters__image"><img src="${characters[i].image}"></div>
                <div class="characters__id">id: ${characters[i].id}</div>
                <div class="characters__status">status: ${characters[i].status}</div>
                <div class="characters__species">species: ${characters[i].species}</div>
                <div class="characters__gender">gender: ${characters[i].gender}</div>
            </div>`
            ;
        }

        document.querySelector(".c-character-box").innerHTML = bobTheHTMLBuilder;
    }

    /*function GenerateRandomQuote(){
        let randomQuote = document.querySelector(".quote-of-the-day-button");

        randomQuote.addEventListener("click", function() {
            api.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1').then(function(response){
                console.info(response);
                let quoteArray = [];
                for(let i = 0, l = response.length; i < l; i++){
                    let q = new Quote(
                        response[i].title,
                        response[i].content,
                    );

                    quoteArray.push(q);
                }
                renderHtml(quoteArray);
            });
        });
    };*/

})();

(function(){
    "use strict";

    var scrollDuration = 300;
    var leftPaddle = document.getElementsByClassName('left-paddle');
    var rightPaddle = document.getElementsByClassName('right-paddle');

})();