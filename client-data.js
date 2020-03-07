let clientData = [];

async function clientDataFetch() {
  const response = await fetch("https://recruitment.hal.skygate.io/companies");
  const clientDataJson = await response.json();
  return clientDataJson;
}

async function clientDataBaseFetch() {
  try {
    clientData = await clientDataFetch();

    clientData.forEach(async function(data) {
      try {
        const response = await fetch(
          "https://recruitment.hal.skygate.io/incomes/" + data.id
        );
        const responseJson = await response.json();
        data.incomes = responseJson.incomes;
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
