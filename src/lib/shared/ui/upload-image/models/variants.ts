import { tv } from 'tailwind-variants';

export const imageUploaderVariants = tv({
  slots: {
    wrapper: 'flex',
    icon: '',
    image: 'object-cover',
    imageWrapper: 'flex-center relative',
    hint: 'italic',
    actionsWrapper: 'flex items-center ',
    fileNameSpace: 'flex-1',
  },
  variants: {
    size: {
      md: {
        wrapper: 'p-4 gap-5 rounded-[5px]',
        icon: 'size-8',
        image: 'rounded-[5px]',
        imageWrapper: 'h-[100] w-[100px] rounded-[5px]',
        hint: 'text-sm',
        actionsWrapper: 'gap-[30px] rounded-[10px] p-[10px]',
        fileNameSpace: 'text-base ',
      },
    },
    colors: {
      primary: {
        wrapper: 'bg-[#ffffff] dark:bg-[#3c3c3c]',
        icon: 'fill-[#B2B9C4]',
        image: '',
        imageWrapper: 'bg-[#E2E6EC] dark:bg-[#919191]',
        hint: 'text-[#000000] dark:text-[#ffffff]',
        actionsWrapper: 'bg-[#F8FCFF] dark:bg-[#919191]',
        fileNameSpace: 'text-[#3C3C3C] dark:text-[#ffffff]',
      },
    },
  },
  defaultVariants: {
    colors: 'primary',
    size: 'md',
  },
});
