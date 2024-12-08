import React, { Fragment, useEffect, useState } from "react"
import './StudentTest.css'
import axios from "axios";
import Login from "./Login";
import Question from "./Question";


const StudentTest = ({ setName }) => {
    const [data, setData] = useState(null);
    const [valid, isValid] = useState(true);

    useEffect(() => {
        setName('topHead');
        const fetchData = async () => {
            try {

                const sheetId = process.env.REACT_APP_GOOGLE_SHEETS_ID;
                const range = process.env.REACT_APP_GOOGLE_SHEETS_Range;
                const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;

                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
                );

                // Store the fetched data in state
                setData(response.data.values);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        !valid
            ?
            <Login data={data} isValid={isValid} />
            :
            <Question></Question>

    )
}

export default StudentTest
