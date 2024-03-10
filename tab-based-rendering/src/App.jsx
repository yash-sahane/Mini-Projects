import React, { useState } from 'react';
import './App.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0, title: 'Home', content: [
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
      ]
    },
    {
      id: 1, title: 'About', content: [
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
      ]
    },
    {
      id: 2, title: 'Gallery', content: [
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
        {
          role: 'Product Designer',
          desc: 'Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2+ yera of experience leaded team of4 Worked as a fulltime designer with 2 + yera of experience leaded team of4',
          type: 'Full Time',
          duration: 'Feb 2022 - Present'
        },
      ]
    },
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