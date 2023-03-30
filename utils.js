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