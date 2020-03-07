const renderWholeData = array => {
  usedClientData = [...clientData];
  container.innerHTML = "";
  array.forEach(data => {
    let sum = 0;
    let average = 0;
    let lastMonth = 0;
    let dataCopy = { ...data };

    const div = document.createElement("ul");
    const id = document.createElement("li");
    const number = document.createElement("li");
    const name = document.createElement("li");
    const city = document.createElement("li");
    const totalInc = document.createElement("li");
    const averageInc = document.createElement("li");
    const lastMonthInc = document.createElement("li");
    data.incomes.forEach(value => {
      sum += parseInt(value.value);
    });
    dataCopy.incomes.forEach(e => {
      let loadedDate = new Date(e.date);
      let onlyMonth = loadedDate.getMonth();
      let onlyYear = loadedDate.getFullYear();
      //Here you can change month for example (
      if (
        onlyMonth == (dateMonth == 0 ? 11 : dateMonth - 1) &&
        onlyYear == (dateMonth == 0 ? dateYear - 1 : dateYear)
      ) {
        lastMonth += parseInt(e.value);
      }
    });
    average = sum / data.incomes.length;

    data.totalIncome = sum;
    data.averageIncome = average;
    data.lastMonthIncome = lastMonth;
    id.textContent = data.id;
    name.textContent = data.name;
    city.textContent = data.city;
    totalInc.textContent = sum;
    averageInc.textContent = average;
    lastMonthInc.textContent = lastMonth;
    number.textContent = sortingNumber;
    number.classList.add("number");
    container.appendChild(div);
    div.appendChild(number);
    div.appendChild(id);
    div.appendChild(name);
    div.appendChild(city);
    div.appendChild(totalInc);
    div.appendChild(averageInc);
    div.appendChild(lastMonthInc);

    sortingNumber++;
  });
  sortingNumber = 1;
};

const renderAfterSort = array => {
  container.innerHTML = "";
  array.forEach(data => {
    const div = document.createElement("ul");
    const id = document.createElement("li");
    const number = document.createElement("li");
    const name = document.createElement("li");
    const city = document.createElement("li");
    const totalInc = document.createElement("li");
    const averageInc = document.createElement("li");
    const lastMonthInc = document.createElement("li");

    id.textContent = data.id;
    name.textContent = data.name;
    city.textContent = data.city;
    totalInc.textContent = data.totalIncome;
    averageInc.textContent = data.averageIncome;
    lastMonthInc.textContent = data.lastMonthIncome;
    number.textContent = sortingNumber;
    number.classList.add("number");

    container.appendChild(div);
    div.appendChild(number);
    div.appendChild(id);
    div.appendChild(name);
    div.appendChild(city);
    div.appendChild(totalInc);
    div.appendChild(averageInc);
    div.appendChild(lastMonthInc);

    sortingNumber++;
  });
  sortingNumber = 1;
};
