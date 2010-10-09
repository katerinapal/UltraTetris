function Tetris(){
    this.game_over = false;
    this.render = null;
    this.paused = false;
    this.peca = null;
    this.proxima_peca = null;
    this.tabuleiro = null;
    this.pecas_disponiveis = [O, L, J, I, S, Z, T];
    this.teste = "nada";
    
    this.start = function(){
        this.peca = new Peca();
        this.tabuleiro = new Tabuleiro();
        var numero = Math.floor((Math.random() * this.pecas_disponiveis.length));
        this.peca.setar_forma(this.pecas_disponiveis[numero]);
        this.gerar_proxima_peca();
        this.tabuleiro.gerar_tabuleiro(10, 20);
        this.render = new DefaultRender();
        this.render.renderizar_tabuleiro(this.tabuleiro);
        this.render.renderizar_peca(this.peca);
        var referencia_this = this;
        setTimeout(function(){referencia_this.step()}, 500);
    };
    
    this.step = function(){
        if (this.game_over ==  true){
            return;
        }
        if (this.paused == true){
            return;
        }
        if (this.movimento_livre() && !(this.peca.y  + 2 + 7 > this.tabuleiro.altura)){
            this.render.limpar_peca(this.peca);
            this.peca.y += 1;
            this.render.renderizar_peca(this.peca);
            var referencia_this = this;
            setTimeout(function(){referencia_this.step()}, 500);
        } else {
            for (var i = 0; i < 4; i++){
                for (var j = 0; j < 4; j++){
                    if (this.peca.matriz[i][j] == 1){
                        this.tabuleiro.matriz[i + this.peca.y][j + this.peca.x] = 1;
                    } 
                }
            }
            this.verificar_linhas();
            this.peca = this.proxima_peca;
            this.gerar_proxima_peca();
            referencia_this = this;
            setTimeout(function(){referencia_this.step()}, 500);
        }
    };
    
    this.verificar_linhas = function(){
        var linha  = null;

        for (var i = this.tabuleiro.altura - 1; i > 0; i--){
            linha = true;
            for (var j = 0; j < this.tabuleiro.largura; j++){
                if (this.tabuleiro.matriz[i][j] == 0){
                    linha = false;
                    break;
                } 
            }
            if (linha == true){
                for (var j = 0; j < this.tabuleiro.largura; j++){
                    style="background-color: #C3C3C3; width: 32px; height: 32px;";
                    $("#celula-" + i + "-" + j).attr("style", style);
                }
                for (var k = i; k > 1; k--){
                    this.tabuleiro.matriz[k] = this.tabuleiro.matriz[k - 1];
                }
                i +=1;
                this.render.renderizar_tabuleiro(this.tabuleiro);
            }
        }
    };
    
    this.movimentar_peca_direita = function(){
        if (this.peca.x + this.peca.direita + 1 + 2 < this.tabuleiro.largura){
            this.peca.x += 1;
            return true;
        } else {
            return false
        }    
    };
    
    this.movimentar_peca_esquerda = function(){
        
        if (this.peca.x - this.peca.esquerda - 1 + 3> 0){
            this.peca.x -= 1;
            return true;
        } else {
            return false;
        }    
    };
    
    this.rotacionar_peca = function(){
        this.peca.rotacionar();  
    };
    
    this.movimento_livre = function(){
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 4; j++){
                if (this.peca.matriz[i][j] == 1){
                    if (this.tabuleiro.matriz[i + this.peca.y + 1][j + this.peca.x] == 1){
                        return false;
                    }
                } 
            }
        }
        return true;
    };
    
    this.gerar_proxima_peca = function(){
        var numero = Math.floor((Math.random() * this.pecas_disponiveis.length));
        this.proxima_peca = new Peca();
        this.proxima_peca.setar_forma(this.pecas_disponiveis[numero]);
    };
}