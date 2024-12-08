const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const sheets = google.sheets('v4');

// Set up your Google Sheets API credentials here
const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/your/service-account-key.json', // Service account key file
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Replace with your actual Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

app.post('/submit', async (req, res) => {
    const { name, mobile, email, course } = req.body;

    try {
        const client = await auth.getClient();
        const response = await sheets.spreadsheets.values.append({
            auth: client,
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:D', // Adjust the range as needed
            valueInputOption: 'RAW',
            resource: {
                values: [[name, mobile, email, course]],
            },
        });

        res.status(200).send('Data added to Google Sheets');
    } catch (error) {
        console.error('Error writing to Google Sheets:', error);
        res.status(500).send('Failed to add data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
