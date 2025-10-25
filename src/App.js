import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>K-Le PaaS Frontend Test</h1>
        <p>쿠버네티스 자동화 배포 테스트용 프런트엔드 애플리케이션</p>
        <div className="status">
          <span className="status-indicator">🟢</span>
          <span>서비스 정상 동작 중</span>
        </div>
      </header>
    </div>
  );
}

export default App;
