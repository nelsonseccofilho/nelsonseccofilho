$(document).ready(function(){

    /////// VARIÁVEIS
    var controleVideo = false;
    // var videoFundo = document.getElementById("videoFundo");
    var controleMenu = false;
    
    var controlePage = false;
    var pageMomento;


    var abaPrivada = false;
    /////// CONFIG START


    $("body").css("overflow","visible");
    // videoFundo.play();

    $('.containerVotos').slick({
          centerMode: true,
          centerPadding: '0px',
          dots: true,
          arrows: false,
          autoplay:true,
          slidesToShow: 1,
          autoplaySpeed:10000,
          infinite: true,
          speed: 500,
          cssEase: 'linear'
          
        });





    if($(window).width()>=990){

        window.location.href = "../index.html";

    }


    $(window).resize(function(){
        
        // console.log($(window).width());

        if($(window).width()>=990){
            window.location.href = "../index.html";
        }

    });






	// localStorage.removeItem("btShop");
	// localStorage.removeItem("btWeb");
	// localStorage.removeItem("btEdu");



    // var mobile = isMobile();


    // function isMobile(){
    //     var userAgent = navigator.userAgent.toLowerCase();
    //     if(userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1)
    //     {
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    //var is_iPad = navigator.userAgent.match(/iPad/i) != null;

    //alert(is_iPad);

    
    getMobileOperatingSystem();


    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    // alert("IOS");

                    $("#boxInfoCena6_2").css("margin-bottom","160px");
                    $(".logoNextFooter").css("bottom","80px");
                    $(".logoIfoodFooter").css("bottom","79px");


                    var storageTestKey = 'sTest',
                        storage = window.sessionStorage;

                    try {
                     storage.setItem(storageTestKey, 'test');
                     storage.removeItem(storageTestKey);
                     InputOrCreateLocalStorage();

                    } catch (e) {
                     if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
                        // alert("PRIVADO");
                        abaPrivada = true;
                       // private mode
                     } else {
                        
                    
                     }
                    }



        }
        else{
                    //alert("Outro sistema");
                    if (typeof(Storage) !== "undefined") {
                        // Code for localStorage/sessionStorage.
                        InputOrCreateLocalStorage();
                    } else {
                        // Sorry! No Web Storage support..

                    }


        }

        
    }




    







    


    

    /////// CONFIG END
    
 	
    

    /////// EVENTOS START
    var menu = document.getElementById("menu");
	var menuExpand = document.getElementById("menuExpand");

    menu.addEventListener("touchend", abreMenu, false);



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

    



    $(".menuLista li").click(function(){
        $(".menuLista li").removeClass("listaAtiva");
        $(this).addClass("listaAtiva");
        $("#menuExpand").css("display","none");
        $("#menu").css("background-image","url(img/open.svg)");
        controleMenu=false;

        var element = $(this).attr("data-menu");

        if(element!="especial"){
            var posElemento = $("#"+element).offset().top;
            var posAtual = $("#containerPrincipal").scrollTop();
            // console.log(element+" => "+posElemento);
            // $("#containerPrincipal").scrollTop(posAtual+posElemento);
            $("#containerPrincipal").animate({scrollTop:posAtual+posElemento},1500,function(){
                // console.log("acabou1");
                $("#containerPrincipal").css("overflow-y","scroll");
            });
            $("#containerPrincipal").css("overflow-y","hidden");
            tracking($(this).html(),"Menu","Clicks");


        }
        else{
            element = "cena3";
            var posElemento = $("#"+element).offset().top;
            var posAtual = $("#containerPrincipal").scrollTop();
            // console.log(element+" => "+posElemento+"  ===>didjwidjwd "+$("#cena3").height());
            // $("#containerPrincipal").scrollTop((posAtual+posElemento)-360);
            $("#containerPrincipal").animate({scrollTop:(posAtual+posElemento)-380},1500,function(){
                // console.log("acabou2");
                $("#containerPrincipal").css("overflow-y","scroll");
            });
            $("#containerPrincipal").css("overflow-y","hidden");
            tracking($(this).html(),"Menu","Clicks");

        }

        

    });




   







    $("#logoAppStore").click(function(){
        // console.log("STORE");
        window.open("https://itunes.apple.com/br/app/next-ifood-para-restaurantes/id1166707443?mt=8","_black");
    });

    $("#logoAppPlay").click(function(){
        // console.log("PLAY");
        window.open("https://play.google.com/store/apps/details?id=br.com.ifood.next&hl=pt_BR","_black");
    });




    $(".bt").click(function(){
        if(abaPrivada==true){
            alert("Desabilite sua aba privada!");
        }
        else{
            setLocalStorage($(this).attr("id"));
        }
        
    });

    $("#playVIDEO").click(function(){
       

        if(controleVideo===false){
            controleVideo=true;
            window.open("https://www.youtube.com/watch?v=UUrkC3JqS6I","_black");
        }

         
       
    });



    $("#containerPrincipal").scroll(function(event){
      
        var teste = $("#containerPrincipal").scrollTop() - $("#cena3").position().top

        // console.log($("#containerPrincipal").scrollTop()+"  ===>  "+$("#cena2").position().top+" => "+$("#cena3").position().top);


        retornaPage();

        var windowWidth = $( window ).width();
        var windowHeight = $( window ).height();


        if($(window).scrollTop()>=windowHeight/2){

             // console.log($(window).scrollTop()+" => "+windowHeight);
        }
        else{

        }


    });


    // var time = setInterval(function(){
    //     retornaPage();
    // },500);


     
    function retornaPage(){

        for(var i=1;i<7;i++){

            if($("#cena"+i).position().top<0){

            }
            else{
                    pageMomento = $("#cena"+i).attr("id");
                    if(pageMomento!="cena1"){
                        pageMomento = $("#cena"+(i-1)).attr("id");
                    }
                    else{

                    }
                    // console.log("MOMENTO => "+pageMomento+"  CENA 6 => "+$("#cena6").position().top);

                    if(pageMomento=="cena6"||$("#cena6").position().top<=30){
                        $(".logoHeader").fadeOut(500);

                    }
                    else{
                        $(".logoHeader").fadeIn(500);
                    }

                    break;
               
            }

        }


    }




    /////// EVENTOS END


});







