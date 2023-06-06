import { SetMetadata } from '@nestjs/common';

// Les routes public
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
