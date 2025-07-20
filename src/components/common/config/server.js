const express = require("express");
const multer = require("multer");
const { google } = require("googleapis");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Google Drive API setup
const auth = new google.auth.GoogleAuth({
  keyFile: "client_secret.json", // Downloaded from Google Cloud
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

// Upload certificate to Google Drive
app.post("/upload", upload.single("certificate"), async (req, res) => {
  try {
    const fileMetadata = {
      name: req.file.originalname,
      parents: ["YOUR_GOOGLE_DRIVE_FOLDER_ID"], // Folder where certificates will be stored
    };

    const media = {
      mimeType: req.file.mimetype,
      body: fs.createReadStream(req.file.path),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink",
    });

    fs.unlinkSync(req.file.path); // Remove file from server after upload

    res.json({
      success: true,
      fileId: response.data.id,
      fileUrl: response.data.webViewLink, // Link to access certificate
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(require("./firebase_service_key.json")),
});
const db = admin.firestore();

app.post("/save-certificate", async (req, res) => {
  try {
    const { studentId, fileUrl } = req.body;
    await db.collection("certificates").doc(studentId).set({ fileUrl });

    res.json({ success: true, message: "Certificate stored successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


