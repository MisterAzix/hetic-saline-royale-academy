import { z } from 'zod';

export const useLoginFormValidation = () => {
  return z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    password: z
      .string({
        required_error: 'Le mot de passe est obligatoire',
      })
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
      .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
      .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
      .regex(
        /[!@#$%^&*(),.?":{}|<>/]/,
        'Le mot de passe doit contenir au moins un caractère spécial'
      ),
  });
};
