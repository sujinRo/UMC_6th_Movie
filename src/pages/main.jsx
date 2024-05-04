import React from 'react';
import '../styles/main.css';

export default function MainPage() {
  return (
    <div className="container">
      <div className="banner">
        <div>환영합니다</div>
      </div>
      <div className="movie_box">
        <div className="title">📽️Find your movies!</div>
        <div className="find_box">
          <input className="input" />
          <div className="find_btn">🔍</div>
        </div>
      </div>
    </div>
  );
}
