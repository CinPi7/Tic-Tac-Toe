const tic_tac_toe = {
  board: ["", "", "", "", "", "", "", "", ""],
  symbols: ["X", "O"],
  container_element: null,

  init: function (container) {
    this.container_element = container;
  },

  draw: function () {
    let content = "";

    for (let i in this.board) {
      content += "<div>" + i + "</div>";
    }
    this.container_element.innerHTML = content;
  },
};

tic_tac_toe.init(document.querySelector(".game"));
tic_tac_toe.draw();
