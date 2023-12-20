import React from "react";

const timetables = {
  1: [
    {
      day: "Monday",
      period1: ["Saheer", "Arabic"],
      period2: ["Fayiz", "Qur'an"],
    },
    {
      day: "Tuesday",
      period1: ["Saheer", "Arabic"],
      period2: ["Zuhair", "Poonilavu"],
    },
    {
      day: "Wednesday",
      period1: ["Saheer", "Arabic"],
      period2: ["Shamshad", "Prarthana"],
    },
    {
      day: "Thurday",
      period1: ["Saheer", "Arabic"],
      period2: ["Fayiz", "Qur'an"],
    },
  ],
  "Pre-2": [
    {
      day: "Monday",
      period1: ["Zuhair", "Arabic"],
      period2: ["Afham", "Qur'an"],
    },
    {
      day: "Tuesday",
      period1: ["Zuhair", "Arabic"],
      period2: ["Shamshad", "Prarthana"],
    },
    {
      day: "Wednesday",
      period1: ["Zuhair", "Arabic"],
      period2: ["Rashid", "Islamic Studies"],
    },
    {
      day: "Thurday",
      period1: ["Zuhair", "Arabic"],
      period2: ["Afham", "Qur'an"],
    },
  ],
  2: [
    {
      day: "Monday",
      period1: ["Shamshad", "Qur'an"],
      period2: ["Zuhair", "Karmam"],
    },
    {
      day: "Tuesday",
      period1: ["Shamshad", "Hifz"],
      period2: ["Fayiz", "Arabic"],
    },
    {
      day: "Wednesday",
      period1: ["Shamshad", "Qur'an"],
      period2: ["Khairulla", "Wishwa/Charithra"],
    },
    {
      day: "Thurday",
      period1: ["Shamshad", "Hifz"],
      period2: ["Rashid", "Swabavam"],
    },
  ],
  3: [
    {
      day: "Monday",
      period1: ["Khairulla", "Qur'an"],
      period2: ["Saheer", "Karmam"],
    },
    {
      day: "Tuesday",
      period1: ["Khairulla", "Hifz"],
      period2: ["Rashid", "Swabavam"],
    },
    {
      day: "Wednesday",
      period1: ["Khairulla", "Qur'an"],
      period2: ["Afham", "Wishwa/Charithra"],
    },
    {
      day: "Thurday",
      period1: ["Khairulla", "Hifz"],
      period2: ["Zuhair", "Arabic"],
    },
  ],
  4: [
    {
      day: "Monday",
      period1: ["Fayiz", "Qur'an"],
      period2: ["Khairulla", "Arabic"],
    },
    {
      day: "Tuesday",
      period1: ["Fayiz", "Qur'an"],
      period2: ["Afham", "Wishwasam"],
    },
    {
      day: "Wednesday",
      period1: ["Fayiz", "Qur'an"],
      period2: ["Saheer", "Karmam"],
    },
    {
      day: "Thurday",
      period1: ["Fayiz", "Thajweed/Qur'an"],
      period2: ["Shamshad", "Swabavam/Charithram"],
    },
  ],
  5: [
    {
      day: "Monday",
      period1: ["Shamshad", "Qur'an"],
      period2: ["Zuhair", "Karmam"],
    },
    {
      day: "Tuesday",
      period1: ["Shamshad", "Hifz"],
      period2: ["Fayiz", "Arabic"],
    },
    {
      day: "Wednesday",
      period1: ["Shamshad", "Qur'an"],
      period2: ["Khairulla", "Wishwa/Charithra"],
    },
    {
      day: "Thurday",
      period1: ["Shamshad", "Hifz"],
      period2: ["Rashid", "Swabavam"],
    },
  ],
  6: [
    {
      day: "Monday",
      period1: ["Rashid", "Qur'an"],
      period2: ["Shamshad", "Swabavam"],
    },
    {
      day: "Tuesday",
      period1: ["Rashid", "Hifz"],
      period2: ["Khairulla", "Arabic"],
    },
    {
      day: "Wednesday",
      period1: ["Rashid", "Qur'an"],
      period2: ["Zuhair", "Wishwasam"],
    },
    {
      day: "Thurday",
      period1: ["Rashid", "Hifz"],
      period2: ["Saheer", "Karmam/Charitra"],
    },
  ],
  7: [
    {
      day: "Monday",
      period1: ["Saheer", "Hifz"],
      period2: ["Asif", "Charithram"],
    },
    {
      day: "Tuesday",
      period1: ["Saheer", "Qur'an"],
      period2: ["Asif", "Wishwasam"],
    },
    {
      day: "Wednesday",
      period1: ["Saheer", "Hifz"],
      period2: ["Asif", "Hadees/Thafseer"],
    },
    {
      day: "Thurday",
      period1: ["Saheer", "Karmam"],
      period2: ["Asif", "Arabic"],
    },
  ],
  8: [
    {
      day: "Monday",
      period1: ["Asif", "Hifz"],
      period2: ["Saheer", "Karmam"],
    },
    {
      day: "Tuesday",
      period1: ["Asif", "Qur'an"],
      period2: ["Saheer", "Hadees/Thafseer"],
    },
    {
      day: "Wednesday",
      period1: ["Asif", "Hifz"],
      period2: ["Saheer", "Charithram"],
    },
    {
      day: "Thurday",
      period1: ["Asif", "Arabic"],
      period2: ["Saheer", "Wishwasam"],
    },
  ],
};

function ClassTable({ classNumber }) {
  console.log("classNumber:", classNumber);
  console.log("Number(classNumber):", Number(classNumber));
  console.log(
    "timetables[Number(classNumber)]:",
    timetables[Number(classNumber)]
  );
  if (classNumber === "0") {
    return <div>Please select a class.</div>;
  }
  const timetable = timetables[classNumber];

  if (!timetable) {
    return <div>No timetable available for this class.</div>;
  }

  return (
    <table
      className="table-auto mt-2 md:mt-6"
      style={{ border: "1px solid black", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "10px" }}>Day</th>
          <th style={{ border: "1px solid black", padding: "10px" }}>
            Period 1
          </th>
          <th style={{ border: "1px solid black", padding: "10px" }}>
            Period 2
          </th>
        </tr>
      </thead>
      <tbody>
        {timetable.map((row) => (
          <>
            <tr>
              <td
                style={{ border: "1px solid black", padding: "10px" }}
                rowSpan={2}
              >
                {row.day}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {row.period1[0]}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {row.period2[0]}
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {row.period1[1]}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {row.period2[1]}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default ClassTable;
