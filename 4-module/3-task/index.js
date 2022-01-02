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
    if (row.cells[2].data == "male") {
      row.cells[2].classList.add = "m"
    } else if (row.cells[2].data == "female") {
      row.cells[2].classList.add = "f"
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i]; //коллекция строк

    if (row.cells[1].data < 18) {
      row.cells[1].style = "text-decoration: line-through"
    }
  }


}
