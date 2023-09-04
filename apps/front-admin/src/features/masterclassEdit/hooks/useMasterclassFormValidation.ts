import { z } from 'zod';

export const useMasterclassFormValidation = () => {
  return z.object({
    id: z.string(),
    title: z
      .string({
        required_error: 'Le titre est obligatoire',
      })
      .min(2, 'Le titre doit faire au moins 2 caractères'),
    description: z
      .string({
        required_error: 'La description est obligatoire',
      })
      .min(10, 'La description doit faire au moins 10 caractères'),
  });
};
