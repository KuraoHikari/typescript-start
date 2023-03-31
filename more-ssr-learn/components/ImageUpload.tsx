import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';
interface DropzoneProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<DropzoneProps> = ({
  onChange,
  label,
  value,
  disabled,
}) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      if (!file) {
        toast.error('File must be an jpg or png with 500kb max size');
      } else {
        //   console.log('🚀 ~ file: ImageUpload.tsx:29 ~ file:', file);
        //   console.log('🚀 ~ file: ImageUpload.tsx:29 ~ file:', fileRejections);
        const reader = new FileReader();
        reader.onload = (event: any) => {
          setBase64(event.target.result);
          handleChange(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    [handleChange]
  );

  const { getRootProps, fileRejections, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    maxSize: 522240,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });
  return (
    <div
      {...getRootProps({
        className:
          'w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-700',
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="flex items-center justify-center">
          <Image src={base64} height="100" width="100" alt="Uploaded image" />
        </div>
      ) : (
        <p className="text-white">{label}</p>
      )}
    </div>
  );
};
export default ImageUpload;
