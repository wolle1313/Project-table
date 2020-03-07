let container = document.querySelector(".container");
const labels = document.querySelectorAll(".lab");
const text = document.querySelector(".text");
const dateMonth = new Date().getMonth();
const dateYear = new Date().getFullYear();
let sortedBy = "done";
let sortingNumber = 1;
let usedClientData = [];
compareA = "";
compareB = "";

function compare(a, b) {
  if (this.className.includes("id")) {
    compareA = a.id;
    compareB = b.id;
  }
  if (this.className.includes("total")) {
    compareA = a.totalIncome;
    compareB = b.totalIncome;
  }
  if (this.className.includes("average")) {
    compareA = a.averageIncome;
    compareB = b.averageIncome;
  }
  if (this.className.includes("name")) {
    compareA = a.name;
    compareB = b.name;
  }
  if (this.className.includes("city")) {
    compareA = a.city;
    compareB = b.city;
  }
  if (this.className.includes("lastMonth")) {
    compareA = a.lastMonthIncome;
    compareB = b.lastMonthIncome;
  }

  let comparison = 0;
  if (compareA > compareB) {
    comparison = 1;
  } else if (compareA < compareB) {
    comparison = -1;
  }
  if (
    (this.className.includes("city") && sortedBy === "city") ||
    (this.className.includes("id") && sortedBy === "id") ||
    (this.className.includes("name") && sortedBy === "name") ||
    (this.className.includes("average") && sortedBy === "average") ||
    (this.className.includes("total") && sortedBy === "total") ||
    (this.className.includes("lastMonth") && sortedBy === "lastMonth")
  ) {
    return comparison * -1;
  }
  return comparison;
}

const handleSort = function() {
  let newClientData = [...usedClientData];
  const sortedArray = newClientData.sort(compare.bind(this));
  renderAfterSort(sortedArray);
  if (this.className.includes("id") && !(sortedBy === "id")) {
    sortedBy = "id";
  } else if (this.className.includes("name") && !(sortedBy === "name")) {
    sortedBy = "name";
  } else if (this.className.includes("city") && !(sortedBy === "city")) {
    sortedBy = "city";
  } else if (this.className.includes("average") && !(sortedBy === "average")) {
    sortedBy = "average";
  } else if (this.className.includes("total") && !(sortedBy === "total")) {
    sortedBy = "total";
  } else if (
    this.className.includes("lastMonth") &&
    !(sortedBy === "lastMonth")
  ) {
    sortedBy = "lastMonth";
  } else if (!(sortedBy === "done")) {
    sortedBy = "done";
  }
};

const findElement = (data, value) => {
  return (
    data.name.toLowerCase().includes(value) ||
    data.city.toLowerCase().includes(value) ||
    data.id.toString().includes(value) ||
    data.totalIncome.toString().includes(value) ||
    data.averageIncome.toString().includes(value)
  );
};
const handleInput = function(e) {
  const value = e.target.value;
  usedClientData = [...clientData];
  usedClientData = usedClientData.filter(data => findElement(data, value));
  renderAfterSort(usedClientData);
};

clientDataBaseFetch();

setTimeout(() => renderWholeData(clientData), 3000);

text.addEventListener("input", handleInput);
text.addEventListener("change", handleInput);
labels.forEach(label => {
  label.addEventListener("click", handleSort);
});
