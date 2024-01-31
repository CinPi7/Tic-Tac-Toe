const tic_tac_toe = {
  board: ["", "", "", "", "", "", "", "", ""],
  symbols: {
    options: ["X", "O"],
    turn_index: 0,
    change() {
      this.turn_index = this.turn_index === 0 ? 1 : 0;
      console.log("Changed turn_index to", this.turn_index);
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
    console.log("Set symbol to", this.symbols.options[this.symbols.turn_index]);
    this.draw();

    this.is_game_over();

    const winning_sequences = this.check_winning_sequences(currentSymbol);

    if (winning_sequences.indice >= 0) {
      console.log(
        "winning-sequences:",
        winning_sequences.firstField,
        winning_sequences.secondField,
        winning_sequences.thirdField
      );

      let firstField = document.getElementById(
        "cell-" + winning_sequences.firstField
      );
      let secondField = document.getElementById(
        "cell-" + winning_sequences.secondField
      );
      let thirdField = document.getElementById(
        "cell-" + winning_sequences.thirdField
      );
      firstField.style.color = "#f1aef2";
      secondField.style.color = "#f1aef2";
      thirdField.style.color = "#f1aef2";
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
        return {
          indice: i,
          firstField: this.winning_sequences[i][0],
          secondField: this.winning_sequences[i][1],
          thirdField: this.winning_sequences[i][2],
        };
      }
    }

    return no_winning_sequences;
  },

  is_game_over() {
    const is_game_over = this.board.every((field) => field !== "");
    if (is_game_over && !this.winning_sequences) {
      this.gameover = true;
      alert("GAME OVER! Cannot make a move.");
    }
  },

  restart() {
    this.board.fill("");
    this.draw();
    this.gameover = false;
  },

  draw() {
    let content = "";

    for (let i in this.board) {
      content +=
        '<div id="cell-' +
        i +
        '" onclick="tic_tac_toe.play(' +
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
