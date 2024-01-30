const tic_tac_toe = {
  board: ["", "", "", "", "", "", "", "", ""],
  symbols: {
    options: ["X", "O"],
    turn_index: 0,
    change() {
      this.turn_index = this.turn_index === 0 ? 1 : 0;
    },
  },
  container_element: null,
  gameover: false,
  winning_sequences: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  init(container) {
    this.container_element = container;
  },

  play(position) {
    const currentSymbol = this.symbols.options[this.symbols.turn_index];
    this.board[position] = currentSymbol;
    this.draw();

    this.is_game_over();

    const winning_sequences_index = this.check_winning_sequences(currentSymbol);
    if (winning_sequences_index >= 0) {
      return;
    } else {
      this.symbols.change();
    }
  },

  check_winning_sequences(currentSymbol) {
    const no_winning_sequences = -1;

    for (let i in this.winning_sequences) {
      const firstField = this.board[this.winning_sequences[i][0]];
      const secondField = this.board[this.winning_sequences[i][1]];
      const thirdField = this.board[this.winning_sequences[i][2]];

      if (
        firstField === currentSymbol &&
        secondField === currentSymbol &&
        thirdField === currentSymbol
      ) {
        alert("The WINNER is char " + currentSymbol);
        return i;
      }
    }

    return no_winning_sequences;
  },

  is_game_over() {
    const is_game_over = this.board.every((field) => field !== "");
    if (is_game_over) {
      alert("GAME OVER");
    }
  },

  draw() {
    let content = "";

    for (let i in this.board) {
      content +=
        '<div onclick="tic_tac_toe.play(' +
        i +
        ')">' +
        this.board[i] +
        "</div>";
    }
    this.container_element.innerHTML = content;
  },
};

tic_tac_toe.init(document.querySelector(".game"));
tic_tac_toe.draw();
