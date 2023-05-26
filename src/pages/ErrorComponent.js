import React, { useEffect, useState } from 'react';

const ErrorComponent = () => {
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/errors?page=1');
        const data = await response.json();
        setErrorData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!errorData) {
    return <div>Loading...</div>;
  }

  const { nom, contenu } = errorData['hydra:member'][0];

  return (
    <div>
      <h1>{nom}</h1>
      <p>{contenu}</p>
    </div>
  );
};

export default ErrorComponent;
