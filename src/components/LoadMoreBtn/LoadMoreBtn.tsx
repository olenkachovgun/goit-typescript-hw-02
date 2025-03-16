import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <button
      onClick={() => setPage((prev) => prev + 1)}
      className={s.btnLoadMore}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
