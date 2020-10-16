import ".\\jquery.js";

export function Tabuleiro() {
    this.largura = 0;
    this.altura = 0;
    this.matriz = [];
    
    this.gerar_tabuleiro = function(largura, altura){
        this.largura = largura;
        this.altura = altura;
        for (var i = 0; i < this.altura; i++){
            for (var j = 0; j < this.largura; j++){
                if (j == 0){
                    this.matriz[i] = [];
                }    
                this.matriz[i][j] = 0;
            }
        }
    }
}