import { useState } from 'react';
import { handleUploadCV } from '../../utils/cv/upload';

function UploadCV() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const result = await handleUploadCV(file);
      setMessage(result.message || 'Upload successful!');
      setFile(null);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Upload Your CV</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <br /><br />
        <button type="submit">Upload</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UploadCV;