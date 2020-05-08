import ".\\jquery.js";

export function DefaultRender() {
    this.renderizar_peca = function(peca_a_renderizar){
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 4; j++){
                var style = "";
                if (peca_a_renderizar.matriz[i][j] == 1){
                    style="background-color: #FF0000; width: 32px; height: 32px;";
                    $("#celula-" + (i + peca_a_renderizar.y) + "-" + (j + peca_a_renderizar.x)).attr("style", style);
                } 
            }
        }
    };
    
    this.renderizar_tabuleiro = function(tabuleiro_a_renderizar){
        for (var i = 0; i < tabuleiro_a_renderizar.altura; i++){
            for (var j = 0; j < tabuleiro_a_renderizar.largura; j++){
                var style = "";
                if (tabuleiro_a_renderizar.matriz[i][j] == 1){
                    style="background-color: #FF0000; width: 32px; height: 32px;";
                } else {
                    style="background-color: #C3C3C3; width: 32px; height: 32px;";
                }
                $("#celula-" + i + "-" + j).attr("style", style);
            }
        }    
    };
    
    this.limpar_peca = function(peca_a_renderizar){
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 4; j++){
                var style = "";
                if (peca_a_renderizar.matriz[i][j] == 1){
                    style="background-color: #C3C3C3; width: 32px; height: 32px;";
                    $("#celula-" + (i + peca_a_renderizar.y) + "-" + (j + peca_a_renderizar.x)).attr("style", style);
                } 
                
            }
        }
    }
}