import { useState, useEffect } from "react";
// import "modern-normalize";
import "./App.css";
import toast from "react-hot-toast";
import { fetchPhotos } from "../../services/api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Photo from "./App.type";


function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo:Photo):void => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = ():void => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    if (!query) return;
    const getData = async (): Promise<void> => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchPhotos(query, page);
        
        if (response.length === 0) {
          toast.error(
            "Sorry, nothing was found for your query. Try another query."
          );
          return;
        }
        setPhotos((prev) => [...prev, ...response]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery:string):void => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
    setError(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      
      <Loader loading={isLoading} />
      {error && <ErrorMessage error={error} />}
      {photos.length !== 0 && (
        <>
          <ImageGallery photos={photos} openModal={openModal} />
          <LoadMoreBtn setPage={setPage} />
        </>
      )}
      {selectedPhoto && (
        <ImageModal
          photo={selectedPhoto}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
}

export default App;
