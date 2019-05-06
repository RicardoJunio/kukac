exercicio = function(_met, _identificacao, _descricao){
    this.met = _met;
    this.identificacao = _identificacao;
    this.descricao = _descricao;
}

var ciclismo = (function(){
    var ciclismo;
    
        function init(){
            ciclismo = new Array();
            ciclismo.push(new exercicio(8,"19 a 22km/h","lazer, esforço moderado"));
            ciclismo.push(new exercicio(6,"16 a 19km/h","lazer, lento, esforço leve"));
            ciclismo.push(new exercicio(16,"acima de 32km/h","corrida, sem explosão"));
            ciclismo.push(new exercicio(4,"abaixo de 16km/h","geral, lazer, para trabalho ou prazer"));
            ciclismo.push(new exercicio(10,"22 a 25km/h","corrida ou lazer, rápido, esforço vigoroso"));
            ciclismo.push(new exercicio(12,"25 a 30km/h","corrida sem explosão ou acima de 30 km/h, explosivo, muito veloz"));
        }return{
        get: function(){
            if(ciclismo==null){
                init();
            }
            return ciclismo;
        },
        color: "red"
    }
})();

var condicionamentoAerobico = (function(){
    var condicionamentoAerobico;
    
        function init(){
            condicionamentoAerobico = new Array();
            condicionamentoAerobico.push(new exercicio(4,"Hidroginástica","-"));
            condicionamentoAerobico.push(new exercicio(7,"Estacionário G","Estacionário GERAL"));
            condicionamentoAerobico.push(new exercicio(9,"Esteira","Ergômetro de esteira (ESTEIRA - GERAL)"));
            condicionamentoAerobico.push(new exercicio(13,"Estacionário V","Estacionário ESFORÇO MUITO VIGOROSO"));
            condicionamentoAerobico.push(new exercicio(6,"Ginástica Coletiva","Conduzir aulas de ginástica aeróbia"));
        }return{
        get: function(){
            if(condicionamentoAerobico==null){
                init();
            }
            return condicionamentoAerobico;
        },
        color: "light-blue"
    }
})();

var caminhar = (function(){
    var caminhar;
    
        function init(){
            caminhar = new Array();
            caminhar.push(new exercicio(6,"GERAL","-"));
        }return{
        get: function(){
            if(caminhar==null){
                init();
            }
            return caminhar;
        },
        color: "green"
    }
})();

var correr = (function(){
    var correr;
    
        function init(){
            correr = new Array();
            correr.push(new exercicio(8,"8km/h","-"));
            correr.push(new exercicio(9,"9km/h","-"));
            correr.push(new exercicio(10,"10km/h","-"));
            correr.push(new exercicio(12,"11km/h","-"));
            correr.push(new exercicio(13,"12km/h","-"));
            correr.push(new exercicio(14,"13km/h","-"));
            correr.push(new exercicio(14,"14km/h","-"));
            correr.push(new exercicio(16,"16km/h","-"));
            correr.push(new exercicio(18,"17km/h","-"));
            correr.push(new exercicio(15,"Subida Geral","Rampa ou Escada"));
        }return{
        get: function(){
            if(correr==null){
                init();
            }
            return correr;
        },
        color: "amber"
    }
})();

var danca = (function(){
    var danca;
    
        function init(){
            danca = new Array();
            danca.push(new exercicio(7,"Aeróbia","Geral"));
            danca.push(new exercicio(9,"Step 15-25 cm","-"));
            danca.push(new exercicio(10,"Step 25-30 cm","-"));
        }return{
        get: function(){
            if(danca==null){
                init();
            }
            return danca;
        },
        color: "orange"
    }
})();

