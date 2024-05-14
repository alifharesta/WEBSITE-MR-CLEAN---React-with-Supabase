// INI PAGE ADMIN ALL CONTROL DATA 

import { useNavigate, Link, Await } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";

const Fetching = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchOrder();
  }, []);

  async function fetchOrder() {
    try {
      const { data } = await supabase.from("order_user").select("*");
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  }

  //delete
  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from("order_user")
        .delete()
        .eq("id", id);

      if (error) {
        console.log(error.message);
        return
      }
      console.log("Delete data success: ", data);
      alert("Data berhasil dihapus");
      window.location.reload();
      fetchOrder();
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="px-16 mt-8 my-auto">
      <p className="text-2xl font-bold">Control All Data User Order</p>
      <hr />
      <button
        className="btn btn-primary text-white mb-3 mt-5"
        onClick={() => navigate("/")}
      >
        Lihat Order
      </button>
      <div className="overflow-x-auto border border-slate-100 shadow-xl rounded-2xl">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="text-primary">ID</th>
              <th className="text-primary">Username</th>
              <th className="text-primary">Address</th>
              <th className="text-primary">Phone</th>
              <th className="text-primary">Service</th>
              <th className="text-primary"></th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.username}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.service}</td>
                <td>
                  <span className="text-bold flex gap-3 text-2xl">
                    <a
                      onClick={() => handleDelete(order.id)}
                      className="hover:cursor-pointer"
                    >
                      <i className="fi fi-sr-octagon-xmark text-red-600">Delete</i>
                    </a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fetching;
