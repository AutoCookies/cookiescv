import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} CookiesCV. All rights reserved.</p>
        <div className="footer__links">
          <a href="#">Điều khoản</a>
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
