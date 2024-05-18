// INI PAGE ADMIN ALL CONTROL DATA 

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";

const Fetching = () => {
  const [order, setOrder] = useState([]);
  

  const navigate = useNavigate();

  useEffect(() => {
    fetchOrder();
  }, []);

  //read
  async function fetchOrder() {
    try {
      const { data } = await supabase.
      from("table_order")
      .select("*");
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  }

  //delete
  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from("table_order")
        .delete()
        .eq("id_order", id);

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
      <p className="text-2xl font-bold mb-5">Control All Data User Order</p>
      <hr />  
      <div className="overflow-x-auto border border-slate-100 shadow-xl rounded-2xl">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="text-primary">No</th>
              <th className="text-primary">Username</th>
              <th className="text-primary">Tanggal</th>
              <th className="text-primary">Jenis Layanan</th>
              <th className="text-primary">Tugas OB</th>
              <th className="text-primary">Status Order</th>
              <th className="text-primary"></th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <tr key={order.id_order}>
                <td>{index+1}</td>
                <td>{order.username}</td>
                <td>{order.tanggal_data}</td>
                <td>{order.jenis_layanan}</td>
                <td>{order.tugas_ob}</td>
                <td>{order.status_order}</td>
                <td>
                  <span className="text-bold flex gap-3 text-2xl">
                    <a
                      onClick={() => handleDelete(order.id_order)}
                      className="hover:cursor-pointer"
                    >
                      <button className="btn btn-primary text-white mt-5">Delete</button>
                    </a>
                    <a
                      onClick={() => navigate(`/update/${order.username}`)}
                      className="hover:cursor-pointer"
                    >
                      <button className="btn btn-primary text-white mt-5">Update</button>
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