var condicionamentoFisico = (function(){
    var condicionamentoFisico;
    
        function init(){
            condicionamentoFisico = new Array();
            condicionamentoFisico.push(new exercicio(3,"Alongamento","-"));
            condicionamentoFisico.push(new exercicio(8,"Treinamento em Circuito","GERAL"));
            condicionamentoFisico.push(new exercicio(3,"Levantamento de peso","Musculação - LEVE"));
            condicionamentoFisico.push(new exercicio(6,"Levantamento de peso","Musculação - VIGOROSA",));
            condicionamentoFisico.push(new exercicio(6,"Exercícios em centros de saúde","Musculação - MODERADA"));
            condicionamentoFisico.push(new exercicio(13,"Calistenia","(flexões, abdominais, puxadas), pesado, esforço vigoroso"));
        }return{
        get: function(){
            if(condicionamentoFisico==null){
                init();
            }
            return condicionamentoFisico;
        },
        color: "teal"
    }
})();

var atvDiaria = (function(){
    var atvDiaria;
    
        function init(){
            atvDiaria = new Array();
            atvDiaria.push(new exercicio(6,"Faxina","mudar móveis de lugar"));
            atvDiaria.push(new exercicio(3,"Limpeza","varrer, lavar roupa, janelas, etc."));
        }return{
        get: function(){
            if(atvDiaria==null){
                init();
            }
            return atvDiaria;
        },
        color: "lime"
    }
})();

var esportes = (function(){
    var esportes;
    
        function init(){
            esportes = new Array();
            esportes.push(new exercicio(12,"Boxe","-"));
            esportes.push(new exercicio(5,"Golfe","-"));
            esportes.push(new exercicio(7,"Tênis","Geral"));
            esportes.push(new exercicio(12,"Handebol","-"));
            esportes.push(new exercicio(8,"Basquetebol","-"));
            esportes.push(new exercicio(7,"Futebol C","Casual"));
            esportes.push(new exercicio(9,"Boxe S","(sparring)"));
            esportes.push(new exercicio(8,"Voleibol C","Casual"));
            esportes.push(new exercicio(8,"Futebol Americano","-"));
            esportes.push(new exercicio(10,"Futebol","Competitivo"));
            esportes.push(new exercicio(4,"Voleibol","Competitivo"));
            esportes.push(new exercicio(8,"Rappel","Escalar rochas"));
            esportes.push(new exercicio(8,"Voleibol de Praia","Competitivo"));
            esportes.push(new exercicio(7,"Natação M","Estilo livre MODERADO"));
            esportes.push(new exercicio(10,"Natação V","Estilo livre VIGOROSO"));
            esportes.push(new exercicio(10,"Lutas","Judô, Jiu-Jitso, Karatê, Kick Boxing, Tae-Kwon-do"));
        }return{
            get: function(){
                if(esportes==null){
                    init();
                }
                return esportes;
            },
        color: "blue-grey"
    }
})();

function get(string){
    if(string == "Ciclismo"){
        return ciclismo.get();
    }
    if(string == "Aeróbia"){
        return condicionamentoAerobico.get();
    }
    if(string == "Caminhada"){
        return caminhar.get();
    }
    if(string == "Corrida"){
        return correr.get();
    }
    if(string == "Dança"){
        return danca.get();
    }
    if(string == "Musculação"){
        return condicionamentoFisico.get();
    }
    if(string == "Atividade Diaria"){
        return atvDiaria.get();
    }
    if(string == "Esportes"){
        return esportes.get();
    }
}

function getMet(string, string2){
    principal = get(string);
    principal.forEach(element => {
        if(element.identificacao == string2){
            return element.met;
        }
    });
}

function getColor(string){
    if(string == "Ciclismo"){
        return ciclismo.color;
    }
    if(string == "Aeróbia"){
        return condicionamentoAerobico.color;
    }
    if(string == "Caminhada"){
        return caminhar.color;
    }
    if(string == "Corrida"){
        return correr.color;
    }
    if(string == "Dança"){
        return danca.color;
    }
    if(string == "Musculação"){
        return condicionamentoFisico.color;
    }
    if(string == "Atividade Diaria"){
        return atvDiaria.color;
    }
    if(string == "Esportes"){
        return esportes.color;
    }
}

