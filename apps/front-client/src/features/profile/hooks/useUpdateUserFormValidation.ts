import { z } from 'zod';

export const useUpdateUserFormValidation = () => {
  return z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
  });
};
