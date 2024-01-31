1. TIC-TAC-TOE

Um exercício, que consiste em um jogo do Tic-Tac-Toe, feito em JavaScript puro, com arquivos HTML e CSS.

Com o JavaScript Object Literal, foi inicializado o board, contendo 9 casas, onde serão preenchicas com "X" ou "O". Este board é desenhado em tela com a criação da função draw em divs complementadas com o CSS - Grid e Flexbox.

O estado do jogo é armazenado em um array chamado board e os símbolos em um objeto. O vetor board representa o tabuleiro do jogo, onde cada elemento corresponde a uma célula no board. O objeto de símbolos mantém em observação o símbolo do jogador atual por meio dos índices 0 e 1.

A função play é onde a mágica acontece. Quando um jogador faz uma jogada, esta função atualiza o estado do jogo e verifica se o jogo está encerrado. Se houver um ganhador, ele ilumina os símbolos das células ganhadoras, se o jogo for todo preenchido e não houve ganhador, não houve vencedor (gameover), e ainda, caso nenhuma das duas situações sejam alcançadas, dá-se sequência ao jogo, alternando o símbolo de acordo com o jogador da vez.

Para vencer o jogo, a função check_winning_sequences verifica se há uma sequência ganhadora no board de acordo com os índices do board.

Caso queira começar um novo jogo, basta pressionar o botão para reiniciar o estado do jogo limpando o board.
