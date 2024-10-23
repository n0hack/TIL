import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';

export const ROLES_KEY = 'roles';

// 메타데이터 설정
export const Roles = (...roles: [Role, ...Role[]]) => SetMetadata(ROLES_KEY, roles);
