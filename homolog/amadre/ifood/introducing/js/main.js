document.addEventListener("DOMContentLoaded", function(event) {
   // start up after 2sec no matter what
   window.setTimeout(function() {
       // console.log("DOM completamente carregado e analisado");    
       document.getElementById("wrapper").className = "";
   }, 1500);

});




$(document).ready(function() {



    if($(window).width()<990){

        window.location.href = "mobile/index.html";

    }


    $(window).resize(function(){
        
        // console.log($(window).width());

        if($(window).width()<990){
            window.location.href = "mobile/index.html";
        }

    });
        
    

    


    // localStorage.removeItem("btShop");
    // localStorage.removeItem("btWeb");
    // localStorage.removeItem("btEdu");

    var controleTraking = false;
    var trakingScroll = "Assista";


    InputOrCreateLocalStorage();

    $(".bt").click(function() {
        setLocalStorage($(this).attr("id"));
    });

    $("#play--section__playvideo").click(function() {

        tv.seekTo(0);
        tv.unMute();
        $("#videoContainer").css("display", "block");
        $("body").css("overflow", "hidden");
       

    });

    $(".close").click(function() {
        $("body").css("overflow", "visible");
        $("#videoContainer").css("display", "none");
        tv.seekTo(0);
        tv.mute();

    });


    $(document).scroll(function(event) {


        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        var posTela = $(window).scrollTop();


        if(controleTraking==false){


                if(posTela>0&&posTela<1000){
                    if(trakingScroll!="Assista"){
                        trakingScroll = "Assista";
                        tracking("Assista","Scroll","OnPage");
                    }
                }
                else if(posTela>1000&&posTela<2000){
                    if(trakingScroll!="Scroll"){
                        trakingScroll = "Scroll";
                        tracking("Evolução","Scroll","OnPage");
                    }
                    
                }
                else if(posTela>2000&&posTela<3800){
                    if(trakingScroll!="Baixe o App"){
                        trakingScroll = "Baixe o App";
                        tracking("Baixe o App","Scroll","OnPage");
                    }
                    
                }
                else if(posTela>3800&&posTela<5900){
                    if(trakingScroll!="Operação"){
                        trakingScroll = "Operação";
                        tracking("Operação","Scroll","OnPage");
                    }
                    
                }
                else if(posTela>5900&&posTela<8000){
                    if(trakingScroll!="Vendas"){
                        trakingScroll = "Vendas";
                        tracking("Vendas","Scroll","OnPage");
                    }
                    
                }
                else if(posTela>8000&&posTela<9000){
                    if(trakingScroll!="Conexão"){
                        trakingScroll = "Conexão";
                        tracking("Conexão","Scroll","OnPage");
                    }
                    
                }
                else if(posTela>9000){
                    if(trakingScroll!="Open Next"){
                        trakingScroll = "Open Next";
                        tracking("Open Next","Scroll","OnPage");
                    }
                    
                }

        }

    


    });



    /////// VARIÁVEIS
    var controleMenu = false;
    var controlePage = false;
    var pageMomento;
    /////// CONFIG START

/////// EVENTOS START
    var menu = document.getElementById("menu");
    var menuExpand = document.getElementById("menuExpand");

    menu.addEventListener("click", abreMenu, false);

    $("#menuExpand ul li ").click(function(){
        abreMenu();

        $(".menuLista li").removeClass("listaAtiva");
        $(this).addClass("listaAtiva");


        if(controleTraking==false){
            controleTraking = true;
            tracking($(this).find("a").html(),"Menu","Clicks");
            setTimeout(function(){
                controleTraking = false;
            },1000);
        }

        


    })

    function abreMenu(){
        if(controleMenu==false){
            
            $("#menuExpand").css("display","block");
            $("#menu").css("background-image","url(img/close.png)");
            controleMenu=true;
            // alert("ABRE");
        }
        else{
            $("#menuExpand").css("display","none");
            $("#menu").css("background-image","url(img/open.svg)");
            controleMenu=false;
            // alert("FECHAAA");
        }
        
        
    };
});


