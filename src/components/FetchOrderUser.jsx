// INI PAGE ADMIN DATA ORDER USER

import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";

const FetchOrderUser = () => {
  const [orderuser, setOrderUser] = useState([]);

  useEffect(() => {
    fetchOrderUser();
  }, []);

  async function fetchOrderUser() {
    try {
      const { data } = await supabase
      .from("order_user")
      .select("*");
      setOrderUser(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="px-16 mt-8 my-auto">
      <p className="text-2xl font-bold mb-5">Data Order User</p>
      <hr />
      <div className="overflow-x-auto border border-slate-100 shadow-xl rounded-2xl">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="text-primary">ID</th>
              <th className="text-primary">Username</th>
              <th className="text-primary">Address</th>
              <th className="text-primary">Phone</th>
              <th className="text-primary">Service</th>
            </tr>
          </thead>
          <tbody>
            {orderuser.map((orderuser, index) => ( 
              <tr key={orderuser.id}>
                <td>{index+1}</td>
                <td>{orderuser.username}</td>
                <td>{orderuser.address}</td>
                <td>{orderuser.phone}</td>
                <td>{orderuser.service}</td>
                <td>
                  <span className="text-bold flex gap-3 text-2xl">
                      <i className="fi fi-tr-pen-square text-primary" />
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

export default FetchOrderUser;
