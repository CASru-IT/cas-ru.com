import React from "react";
import "./footer.scss"; // SCSSファイルをインポート

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_columns">
        <div className="footer_column footer_column_highlight">
          <ul>
            <li>Top</li>
            <li>About</li>
            <li>Join us</li>
            <li>Groups</li>
            <li>Articles</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>トップページ</li>
            <li>CASるについて</li>
            <li>参加方法</li>
            <li>班一覧</li>
            <li>記事一覧</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>CASる</li>
            <li>DTM班</li>
            <li>IT班</li>
            <li>ゲーム班</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>CASる</li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 CASる</p>
    </footer>
  );
};

export default Footer;
