function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function showElement(element, index, area){
    
        if((index+1)>element.length){
            var audioElement = audio.play();
            if (audioElement !== undefined) {
                audioElement.then(() => {
                  //audio executado
                }).catch(error => {
                  console.log('Erro na politica do navegador:' + error.name);
                });
            }
            $('.controls').fadeIn();
            return false;
        }

        var keyArea = ($(window).width() < 768)?  'top' : 'bottom';
        var Xposition = parseInt(getRandom(30, 70));
        element.eq(index).attr('style', '');
        element.eq(index).css({ [keyArea] : '0', 'left' : Xposition+"%" });
    
        element.eq(index).animate({
            opacity: 1,
            [keyArea] : "10%",
        }, 400, 'linear').animate({
            [keyArea] : "90%",
        }, 2200, 'linear').animate({
            opacity: 0,
            [keyArea] : "100%",
        }, 400, 'linear', function(){
            element.eq(index).css({ [keyArea] : '0', 'left' : '0' });
            setTimeout(function(){ showElement(element, index+1); }, 2000);            
        });
    

}

function playAnimation(){
    $('.controls').fadeOut('fast');
    showElement($('.avatar img'), 0);
}

$(function(){
    setTimeout(function(){ playAnimation() }, 4000);
    $('.controls a').click(function(){ playAnimation(); });
});