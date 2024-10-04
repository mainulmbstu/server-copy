import { useSearch } from "../context/SearchContext";
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const { keyword, setKeyword, submitHandler } = useSearch();
    let navigate = useNavigate()

  
    
  
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={submitHandler}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search product"
          aria-label="Search"
          value={keyword}
          onChange={(e) => {
            // setTotal(1)
            setKeyword(e.target.value)
          }}
        />
        <button
          className="btn btn-success btn-outline-black"
          onClick={()=>(navigate('/products/search'))}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
