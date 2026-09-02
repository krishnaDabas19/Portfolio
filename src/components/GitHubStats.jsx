import React from 'react';
import '../styles/GitHubStats.css';

const GitHubStats = () => {
  return (
    <div className="github-stats-container">
      <h3>GitHub Stats</h3>
      <div className="github-stats-wrapper">
        <img
          src="https://github-readme-stats.vercel.app/api?username=dabaskrishna&show_icons=true&theme=dark&bg_color=0a0f23&text_color=ffffff&title_color=0096ff&icon_color=0096ff&border_color=0096ff&hide_border=false"
          alt="GitHub Stats"
          className="github-stats-img"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=dabaskrishna&layout=compact&theme=dark&bg_color=0a0f23&text_color=ffffff&title_color=0096ff&border_color=0096ff&hide_border=false"
          alt="Top Languages"
          className="github-stats-img"
        />
      </div>
      <p className="github-note">
        📊 Stats powered by{' '}
        <a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener noreferrer">
          GitHub Readme Stats
        </a>
      </p>
    </div>
  );
};

export default GitHubStats;
