Array.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};

var vazio = [
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0]
             ];
var O = [
 [0, 0, 0, 0],
 [0, 1, 1, 0],
 [0, 1, 1, 0],
 [0, 0, 0, 0]
             ];

var I = [
 [0, 0, 1, 0],
 [0, 0, 1, 0],
 [0, 0, 1, 0],
 [0, 0, 1, 0]
             ];

var S = [
 [0, 0, 0, 0],
 [0, 0, 1, 1],
 [0, 1, 1, 0],
 [0, 0, 0, 0]
             ];

var Z = [
 [0, 0, 0, 0],
 [0, 1, 1, 0],
 [0, 0, 1, 1],
 [0, 0, 0, 0]
             ];

var L = [
 [0, 0, 1, 0],
 [0, 0, 1, 0],
 [0, 0, 1, 1],
 [0, 0, 0, 0]
             ];
var J = [
 [0, 0, 1, 0],
 [0, 0, 1, 0],
 [0, 1, 1, 0],
 [0, 0, 0, 0]
             ];

var T = [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
                ]


function Peca(){
    this.matriz = [];
    this.pivot_x = 1;
    this.pivot_y = 2;
    this.forma_atual = 1;
    this.quantidade_formas = 4;
    this.rotacionar = function(){
        var matriz_temporaria = vazio.clone();
        console.log(matriz_temporaria);
        console.log(this.matriz);
        if (this.quantidade_formas != 1){
            for (var i = 0; i < 4; i++){
                for (var j = 0; j < 4; j++){
                    if (this.matriz[i][j] == 1){
                        if (this.quantidade_formas == 4 || (this.quantidade_formas == 2 && this.forma_atual == 1)){
                            var novo_x = j + this.pivot_x - this.pivot_y;
                            var novo_y = this.pivot_x + this.pivot_y - i;
                            matriz_temporaria[novo_x][novo_y] = 1;
                        } else if (this.quantidade_formas == 2 && this.forma_atual == 2){
                            var novo_x = this.pivot_x + this.pivot_y - j;
                            var novo_y = i + this.pivot_x - this.pivot_y + 2;
                            matriz_temporaria[novo_x][novo_y] = 1; 
                        }
                    }   
                }
            }
            this.forma_atual += 1;
            if ((this.quantidade_formas == 4 && this.forma_atual > 4) || (this.quantidade_formas == 2 && this.forma_atual > 2)){
              this.forma_atual = 1;
            } 
            console.log(matriz_temporaria);
            this.matriz = matriz_temporaria.clone();
        }
    };
}

function PecaDoisMovimentos(){
  Peca.apply(this);
  this.rotacionada = false;
  this.rotacionar = function(){
        var matriz_temporaria = vazio.clone();
        console.log(matriz_temporaria);
        console.log(this.matriz);
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 4; j++){
                if (this.matriz[i][j] == 1){
                    if (this.rotacionada == false){
                        this.rotacionada = true; 
                        var novo_x = j + this.pivot_x - this.pivot_y;
                        var novo_y = this.pivot_x + this.pivot_y - i;
                        matriz_temporaria[novo_x][novo_y] = 1;
                    } else {
                        this.rotacionada = false;
                        var novo_x = this.pivot_x + this.pivot_y - j;
                        var novo_y = i + this.pivot_x - this.pivot_y;
                        matriz_temporaria[novo_x][novo_y] = 1;
                    }    
                }   
            }
        }
        console.log(matriz_temporaria);
        this.matriz = matriz_temporaria.concat();  
  }
}

