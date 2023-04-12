$( document ).ready(function() {
    $(".menu-wrap").click(function(){
        $(this).toggleClass("active")
        $(".menu-wrapper").toggleClass("opened")
        $("#menu_wrap_text").toggleClass("invert")
        $("#mob_menu").toggleClass("active")
        setTimeout(()=>{
            $("#mob_logo").toggleClass("none")
            $("#mob_logo_fff").toggleClass("show")
        },150)
    })
});