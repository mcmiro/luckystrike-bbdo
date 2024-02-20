import { formSchema } from '@/lib/form-schema';
import { useState } from 'react';
import { boolean, z } from 'zod';

export interface UserProps {
  fullName: string;
  email: string;
  dateOfBirth: string;
}

const useUser = () => {
  const [responseStatus, setResponseStatus] = useState<boolean>(false);

  const handleDateNow = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  const handleGermanDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.').map(Number);
    const mysqlDate = `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`;
    return mysqlDate;
  };

  const saveUser = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/save-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          dateOfBirth: handleGermanDate(values.dateOfBirth),
          createdAt: handleDateNow(),
        }),
      });
      const result = await response.json();
      if (result) {
        setResponseStatus(true);
      }
    } catch (error) {
      console.error('Error sending message to Slack:', error);
    }
  };

  return {
    saveUser,
    responseStatus,
  };
};

export default useUser;
