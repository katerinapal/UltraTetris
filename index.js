
        var jogo = null;
        $(document).ready(function(){
            jogo = new Tetris();
            jogo.start();
            $(document).bind("keyup", function(evento){
                if (evento.which == 37){
                    jogo.render.limpar_peca(jogo.peca);
                    jogo.movimentar_peca_esquerda();
                    clearTimeout();
                    jogo.render.renderizar_peca(jogo.peca);
                    
                } else if (evento.which == 39){
                    jogo.render.limpar_peca(jogo.peca);
                    jogo.movimentar_peca_direita();
                    jogo.render.renderizar_peca(jogo.peca);
                    
                } else if (evento.which == 32){
                    jogo.render.limpar_peca(jogo.peca);
                    jogo.rotacionar_peca();
                    jogo.render.renderizar_peca(jogo.peca);
                    
                } else if (evento.which == 40){

                    // limpar_peca(peca);
                    jogo.render.limpar_peca(jogo.peca);

                    // peca.y += 1;
                    jogo.peca.y += 1;

                    // renderizar_peca(peca);
                    jogo.render.renderizar_peca(jogo.peca);
                }
            });
        });
    