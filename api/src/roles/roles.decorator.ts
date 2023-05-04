import { SetMetadata } from '@nestjs/common';

export enum Role {
  Member = 'member',
  Admin = 'admin',
  Seller = 'seller',
}

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
