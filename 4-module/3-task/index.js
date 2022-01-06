function highlight(table) {
  // let table = document.getElementsByClassName('js-teachers');

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i]; //коллекция строк

    if (row.cells[3].getAttribute('data-available') == "true") {
      row.classList.add("available");
    } else if (row.cells[3].getAttribute('data-available') == "false") {
      row.classList.add("unavailable");
    } else {
      row.setAttribute('hidden', true)
     }
    }


  for (let i = 1; i < table.rows.length; i++) {
      let row = table.rows[i]; //коллекция строк
    if (row.cells[2].textContent === "m") {
      row.classList.add('male')
    } else if (row.cells[2].textContent === "f") {
      row.classList.add('female')
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i]; //коллекция строк

    if (row.cells[1].textContent < 18) {
      row.style.textDecoration = "line-through"
    }
  }


}
