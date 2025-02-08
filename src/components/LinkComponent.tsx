import React, { useState, useEffect } from 'react';

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
}

const LinkComponent = ({ folderId }: { folderId: string }) => {
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);

  useEffect(() => {
    const apiKey = "AIzaSyACQLVbDM6D2wEdDWVzWyrA1Ig9p8ujluk";
    const query = encodeURIComponent(`'${folderId}' in parents`);
    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${apiKey}&fields=files(id,name,mimeType)`; // Ajout du mimeType

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.files) {
          setFiles(data.files.filter((file: GoogleDriveFile) => file.mimeType === 'application/pdf')); // Filtrage des PDFs
        } else {
          console.error("No files found:", data);
        }
      })
      .catch((error) => {
        console.error("Error finding files:", error);
      });
  }, [folderId]);

  return (
    <div>
      {files.length > 0 ? (
        files.map((file) => (
          <div key={file.id}>
            <a
              href={`https://drive.google.com/uc?export=download&id=${file.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </a>
          </div>
        ))
      ) : (
        <p>No PDF files found.</p>
      )}
    </div>
  );
};

export default LinkComponent;
