$( document ).ready(function(){
    var template = "";
    $.getJSON("portfolio-items.json", function( data ) {
        $.each( data, function( key, item ) {
            
            let skillset = "";
            item.skillset.forEach((skill) => {
                let skillType = skill.type===1 ? "second" : skill.type===2 ? "third" : "";
                skillset += `<span class="chip ${skillType}">${skill.name}</span>`;
            });

            template += `<div class="portfolio-item">
                <div class="left-col">
                    <img src="img/shark.jpg" alt="">
                </div>
                <div class="right-col">
                    <h2>${item.title}</h2>
                    <p class="description">${item.description}</p>
                    <div class="skillset">
                        ${skillset}
                    </div>
                </div>
            </div>`;
            console.log(item);

        });
        $('#portfolio-gallery').html(template);
    });
});