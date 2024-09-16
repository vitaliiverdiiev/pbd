'use client';

import { useCreateProfileForm } from '@/features/forms/create-profile-form/models/use-create-profile-form';
import { Button } from '@/shared/ui';
import { ImageUploader } from '@/shared/ui/upload-image/ui/upload-image';
import { Loader } from 'lucide-react';

export const CreateProfileForm = () => {
  const { avatar, name, isLoading, onFormSubmit } = useCreateProfileForm();

  return (
    <div>
      <form className="space-y-4" onSubmit={onFormSubmit}>
        <div className="flex flex-col justify-start gap-1">
          <label id="name" htmlFor="name">
            Name:
          </label>
          <input type="text" placeholder="Enter your name" {...name.register} />
        </div>
        <div className="flex flex-col justify-start gap-1">
          <label htmlFor="avatar">Avatar:</label>
          <ImageUploader {...avatar.register} ref={avatar.register.ref} />
        </div>
        <Button type="submit">
          {!isLoading ? (
            'Create my profile'
          ) : (
            <Loader className="animate-spin" />
          )}
        </Button>
      </form>
    </div>
  );
};
