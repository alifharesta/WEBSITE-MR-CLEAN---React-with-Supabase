import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const Update = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  console.log(username);

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("table_order")
      .update({ status_order: status })
      .eq("username", username);

    if (error) {
      console.log(error);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="max-w-lg mx-auto mt-16">
      <p className="text-2xl font-bold text-center text-primary mb-5 underline">
        Edit Data
      </p>
      <form onSubmit={handleSubmit} className="shadow-lg p-8 rounded-md">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="status"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Status Order
            </label>
            <div className="mt-2">
              <select
                name="status"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Driver On The Way">Driver On The Way</option>
                <option value="On Process Cleaning">On Process Cleaning</option>
                <option value="Task Done">Task Done</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-baseline">
          <button className="btn btn-primary text-white mt-5" type="submit">
            Save
          </button>
          <a
            className="text-bold text-xl text-primary"
            onClick={() => navigate("/admin")}
          >
            <button
              className="btn btn-primary text-white mt-5"
              type="submit"
            >Back</button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Update;
