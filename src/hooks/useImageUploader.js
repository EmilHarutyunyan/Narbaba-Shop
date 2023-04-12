import { useState } from "react";

function useImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages([...images, ...uploadedImages]);
  }

  const deleteItem = (idx) => {
    const filterImages = images.filter((img, index) => index !== idx)
    setImages([...filterImages]);
  }
  return [images, handleImageUpload, deleteItem];

  // rest of the hook code...
}

export default useImageUploader;