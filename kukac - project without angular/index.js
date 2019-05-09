count = 0;

$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true, enableTouch: false
    });

    $('#cep').mask('00000-000');
    $('#rm').mask("#.##0,00", {reverse: true});

    $(".loading>*").fadeIn();
    setTimeout(function() {
        $(".loading>*").fadeOut();
        setTimeout(function() {
            $(".loading").fadeOut();
        },600);
    }, 2600);

    $("#unnamed").change(function(){
        if ($(this).is(':checked')) {
            $("#button").attr("class",($("#button").attr("class")).replace(' disabled',''));
            $("#name-r").val("Anônimo");
        }else{
            $("#button").attr("class",$("#button").attr("class")+" disabled"); 
        }
    });

    $('#name').on('input', function() {
        console.log($(this).val().length>2);
        $("#unnamed").prop("checked", false);
        if($(this).val().length>2){
            $("#button").attr("class",($("#button").attr("class")).replace(' disabled',''));
            $("#unnamed").prop("checked", false);
            $("#unnamed").prop("disabled", true);
            $("#name-r").val($(this).val());
        }else{
            if($("#button").attr("class").indexOf(' disabled')==-1){
                $("#button").attr("class",$("#button").attr("class")+" disabled"); 
            }
            if($("#unnamed").prop("disabled")){
                $("#unnamed").prop("disabled", false);
            }
        }
    });

    $('#cep').on('input', function() {
        var cep = $(this).val().replace(/\D/g, '');
        var validacep = /^[0-9]{8}$/;
        if($(this).val().length==9 && validacep.test(cep)){
            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                if (!("erro" in dados)) {
                    $("#button").attr("class",($("#button").attr("class")).replace(' disabled',''));
                    $("#road").val(dados.logradouro);
                    $("#street").val(dados.bairro);
                    $("#city").val(dados.localidade);
                    $("#uf").val(dados.uf);
                    $("#ibge").val(dados.ibge);
                    $("#cep-r").val($("#cep").val());
                }else {
                    if($("#button").attr("class").indexOf(' disabled')==-1){
                        $("#button").attr("class",$("#button").attr("class")+" disabled"); 
                    }
                }
            });
        }else{
            if($("#button").attr("class").indexOf(' disabled')==-1){
                $("#button").attr("class",$("#button").attr("class")+" disabled"); 
            }
        }
    });
    $('#rm').on('input', function() {
        if($(this).val().length>5){
            $("#button").attr("class",($("#button").attr("class")).replace(' disabled',''));
        }else{
            if($("#button").attr("class").indexOf(' disabled')==-1){
                $("#button").attr("class",$("#button").attr("class")+" disabled"); 
            }
        }
    });
    $('#nd').on('input', function() {
        if($(this).val()>0){
            console.log($(this).val()+1);
            $("#button").attr("class",($("#button").attr("class")).replace(' disabled',''));
            $("#income").val((($("#rm").val().replace(/\D/g, '')/(parseInt($(this).val())+1))/100).toFixed(2).replace(".",","));
        }else{
            if($("#button").attr("class").indexOf(' disabled')==-1){
                $("#button").attr("class",$("#button").attr("class")+" disabled"); 
            }
        } 
    });

    $("#button").click(function(){
        count++;
        console.log(count);

        if(count == 4){
            $("#button").text("calcular");
        }

        if(count<5){
            $(this).attr("class",$(this).attr("class")+" disabled");
        }
        if(count == 5){
            $(".loading").show();
            $(".loading>*").fadeIn();
            setTimeout(function() {
                $(".loading>*").fadeOut();
                setTimeout(function() {
                    $(".loading").fadeOut();
                },600);
            }, 2600);
            $("#button").text("Novamente");
        }

        if(count>5){
            count=0;
            $("#button").text("avançar");
            $("#name").val("");
            $("#unnamed").prop("disabled", false);
            $("#unnamed").prop("checked", false);
            $("#cep").val("");
            $("#rm").val("");
            $("#nd").val("");
        }
        $('.carousel.carousel-slider').carousel('next');
    });

    $(".back").click(function(){
        $('.carousel.carousel-slider').carousel('prev');
        $("#button").attr("class",($("#button").attr("class")).replace(' disabled',''));
        if(count == 2){
            $("#button").text("Avançar");
        }
        count--;
    });

});