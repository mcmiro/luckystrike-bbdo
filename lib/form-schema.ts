import { z } from 'zod';

const germanDateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/;

export const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Erforderlich',
  }),
  email: z
    .string()
    .min(1, { message: 'Erforderlich' })
    .email('Das ist kein gültiges E-Mail Format.'),
  dateOfBirth: z
    .string()
    .min(1, { message: 'Erforderlich' })
    .refine(
      (value) => germanDateRegex.test(value),
      'Das ist kein gültiges Datum Format.'
    ),
});
