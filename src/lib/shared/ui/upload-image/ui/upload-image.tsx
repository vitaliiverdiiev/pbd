import { ChangeEvent, forwardRef, useRef, useState } from 'react';
import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';
import mergeRefs from 'merge-refs';
import { Button } from '@/shared/ui/button';
import { imageUploaderVariants } from '../models';
import { ImageBroken } from '@phosphor-icons/react';

export type ImageUploaderProps = UseFormRegisterReturn;

export const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ name, onChange, onBlur }, ref) => {
    const [previewSrc, setPreviewSrc] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const hiddenInputRef = useRef<HTMLInputElement | null>(null);

    const onUpload = () => {
      if (hiddenInputRef.current) {
        hiddenInputRef.current.click();
      }
    };

    const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
      console.log({ event: event.target.files });

      const file = event.target.files![0];
      setFile(file);

      const urlImage = URL.createObjectURL(file);
      setPreviewSrc(urlImage);

      console.log(file.name);

      onChange(event);
    };

    const styles = imageUploaderVariants();

    return (
      <div className={styles.wrapper()}>
        <div className={styles.imageWrapper()}>
          <input
            type="file"
            className="hidden"
            ref={mergeRefs(ref, hiddenInputRef)}
            onChange={(e) => {
              handleUploadedFile(e);
            }}
            name={name}
            onBlur={onBlur}
          />
          {!!previewSrc ? (
            <Image
              fill
              src={previewSrc}
              alt="name"
              className={styles.image()}
            />
          ) : (
            <ImageBroken className={styles.icon()} />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <p className={styles.hint()}>
            Please upload square image, size less than 100KB
          </p>
          <div className={styles.actionsWrapper()}>
            <Button
              variant="outline"
              className="rounded-[5px]"
              onClick={onUpload}
              type="button"
            >
              Choose file
            </Button>
            <p className={styles.fileNameSpace()}>
              {!file ? 'No File Chosen' : file.name}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
