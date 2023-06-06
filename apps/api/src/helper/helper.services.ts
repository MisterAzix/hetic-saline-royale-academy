import { randomBytes } from 'crypto';
export const generateRandomPassword = (length) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  const charactersLength = characters.length;

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = randomBytes(1)[0] % charactersLength;
    password += characters.charAt(randomIndex);
  }

  return password;
};
