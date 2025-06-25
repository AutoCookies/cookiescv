import React, { useEffect, useState } from 'react';
import { handleGetCV } from '../../utils/user/handleGetCV.js';
import { handleUploadCV } from '../../utils/user/handleUploadCV.js';
import '../../styles/user/MyCVPage.css';
import { handleGetCVUrl } from '../../utils/user/handleGetCVUrl.js';

function MyCVPage() {
    const [cvs, setCvs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');

    useEffect(() => {
        const loadCVs = async () => {
            try {
                const data = await handleGetCV();
                const withSignedUrls = await Promise.all(
                    data.map(async (cv) => {
                        const signedUrl = await handleGetCVUrl(cv.id);
                        return { ...cv, signedUrl };
                    })
                );
                setCvs(withSignedUrls);
            } catch (err) {
                setErrorMsg(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadCVs();
    }, []);


    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setUploading(true);
        setUploadError('');

        try {
            const newCV = await handleUploadCV(file);
            setCvs((prev) => [newCV, ...prev]);
        } catch (err) {
            setUploadError(err.message);
        } finally {
            setUploading(false);
            e.target.value = null; // reset input
        }
    };

    return (
        <div className="cv-page">
            <h2>Danh sách CV của bạn</h2>

            <div className="upload-section">
                <label htmlFor="upload-cv">Tải lên CV mới:</label>{' '}
                <input
                    type="file"
                    id="upload-cv"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    disabled={uploading}
                />
                {uploading && <p>Đang tải lên...</p>}
                {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
            </div>

            {loading ? (
                <p>Đang tải CV...</p>
            ) : errorMsg ? (
                <p style={{ color: 'red' }}>{errorMsg}</p>
            ) : !Array.isArray(cvs) || cvs.length === 0 ? (
                <p>Không có CV.</p>
            ) : (
                <div className="cv-list">
                    {cvs.map((cv) => (
                        <div className="cv-item" key={cv.id}>
                            <h4>CV #{cv.id}</h4>
                            <p className="cv-date">
                                Ngày tải lên: {new Date(cv.created_at || Date.now()).toLocaleString()}
                            </p>
                            <iframe
                                src={cv.signedUrl}
                                title={`CV ${cv.id}`}
                                className="cv-pdf"
                                frameBorder="0"
                                allowFullScreen
                                style={{ width: '100%', height: '600px' }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyCVPage;
