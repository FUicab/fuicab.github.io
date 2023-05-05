$( document ).ready(function(){
    var typingMemory = "";
    var typingList = [];
    $('#animated-typing span').each(function(e){
        var $this = $(this);
        typingMemory = $this.html();
        $this.html('');
        typingList = typingMemory.trim().split(/(<.*?>)|((?![\n\t])[\w\S ])/g).filter( i => (i && i!=='\n') );
        var htmlSubTag = "";
        typingList.forEach((char, i) => {
            var typingTime = (i+1)*50;
            if(/^(<.*?>)$/.exec(char)){
                typingTime -= 49;
                if((/(<br>)/g).exec(char) || (/(<\/)/g).exec(char)){
                    htmlSubTag = "";
                } else {
                    htmlSubTag = char.replace(/(<)|(>)/g,'');
                }
            }
            if(htmlSubTag && !/^(<.*?>)$/.exec(char)){
                char = `<${htmlSubTag}>${char}</${htmlSubTag}>`;
            }
            setTimeout(() => {
                $this.html($this.html() + char );
            }, typingTime + 50);
        });
    });
});