function highlight(table) {
  // let table = document.getElementsByClassName('js-teachers');

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i]; //коллекция строк

    if (row.cells[3].getAttribute('data-available') == "true") {
      row.cells[3].className = "available"
    } else if (row.cells[3].getAttribute('data-available') == "false") {
      row.cells[3].className = "unavailable"
    } else {
      row.cells[3].setAttribute('hidden', hidden)
     }
    }


  for (let i = 1; i < table.rows.length; i++) {
      let row = table.rows[i]; //коллекция строк
    if (row.cells[2].textContent === "m") {
      row.cells[2].classList.add('male')
    } else if (row.cells[2].textContent === "f") {
      row.cells[2].classList.add('female')
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i]; //коллекция строк

    if (row.cells[1].data < 18) {
      row.cells[1].style.textDecoration = "line-through"
    }
  }


}
