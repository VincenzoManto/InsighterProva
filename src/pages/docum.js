// Frontend code in your Docusaurus site
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DocumentationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const owner = queryParams.get('owner');
  const repo = queryParams.get('repo');
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    if (owner && repo) {
      // Fetch sidebar configuration from backend API
      fetch(`/api/docs?owner=${owner}&repo=${repo}`)
        .then(response => response.json())
        .then(data => {
          setSidebar(data.sidebar);
        })
        .catch(error => {
          console.error('Error fetching sidebar:', error);
        });
    }
  }, [owner, repo]);

  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        {sidebar.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentationPage;
