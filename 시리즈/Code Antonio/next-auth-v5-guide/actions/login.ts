'use server';

import { LoginSchema } from '@/schemas';
import { z } from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFileds = LoginSchema.safeParse(values);

  if (!validatedFileds.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};
