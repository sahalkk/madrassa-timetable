// api.js
const fetchData = () => {
  let SHEET_ID = "1cYBL-8HTymg53opj6Y5T2_UIIC4ELlHUCvMz4TzPF9E";
  let SHEET_TITLE = "Sheet1";
  let SHEET_RANGE = "A1:E110";
  let FULL_URL =
    "https://docs.google.com/spreadsheets/d/" +
    SHEET_ID +
    "/gviz/tq?sheet=" +
    SHEET_TITLE +
    "&range=" +
    SHEET_RANGE;

  return fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      return data;
    })
    .catch((err) => {
      console.log("errrr", err);
    });
};

export default fetchData;
