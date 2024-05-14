// INI PAGE ADMIN DATA ORDER USER

import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";

const FetchOrderUser = () => {
//   const navigate = useNavigate();
  const [orderuser, setOrderUser] = useState([]);
  const navigate = useNavigate();

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
            {orderuser.map((orderuser) => (
              <tr key={orderuser.id}>
                <td>{orderuser.id}</td>
                <td>{orderuser.username}</td>
                <td>{orderuser.address}</td>
                <td>{orderuser.phone}</td>
                <td>{orderuser.service}</td>
                <td>
                  <span className="text-bold flex gap-3 text-2xl">
                    {/* <Link to={"/admin" + orderuser.id}> */}
                      <i className="fi fi-tr-pen-square text-primary" />
                    {/* </Link> */}
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
