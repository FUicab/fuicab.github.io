$( document ).ready(function(){
    var template = `<div class="portfolio-item">
        <div class="left-col">
            <img src="img/shark.jpg" alt="">
        </div>
        <div class="right-col">
            <h2>Portfolio sampleee</h2>
            <p class="description">Portfolio items would look like this but with actual meaningful information.<br>
                If I had words to make a day for you.
                I'll sing you all morning, golden and new. I would make this day last for all time, and give you a night deep in moonshine.
            </p>
            <div class="skillset">
                <span class="chip">HTML</span>
                <span class="chip">CSS</span>
                <span class="chip">Javascript</span>
            </div>
        </div>
    </div>`;
    $.getJSON("portfolio-items.json", function( data ) {
        $.each( data, function( key, item ) {
            console.log(item);
        });
    });
    $('#portfolio-gallery').html(template);
});