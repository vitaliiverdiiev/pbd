import { z } from 'zod';

export const CreateProfileFormSchema = z.object({
  name: z.string().optional(),
  avatar: z.any().optional(),
});

export type CreateProfileFormDataType = z.infer<typeof CreateProfileFormSchema>;
