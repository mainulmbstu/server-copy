import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const CategoryTable = () => {
  const [inputVal, setInputVal] = useState({ name: "" });
  let { token, getCategory } = useAuth();

  let inputHandle = (e) => {
    let { name, value } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
  };

  let categorySubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`${import.meta.env.VITE_BASE_URL}/category/create-category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(inputVal),
      });

      let data = await res.json();
      if (res.ok) {
        toast.success(data.msg);
        setInputVal({ name: "" });
        getCategory();
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log({ msg: "create category", error });
    }
  };
  return (
    <div>
      <div className=" mb-3 col-md-6">
        <div className=" px-3">
          <h3>Create new category</h3>
        </div>
        <form onSubmit={categorySubmit} className="">
          <input
            onChange={inputHandle}
            className=" form-control m-2 text-capitalize"
            type="text"
            name="name"
            value={inputVal?.name}
            placeholder="Enter category name"
          />
  
          <button
            className=" btn btn-primary w-100 text-white fs-5 ms-2 btn-outline-success"
            type="submit"
          >
            Create Category
          </button>
        </form>
      </div>
        <hr />
    </div>
  );
};

export default CategoryTable;
