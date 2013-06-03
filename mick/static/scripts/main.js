var scrollTo = function($this, speed){
    var $this = $this,
        href = $this.attr('href'),
        distance = $(href).offset();
    $("html, body").animate({ scrollTop: distance.top-40 }, speed || 300);
    return $this; 
}
        

$(document).ready(function(){
    
    var previousAlbum='album1';
    $('#album-nav li').on('click', function(){
       var album=$(this).data('album-name');
       var video = $("#"+previousAlbum).attr("src");
       $("#"+previousAlbum).attr("src","");
       $("#"+previousAlbum).attr("src",video);
       $('#carousel li').attr('data-active', 'false');
       $('#album-nav li').attr('data-active', 'false');
       $('#carousel li[data-album-name="'+album+'"]').attr('data-active', 'true');
       $('#album-nav li[data-album-name="'+album+'"]').attr('data-active', 'true');
       previousAlbum = album;
    });

    $('header.main a').on('click', function(e) {
        e.preventDefault();
        scrollTo($(this),700); 
    });
    
    //Sticky menu **note trying to refactor**
    var $window = $(window),
        $mainMenuBar = $('nav ul'),
        $mainMenuBarAnchor = $('#anchor');

    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $mainMenuBarAnchor.offset().top-20;
        if (window_top > div_top) {
            // Make the nav sticky
            $mainMenuBar.addClass('stuck');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        }
        else {
            // Unstick the nav
            $mainMenuBar.removeClass('stuck');
            $mainMenuBarAnchor.height(0);
        }
    });

    
});
