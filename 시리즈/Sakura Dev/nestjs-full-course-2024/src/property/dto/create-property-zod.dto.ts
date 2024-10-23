import { z } from 'zod';

export const createPropertySchema = z
  .object({
    name: z.string().min(2, '2글자 이상 20글자 이하이어야 합니다.').max(20),
    description: z.string(),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
