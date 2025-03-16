import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { FormEvent, useState } from "react";
import { MdImageSearch } from "react-icons/md";

interface onSubmitProps{
onSubmit:(value:string)=>void
}
const SearchBar :React.FC<onSubmitProps>= ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    value.trim();
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };
  return (
    <header className={s.header}>
      <span className={s.span}><MdImageSearch className={s.iconImg}/>Image search app </span>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <CiSearch className={s.iconSearch} />
        </button>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
