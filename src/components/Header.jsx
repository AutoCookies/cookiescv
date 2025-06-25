import { handleLogout } from '../utils/handleLogout';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await handleLogout();
      setUser(null);
      navigate('/login');
    } catch (err) {
      alert('Đăng xuất thất bại: ' + err.message);
    }
  };

  return (
    <header className="header">
      <div className="header__title">CookiesCV</div>

      <div className="header__routes">
        {user?.role === 'user' && (
          <Link to="/manage-cv" className="btn cv-manage">Quản lý CV</Link>
        )}
        {/* Bạn có thể thêm các route riêng cho role khác như recruiter/moderator nếu muốn */}
      </div>

      <div className="header__actions">
        {user ? (
          <>
            <div className="user-info">
              <img
                src={user.avatar || `https://i.pravatar.cc/40?u=${user.email}`}
                alt="Avatar"
                className="avatar"
              />
              <span>{user.fullname}</span>
            </div>
            <button onClick={onLogout} className="btn logout">Đăng xuất</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn login">Đăng nhập</Link>
            <Link to="/register" className="btn register">Đăng ký</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
