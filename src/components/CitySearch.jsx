import { useContext } from "react";
import MyContext from "../context/MyContext";
import { BsSearch } from "react-icons/bs";

const CitySearch = () => {
  const context = useContext(MyContext);
  const {
    input,
    handleChange,
    handleSubmit,
    handleChangeCode,
    inputCode,
    inputState,
    handleChangeState,
  } = context;
  return (
    <form>
      <input
        placeholder="city"
        type="text"
        maxLength="20"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="country"
        type="text"
        maxLength="20"
        value={inputCode}
        onChange={(e) => handleChangeCode(e)}
      />
      <input
        placeholder="state"
        type="text"
        maxLength="20"
        value={inputState}
        onChange={(e) => handleChangeState(e)}
      />
      <button className="search_btn" onClick={(e) => handleSubmit(e)}>
        <BsSearch />
      </button>
    </form>
  );
};

export default CitySearch;
