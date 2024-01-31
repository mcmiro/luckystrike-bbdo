'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const saveUser = async () => {
      try {
        const response = await fetch('/api/save-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'miro',
            email: 'miro.grujin@hotmail.com',
          }),
        });
        const result = await response.json();
        if (result) {
          console.log('ok', result);
        }
      } catch (error) {
        console.error('Error sending message to Slack:', error);
      }
    };
    saveUser();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
