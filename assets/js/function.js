var containerHeight = $('.background').height();

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);
    if(wScroll <= containerHeight){
        $('.logo').css({ 'transform': 'translate(0px, ' + wScroll / 2.5 + '%)' });
        $('.fore').css({ 'transform': 'translate(0px, ' + wScroll / 30 + '%)' });
    }

    if(wScroll > $('.project').offset().top-($(window).height()/1.2)){
        console.log("hello");
        $('.project figure').each(function(i){
            setTimeout(function(){
                $('.project figure').eq(i).addClass('show-class');
            },(700 * (Math.exp(i*0.14)))-70);
           
        });
    }
});
