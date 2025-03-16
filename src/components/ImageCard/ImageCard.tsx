import s from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";
import Photo from "../App/App.type";
import { FC } from "react";

// interface описує типи для пропсів компонента ImageCard:
interface ImageCardProps {
  photo: Photo;
  openModal: () => void;
}
const ImageCard: FC<ImageCardProps> = ({ photo, openModal }) =>
 {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description}
        loading="lazy"
        onClick={openModal}
      />
      <div className={s.likesContent}>
        <FcLike />
        <span className={s.likes}>{photo.likes}</span>
      </div>
    </div>
  );
};

export default ImageCard;
