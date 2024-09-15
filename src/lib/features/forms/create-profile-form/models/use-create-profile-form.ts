import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CreateProfileFormDataType,
  CreateProfileFormSchema,
} from '@/features/forms/create-profile-form/models/schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useCreateProfileForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateProfileFormDataType>({
    resolver: zodResolver(CreateProfileFormSchema),
    mode: 'onSubmit',
    defaultValues: { name: 'Phil' },
  });

  const onFormSubmit: SubmitHandler<CreateProfileFormDataType> = async (
    data
  ) => {
    console.log(data);
  };

  return {
    watch,
    isLoading: isSubmitting,
    onFormSubmit: handleSubmit(onFormSubmit),
    name: {
      register: register('name'),
      error: errors.name?.message,
    },
    avatar: {
      register: register('avatar'),
      error: errors.avatar?.message,
    },
  };
};
