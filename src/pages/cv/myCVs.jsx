import { useEffect, useState } from 'react';
import { fetchMyCVs } from '../../utils/cv/fetchMyCVs';
import { deleteCV } from '../../utils/cv/deleteCV';

function MyCVs() {
  const [cvs, setCvs] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const loadCVs = async () => {
    try {
      const data = await fetchMyCVs();
      setCvs(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadCVs();
  }, []);

  const handleDelete = async (cvId) => {
    setError('');
    setMessage('');
    if (!confirm('Are you sure you want to delete this CV?')) return;

    try {
      const msg = await deleteCV(cvId);
      setMessage(msg);
      // Refresh CV list after deletion
      loadCVs();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>My Uploaded CVs</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {cvs.length === 0 ? (
        <p>No CVs uploaded yet.</p>
      ) : (
        <ul>
          {cvs.map((cv) => (
            <li key={cv.id}>
              <a href={cv.file_path} target="_blank" rel="noopener noreferrer">
                View CV #{cv.id}
              </a>{' '}
              <button onClick={() => handleDelete(cv.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyCVs;
