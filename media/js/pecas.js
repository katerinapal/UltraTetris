import ".\\jquery.js";
var i;
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

export var O = {
  "matriz":[
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]],
  "rotacoes": 1
};

export var I = {
  "matriz": [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]],
  "rotacoes": 2
};

export var S = {
  "matriz": [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]],
  "rotacoes": 2
};

export var Z = {
 "matriz": [
 [0, 0, 0, 0],
 [0, 1, 1, 0],
 [0, 0, 1, 1],
 [0, 0, 0, 0]],
 "rotacoes": 2
};

export var L = {
 "matriz": [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [0, 0, 0, 0]],
 "rotacoes": 4
};

export var J = {
 "matriz": [
 [0, 0, 1, 0],
 [0, 0, 1, 0],
 [0, 1, 1, 0],
 [0, 0, 0, 0]],
 "rotacoes": 4
};

export var T = {
  "matriz": [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0]],
  "rotacoes": 4
};

export function Peca() {
    this.matriz = [];
    this.x = 0;
    this.y = 0;
    this.pivot_x = 1;
    this.pivot_y = 2;
    this.rotacao = 1;
    this.rotacoes = 4;
    this.esquerda = 0;
    this.direita = 0;
    
    this.setar_forma = function(forma){
        this.matriz = forma.matriz.clone();
        this.rotacoes = forma.rotacoes;
        this.rotacao = 1;
        this.esquerda_pivot();
        this.direita_pivot();
    };
    
    this.esquerda_pivot = function(){
        for (var i = 0; i < this.pivot_y; i++){
            for (var j = 0; j < 4; j++){
                if (this.matriz[j][i] == 1){
                  this.esquerda = this.pivot_y - i;
                  return;
                }
            }  
        }  
    };
    
    this.direita_pivot = function(){
        for (var i = 3; i >= this.pivot_y; i--){
            for (var j = 0; j < 4; j++){
                if (this.matriz[j][i] == 1){
                  this.direita = i - this.pivot_y;
                  return;
                }
            }  
        }  
    };
    
    this.rotacionar = function(){
        var matriz_temporaria = vazio.clone();
        if (this.rotacoes != 1){
            for (var i = 0; i < 4; i++){
                for (var j = 0; j < 4; j++){
                    if (this.matriz[i][j] == 1){
                        if (this.rotacoes == 4 || (this.rotacoes == 2 && this.rotacao == 1)){
                            var novo_x = j + this.pivot_x - this.pivot_y;
                            var novo_y = this.pivot_x + this.pivot_y - i;
                            matriz_temporaria[novo_x][novo_y] = 1;
                        } else if (this.rotacoes == 2 && this.rotacao == 2){
                            var novo_x = this.pivot_x + this.pivot_y - j;
                            var novo_y = i + this.pivot_x - this.pivot_y + 2;
                            matriz_temporaria[novo_x][novo_y] = 1; 
                        }
                    }   
                }
            }
            this.rotacao += 1;
            if ((this.rotacoes == 4 && this.rotacao > 4) || (this.rotacoes == 2 && this.rotacao > 2)){
              this.rotacao = 1;
            } 
            this.matriz = matriz_temporaria.clone();
            this.esquerda_pivot();
            this.direita_pivot();
            console.log(this.direita);
        //    console.log(this.esquerda);
        }
    };
}