///////////////////// VIDEO START //////////////////////////

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
    playerDefaults = { autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 1, disablekb: 1, enablejsapi: 1, iv_load_policy: 3 };
var vid = [
        { 'videoId': 'UUrkC3JqS6I', 'startSeconds': 0, 'suggestedQuality': 'hd720' }
    ],
    randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;


function onYouTubePlayerAPIReady() {
    tv = new YT.Player('tv', { events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }, playerVars: playerDefaults });
}

function onPlayerReady() {
    tv.loadVideoById(vid[currVid]);
    tv.mute();
}

function onPlayerStateChange(e) {
    if (e.data === 1) {
        $('#tv').addClass('activeVideo');
        $('.hi em:nth-of-type(2)').html(currVid + 1);
    } else if (e.data === 2) {
        // $('#tv').removeClass('activeVideo');
    }

    if(e.data==0){
        // console.log("ACABOU");
        $("body").css("overflow", "visible");
        $("#videoContainer").css("display", "none");
        tv.seekTo(0);
        tv.mute();
    }

    
}

function vidRescale() {

    var w = $(window).width() - (($(window).width() * 25) / 100),
        h = $(window).height() - (($(window).height() * 25) / 100);

    if (w / h > 16 / 9) {
        tv.setSize(w, w / 16 * 9);
        $('.tv .screen').css({ 'left': '0px' });
    } else {
        tv.setSize(h / 9 * 16, h);
        $('.tv .screen').css({ 'left': -($('.tv .screen').outerWidth() - w) / 2 });
    }


}


function resizeVideo() {
    tv.setSize(($(window).width() * 100) / 100, $(window).height());
}

$(window).on('load resize', function() {
    // vidRescale();
    resizeVideo();
});







///////////////////// VIDEO END //////////////////////////


























//////// Função para criar o local storage START
function InputOrCreateLocalStorage() {

    // localStorage.btShop
    // localStorage.btWeb
    // localStorage.btEdu

    if (typeof(Storage) !== "undefined") {
        // console.log("Suportado!");

        /////////SHOP START
        if (typeof localStorage.btShop == "undefined") {
            // console.log("não existe");
            localStorage.setItem("btShop", "null");


        } else {

            if (localStorage.btShop != "null") {
                // console.log("existe => " + localStorage.btShop);
                $("#btShop_" + localStorage.btShop).addClass("active");
                // console.log($("#btShop_" + localStorage.btShop).attr("class"));

            }
            // localStorage.removeItem("btShop");


        }
        /////////SHOP END

        /////////WEB START
        if (typeof localStorage.btWeb == "undefined") {
            // console.log("não existe");
            localStorage.setItem("btWeb", "null");


        } else {
            if (localStorage.btWeb != "null") {
                // console.log("existe => " + localStorage.btWeb);
                $("#btWeb_" + localStorage.btWeb).addClass("active");
                // console.log($("#btWeb_" + localStorage.btWeb).attr("class"));
            }


            // localStorage.removeItem("btWeb");
        }
        /////////WEB END

        /////////EDU START
        if (typeof localStorage.btEdu == "undefined") {
            // console.log("não existe");
            localStorage.setItem("btEdu", "null");


        } else {
            if (localStorage.btEdu != "null") {

                // console.log("existe => " + localStorage.btEdu);
                $("#btEdu_" + localStorage.btEdu).addClass("active");
                // console.log($("#btEdu_" + localStorage.btEdu).attr("class"));

            }

            // localStorage.removeItem("btEdu");
        }
        /////////EDU END


    } else {
        // console.log("Não suportado!");
    }

}
//////// Função para criar o local storage END




///////// Função para gravar o local storage START

function setLocalStorage(element) {


    var explode = element.split("_");
    // console.log(explode);

    localStorage[explode[0]] = explode[1];

    if (explode[1] == "Like") {
        $("#" + explode[0] + "_" + explode[1]).addClass("active");
        $("#" + explode[0] + "_Dislike").removeClass("active");
    } else {
        $("#" + explode[0] + "_" + explode[1]).addClass("active");
        $("#" + explode[0] + "_Like").removeClass("active");
    }


}


///////// Função para gravar o local storage END
