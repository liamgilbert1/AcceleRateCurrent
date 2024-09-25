"use client";
import SimpleLoginForm from './components/login_form';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/backend');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Message from FastAPI</h1>
      <p>{data.message}</p>
      <SimpleLoginForm />
    </div>
  );
}

