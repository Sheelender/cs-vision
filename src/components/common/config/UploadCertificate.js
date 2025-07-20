import React, { useState } from "react";
import axios from "axios";

const UploadCertificate = () => {
  const [file, setFile] = useState(null);
  const [uploadResponse, setUploadResponse] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("certificate", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadResponse(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <h2>Upload Certificate</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadResponse && (
        <div>
          <p>Upload Successful!</p>
          <a href={uploadResponse.fileUrl} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadCertificate;
