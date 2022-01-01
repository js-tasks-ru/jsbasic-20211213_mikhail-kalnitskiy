let table = document.querySelector('table');

function makeDiagonalRed(table) {


    function makeDiagonalRed(table) {
      for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
    return;
    };

    makeDiagonalRed(table);
}