//////// Função para criar o local storage START
                function InputOrCreateLocalStorage(){

                        // localStorage.btShop
                        // localStorage.btWeb
                        // localStorage.btEdu

                        if (typeof(Storage) !== "undefined") {
                            // console.log("Suportado!");

                            /////////SHOP START
                            if(typeof localStorage.btShop == "undefined"){
                                // console.log("não existe");
                                localStorage.setItem("btShop","null");

                                
                            }
                            else{
                                
                                if(localStorage.btShop!="null"){
                                    // console.log("existe => "+localStorage.btShop);
                                    $("#btShop_"+localStorage.btShop).css("background-image","url(img/"+localStorage.btShop+"_activate.png)");
                                    // console.log($("#btShop_"+localStorage.btShop).attr("class"));
                                    
                                }
                                // localStorage.removeItem("btShop");
                                
                                
                            }
                            /////////SHOP END

                            /////////WEB START
                            if(typeof localStorage.btWeb == "undefined"){
                                // console.log("não existe");
                                localStorage.setItem("btWeb","null");

                                
                            }
                            else{
                                if(localStorage.btWeb!="null"){
                                    // console.log("existe => "+localStorage.btWeb);
                                    $("#btWeb_"+localStorage.btWeb).css("background-image","url(img/"+localStorage.btWeb+"_activate.png)");
                                    // console.log($("#btWeb_"+localStorage.btWeb).attr("class"));
                                }

                                
                                // localStorage.removeItem("btWeb");
                            }
                            /////////WEB END

                            /////////EDU START
                            if(typeof localStorage.btEdu == "undefined"){
                                // console.log("não existe");
                                localStorage.setItem("btEdu","null");

                                
                            }
                            else{
                                if(localStorage.btEdu!="null"){

                                    // console.log("existe => "+localStorage.btEdu);
                                    $("#btEdu_"+localStorage.btEdu).css("background-image","url(img/"+localStorage.btEdu+"_activate.png)");
                                    // console.log($("#btEdu_"+localStorage.btEdu).attr("class"));

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

                function setLocalStorage(element){


                    var explode = element.split("_");
                    // console.log(explode);

                    localStorage[explode[0]] = explode[1];

                    if(explode[1]=="Like"){
                        $("#"+explode[0]+"_"+explode[1]).css("background-image","url(img/Like_activate.png)");
                        $("#"+explode[0]+"_Dislike").css("background-image","url(img/Dislike.png)");
                    }
                    else{
                        $("#"+explode[0]+"_"+explode[1]).css("background-image","url(img/Dislike_activate.png)");
                        $("#"+explode[0]+"_Like").css("background-image","url(img/Like.png)");
                    }


                }


                ///////// Função para gravar o local storage END