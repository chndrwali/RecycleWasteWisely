import React from 'react'; // Import React jika belum diimpor
import ImageInput from './ImageInput';
import ImagePreview from './ImagePreview';

function ClassifyImage({ file }) {
  return (
    <div className="w-full md:w-[calc(50%-1rem)]">
      { !file ? <ImageInput /> : <ImagePreview /> }
    </div>
  );
}

export default ClassifyImage;
