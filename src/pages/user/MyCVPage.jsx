import React, { useEffect, useState } from 'react';
import { handleGetCV } from '../../utils/user/handleGetCV.js';
import '../../styles/user/MyCVPage.css';

function MyCVPage() {
    const [cvs, setCvs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const loadCVs = async () => {
            try {
                const data = await handleGetCV();
                setCvs(data);
            } catch (err) {
                setErrorMsg(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadCVs();
    }, []);

    return (
        <div className="cv-page">
            <h2>Danh sách CV của bạn</h2>
            {loading ? (
                <p>Đang tải CV...</p>
            ) : errorMsg ? (
                <p style={{ color: 'red' }}>{errorMsg}</p>
            ) : cvs.length === 0 ? (
                <p>Chưa có CV nào.</p>
            ) : (
                <div className="cv-list">
                    {cvs.map((cv) => (
                        <div className="cv-item" key={cv.id}>
                            <h4>CV #{cv.id}</h4>
                            <p className="cv-date">
                                Ngày tải lên: {new Date(cv.created_at).toLocaleString()}
                            </p>
                            <iframe
                                src={cv.file_path} 
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
