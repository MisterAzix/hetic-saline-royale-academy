import 'next-auth/jwt';
import { User } from 'next-auth';

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth' {
  interface User {
    firstName: string;
    lastName: string;
    sub: string;
    email: string;
    role: string;
    access_token: string;
  }

  interface Session {
    user: Omit<User, 'access_token'>;
    access_token: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    user: Omit<User, 'access_token'>;
    access_token: string;
  }
}
