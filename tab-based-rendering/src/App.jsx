import React, { useState } from 'react';
import './App.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Home', content: 'This is a Home page' },
    { id: 1, title: 'About', content: 'This is a About page' },
    { id: 2, title: 'Gallery', content: 'This is a Gallery page' },
  ];

  const tabHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="main">
      <div className="tab-container">
        <ul className="tab-list">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => tabHandler(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default TabComponent;