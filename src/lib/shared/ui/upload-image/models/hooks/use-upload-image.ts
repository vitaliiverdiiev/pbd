import { ChangeEvent, ForwardedRef, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { imageUploaderVariants } from '../../models/variants';

export const useUploadImage = ({
  register,
}: {
  register: UseFormRegisterReturn;
}) => {
  const [previewSrc, setPreviewSrc] = useState(''); // /images/photo1700561435.jpeg
  const hiddenInputRef = useRef();

  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files![0];

    const imageUrl = URL.createObjectURL(image);

    setPreviewSrc(imageUrl);
  };

  // const onUpload = () => {
  //   (hiddenInputRef as UnknownType).current!.click();
  // };

  // const uploadButtonLabel = previewSrc ? 'Change image' : 'Upload image';

  const styles = imageUploaderVariants();

  return { styles, hasImage: previewSrc, hiddenInputRef };
};
