
import s from "./ImageGallery.module.css";
import Photo from "../App/App.type";
import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGallerProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
}

const ImageGallery: FC<ImageGallerProps> = ({ photos, openModal }) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => openModal(photo)}>
          <ImageCard photo={photo}
           openModal={()=>openModal(photo)}
            />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
