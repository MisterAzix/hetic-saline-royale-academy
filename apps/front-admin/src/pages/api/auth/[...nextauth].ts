import NextAuth, { AuthOptions, User } from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Role } from '@prisma/client';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProviders({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const url = new URL('/api/auth/login', process.env.API_URL);
        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data: { access_token: string } | null = await res.json();
        if (res.ok && data) {
          const payload = jwt.decode(data.access_token) as JwtPayload;
          if (payload.role !== Role.ADMIN) {
            return null;
          }

          return {
            ...payload,
            access_token: data.access_token,
          } as User;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        const { access_token, ...rest } = user;
        token.access_token = access_token;
        token.user = rest;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.access_token = token.access_token;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
