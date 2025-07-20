import React, { useState } from "react";
import axios from "axios";

const RetrieveCertificate = () => {
  const [studentId, setStudentId] = useState("");
  const [certificateUrl, setCertificateUrl] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get-certificate/${studentId}`);
      setCertificateUrl(response.data.fileUrl);
    } catch (error) {
      console.error("Certificate not found:", error);
    }
  };

  return (
    <div>
      <h2>Retrieve Your Certificate</h2>
      <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Enter Your ID" />
      <button onClick={handleSearch}>Search</button>

      {certificateUrl && (
        <div>
          <p>Your Certificate:</p>
          <a href={certificateUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      )}
    </div>
  );
};

export default RetrieveCertificate;
