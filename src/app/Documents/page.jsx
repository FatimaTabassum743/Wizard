// pages/documents.js
'use client'
import { useState } from 'react';

const Documents = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const handleFileChange = (event, setFileState) => {
    const file = event.target.files[0];

    if (file) {
      setFileState(file);
    }
  };

  return (
    
       <div className=" flex border border-gray-400 flex-wrap w-[200%] rounded-lg p-24 m-10 max-w-xs md:max-w-lg mx-auto gap-5">
       <div><h3>Upload Appointment Letter</h3>
        <div className=' border-gray-600 
        rounded-lg p-8 h-36 w-64 border-dotted border'>
          
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e, setFile1)}
          style={{ display: 'none' }}
          id="fileInput1"
        />
        {file1 ? (
          <div>
            <p>{file1.name}</p>
          </div>
        ) : (
          <label htmlFor="fileInput1" style={{ cursor: 'pointer' }}>
           <svg xmlns="http://www.w3.org/2000/svg" className='w-24 h-24 ml-10' viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4
           -9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
          </label>
        )}
      </div>

      {/* Repeat the above structure for the remaining sections */}
      {/* ... */}

    </div>
    <div><h3>Upload Appointment Letter</h3>
        <div className=' border-gray-600 
        rounded-lg p-8 h-36 w-64 border-dotted border'>
          
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e, setFile1)}
          style={{ display: 'none' }}
          id="fileInput1"
        />
        {file1 ? (
          <div>
            <p>{file1.name}</p>
          </div>
        ) : (
          <label htmlFor="fileInput1" style={{ cursor: 'pointer' }}>
           <svg xmlns="http://www.w3.org/2000/svg" className='w-24 h-24 ml-10' viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4
           -9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
          </label>
        )}
      </div>

      {/* Repeat the above structure for the remaining sections */}
      {/* ... */}

    </div>

    <div><h3>Upload Appointment Letter</h3>
        <div className=' border-gray-600 
        rounded-lg p-8 h-36 w-64 border-dotted border'>
          
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e, setFile1)}
          style={{ display: 'none' }}
          id="fileInput1"
        />
        {file1 ? (
          <div>
            <p>{file1.name}</p>
          </div>
        ) : (
          <label htmlFor="fileInput1" style={{ cursor: 'pointer' }}>
           <svg xmlns="http://www.w3.org/2000/svg" className='w-24 h-24 ml-10' viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4
           -9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
          </label>
        )}
      </div>

      {/* Repeat the above structure for the remaining sections */}
      {/* ... */}

    </div>
    <div><h3>Upload Appointment Letter</h3>
        <div className=' border-gray-600 
        rounded-lg p-8 h-36 w-64 border-dotted border'>
          
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e, setFile1)}
          style={{ display: 'none' }}
          id="fileInput1"
        />
        {file1 ? (
          <div>
            <p>{file1.name}</p>
          </div>
        ) : (
          <label htmlFor="fileInput1" style={{ cursor: 'pointer' }}>
           <svg xmlns="http://www.w3.org/2000/svg" className='w-24 h-24 ml-10' viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4
           -9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
          </label>
        )}
      </div>

      {/* Repeat the above structure for the remaining sections */}
      {/* ... */}

    </div>
    </div>
    
  );
};

export default Documents;
