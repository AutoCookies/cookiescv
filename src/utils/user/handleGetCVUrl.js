import ENVAR from '../../config/env';

export const handleGetCVUrl = async (cvId) => {
  const res = await fetch(`${ENVAR.API_ROUTE}/user/cv/${cvId}/url`, {
    credentials: 'include',
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Không lấy được signed URL');

  return data.signedUrl;
};
