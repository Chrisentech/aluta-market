import React, { useEffect, useRef, useState } from 'react'
import { ImageWrapper, PriceInput } from './AddProductImage.style'
import { MdOutlineCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import useVariants from '../../../test-data/variant-data';
import { FaPen } from 'react-icons/fa';


const AddProductImage: React.FC = () => {
	const location = useLocation();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [thumbnail, setthumbnail] = useState<string | undefined>(
		imageUrls[0]
	);

  const [files, setFiles] = useState<any | string[]>(
		location.state?.fileData ?? []
	);
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const handleRemoveImage = (url: string) => {
		if (thumbnail === url) {
			alert("You can't delete the thumbnail");
			return;
		}
		setImageUrls(imageUrls.filter((img: string) => img !== url));
		setFiles(
			files.filter((file: any) => file !== files[imageUrls.indexOf(url)])
		);
	};
	const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles: any = e.target.files;
		setFiles([...files, ...selectedFiles]);
	};

  useEffect(() => {
		// Retrieve the URL parameter containing the file data
		if (files) {
			const blobURLs = files?.map((fileName: string) => {
				return URL.createObjectURL(new Blob([fileName]));
			});
			setImageUrls(blobURLs);
			setthumbnail(blobURLs[0]);

			// Cleanup: Revoke the object URLs when the component unmounts
			return () => {
				blobURLs.forEach((url: any) => URL.revokeObjectURL(url));
			};
		}
	}, [files]);
	useEffect(() => {
		// Focus the input element when the component mounts
		hiddenInputRef.current?.focus();
	}, [files]);
  return (
    <ImageWrapper>
      {!!imageUrls.length &&
        imageUrls.map((imageUrl, index) => {
          return (
            <div className="image-container" key={index}>
              <MdOutlineCancel
                className="svg"
                onClick={() => handleRemoveImage(imageUrl)}
              />
              <img
                src={imageUrl}
                alt="Uploaded Image"
                onClick={() => setthumbnail(imageUrl)}
              />
              <PriceInput />
            </div>
          );
        })}
      <div
        className="addBtn"
        onClick={() => hiddenInputRef.current?.click()}
      >
        <AiOutlinePlus color="#DEE2E7" size="24" />
      </div>
      <input
        multiple
        style={{ display: "none" }}
        type="file"
        ref={hiddenInputRef}
        accept=".jpg, .jpeg, .png"
        onChange={handleAddImage}
      />
    </ImageWrapper>
  )
}

export default AddProductImage;