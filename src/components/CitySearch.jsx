import { useContext } from "react";
import MyContext from "../context/MyContext";

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
        placeholder="City , e.x: Amman"
        type="text"
        maxLength="20"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="Country Code , e.x: JO"
        type="text"
        maxLength="20"
        value={inputCode}
        onChange={(e) => handleChangeCode(e)}
      />
      <input
        placeholder="State,only USA e.x:NY"
        type="text"
        maxLength="20"
        value={inputState}
        onChange={(e) => handleChangeState(e)}
      />
      <button className="search_btn" onClick={(e) => handleSubmit(e)}>
        search
      </button>
    </form>
  );
};

export default CitySearch;
