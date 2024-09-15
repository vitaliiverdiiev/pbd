import { forwardRef } from 'react';
import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Button } from '@/shared/ui/button';
import { ImageBroken, Trash } from '@phosphor-icons/react';
import { tv } from 'tailwind-variants';
import { useUploadImage } from '@/shared/ui/upload-image/models/hooks/use-upload-image';

export type ImageUploaderProps = Pick<
  UseFormRegisterReturn,
  'onChange' | 'onBlur' | 'name'
>;

export const ImageUploader = forwardRef(function Uploader(
  { name, onBlur, onChange }: ImageUploaderProps,
  ref
) {
  const { styles, hasImage } = useUploadImage();

  return (
    <div className={styles.wrapper()}>
      <div className={styles.imageWrapper()}>
        {hasImage ? (
          <Image fill src={hasImage} alt="name" className={styles.image()} />
        ) : (
          <ImageBroken className={styles.icon()} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-[10px]">
        <p className={styles.hint()}>
          Please upload square image, size less than 100KB
        </p>
        <div className={styles.actionsWrapper()}>
          <Button variant="outline" className="rounded-[5px]">
            Choose file
          </Button>
          <p className={styles.fileNameSpace()}>No File Chosen</p>
        </div>
      </div>
    </div>
  );
});

// export const ImageUploader = forwardRef(function Uploader(props: UnknownType) {
//   console.log({ props });

//   const hiddenInputRef = useRef();

//   const [preview, setPreview] = useState('');

//   const { ref: registerRef, onChange, ...rest } = props.register;

//   const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files![0];

//     const urlImage = URL.createObjectURL(file);

//     setPreview(urlImage);
//   };

//   const onUpload = () => {
//     (hiddenInputRef as UnknownType).current!.click();
//   };

//   const uploadButtonLabel = preview ? 'Change image' : 'Upload image';
//   return <ImageUploaderUi />;

//   return (
//     <div className="">
//       <button className="relative group bg-transparent rounded-2xl overflow-hidden">
//         <div className="flex relative w-[400px] z-10 h-[200px] border-2 border-red-300 ">
//           <Image
//             fill={true}
//             className="object-cover w-[100%]"
//             alt="avatar"
//             src={preview}
//           />
//         </div>
//         <div
//           className={cn(
//             'opacity-0 flex-center bg-black/50 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full z-20 text-white'
//           )}
//         >
//           <span>{uploadButtonLabel}</span>
//         </div>
//         {!preview && (
//           <div
//             className={cn(
//               'flex-center bg-white group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full z-20 text-[#010369]'
//             )}
//           >
//             <span>{uploadButtonLabel}</span>
//           </div>
//         )}
//       </button>
//     </div>
//   );
// });

// NEWWWWWWW

{
  /* <div className="group relative w-fit h-fit">
<button
  type="button"
  onClick={(e) => {
    e.stopPropagation();
    onUpload();
  }}
  className={cn('w-[400px] h-[200px] border-red-300 border-2 relative')}
>
  {/* <input
    className="hidden"
    type="file"
    name="profilePicture"
    // {...rest}
    onChange={(e) => {
      handleUploadedFile(e);
      onChange(e);
    }}
    ref={(e) => {
      // registerRef(e);
      (hiddenInputRef.current as UnknownType) = e;
    }}
  /> */
}

{
  /* <Image
    fill
    className="object-center object-cover w-[100%] absolute z-0"
    alt="avatar"
    src={previewSrc}
  /> */
}
{
  /* {previewSrc ? (
    // <div
    //   className={cn(
    //     'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
    //     'space-y-5 border-4 border-fuchsia-200'
    //   )}
    // >
    //   <p>{uploadButtonLabel}</p>
    // </div>
  ) : (
    // <div
    //   className={cn(
    //     'border-2 border-green-500',
    //     'h-full flex-center bg-[#E2E6EC]',
    //     'absolute-top z-10'
    //   )}
    // >
    //   <ImageBroken size={64} weight='thin' />
    // </div>
  )} */
}
// </button>
// <div className="absolute top-0 right-0 pl-10 hidden group-hover:flex-center">
//   <Button
//     variant="link"
//     size="icon"
//     className=""
//     onClick={(e) => {
//       e.stopPropagation();
//       setPreviewSrc('');
//     }}
//   >
//     <Trash size={16} color="red" />
//   </Button>
// </div>
// </div>
// ); */}
