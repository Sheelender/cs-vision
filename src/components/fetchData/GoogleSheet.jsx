// Import Axios
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const GoogleSheet = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Use your Google Sheet's API URL
//                 const sheetId = "10s--EvVAKZZamo_kOOL8s77cfiN7RgHKFFALMBsqymU"; // Replace with your actual sheet ID
//                 const range = "Sheet1!A1:D10"; // Replace with the desired range
//                 const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY; // Replace with your API key

//                 const response = await axios.get(
//                     `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${apiKey}`
//                 );

//                 // Set the data into the state
//                 setData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Google Sheet Metadata</h1>
//             {data ? (
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <th>Sheet Title</th>
//                             <th>Sheet ID</th>
//                             <th>Sheet Type</th>
//                             <th>Row Count</th>
//                             <th>Column Count</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.sheets.map((sheet) => (
//                             <tr key={sheet.properties.sheetId}>
//                                 <td>{sheet.properties.title}</td>
//                                 <td>{sheet.properties.sheetId}</td>
//                                 <td>{sheet.properties.sheetType}</td>
//                                 <td>{sheet.properties.gridProperties?.rowCount}</td>
//                                 <td>{sheet.properties.gridProperties?.columnCount}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>Loading sheet metadata...</p>
//             )}
//         </div>
//     );
// };

// export default GoogleSheet;

import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleSheet = () => {
    const [sheetData, setSheetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Your Google Sheet ID
                const sheetId = "10s--EvVAKZZamo_kOOL8s77cfiN7RgHKFFALMBsqymU"; // Replace with your actual sheet ID
                const range = "StudentsData!B4:L500"; // Replace with the desired range
                const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY; // Replace with your API key

                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
                );

                // Store the fetched data in state
                setSheetData(response.data.values);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Google Sheet Data from Sheet1</h1>
            {sheetData ? (
                <table border="1">
                    <thead>
                        <tr>
                            {sheetData[0].map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sheetData.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading sheet data...</p>
            )}
        </div>
    );
};

export default GoogleSheet;

