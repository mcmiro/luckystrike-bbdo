'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Typography from '../ui/typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '@/lib/form-schema';
import useUser from '@/hooks/use-user';

const RegisterForm = () => {
  const { saveUser } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveUser(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[32px] justify-center pt-[60px] w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vor- und Nachname:</FormLabel>
              <FormControl>
                <Input placeholder="Max Mustermann" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail:</FormLabel>
              <FormControl>
                <Input placeholder="max@mustermann.com" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geburtsdatum:</FormLabel>
              <FormControl>
                <Input placeholder="Tag.Monat.Jahr" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Typography variant="sm" align="center" className="text-white">
          * Ich akzeptiere die Teilnahmebedingungen
        </Typography>
        <div className="flex justify-center">
          <Button variant="outline" size="lg" type="submit">
            Jetzt mitmachen!
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
