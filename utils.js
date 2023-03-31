function createList(items, tableId, btnText, functionName) {
  const table = document.getElementById(tableId);
  items.forEach((item, pos) => {
    let row = document.createElement("tr");
    let itemAttributes = Object.values(item);
    table.appendChild(row);

    itemAttributes.forEach((attribute, index) => {
      let data = document.createElement("td");
      data.classList.add(`${tableId}-${index}`, `movie-${pos}`);
      data.innerHTML = attribute;
      row.appendChild(data);
    });

    let stock = document.querySelectorAll(`.${tableId}-3`);
    let count = itemAttributes[3];
    if (count === 0) {
      stock[`${pos}`].innerHTML = `<img src="img/cross.png">`;
    } else {
      stock[`${pos}`].innerHTML = `<img src="img/check.png">`;
    }

    row.innerHTML += `
    <td>
    <button id="btn-${pos}" class="${tableId}-button" onclick="${functionName}(${pos})">
    ${btnText}
    </button>
    </td>
    `;
  });
  return table;
}
