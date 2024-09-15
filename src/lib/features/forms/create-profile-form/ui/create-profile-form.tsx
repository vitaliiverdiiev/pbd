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
          <ImageUploader
            name={avatar.register.name}
            onBlur={avatar.register.onBlur}
            onChange={avatar.register.onChange}
            ref={avatar.register.ref}
          />
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

{
  /* <div>
<input
  // ref={ref as UnknownType}
  // id="avatar"
  // type="file"
  // name={props?.register?.name}
  // // onChange={handleChange}
  // placeholder="Enter your name"
  className="hidden"
  type="file"
  name="profilePicture"
  {...rest}
  onChange={(e) => {
    handleUploadedFile(e);
    onChange(e);
  }}
  ref={(e) => {
    registerRef(e);
    (hiddenInputRef.current as UnknownType) = e;
  }}
/>
<Button onClick={onUpload}>{uploadButtonLabel}</Button>
<div className="h-[100px] w-[100px] border-2 border-blue-100 flex-center rounded-full overflow-hidden">
  {!preview ? (
    <span className="font-bold text-xl text-balance">No Image</span>
  ) : (
    <Image width={100} height={100} alt="avatar" src={preview} />
  )}
</div>
</div> */
}
