import React, { useEffect, useState } from "react";
import { User } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import supabase  from "../config/supabaseClient";
import FetchOrderUser from "../components/FetchOrderUser";
import Fetching from "../components/Fetching";
import FormDashboard from "../components/FormDashboard";


function DashboardAdmin() {
  const navigate = useNavigate();
  const user = useState();
  const tanggal = useState();
  const jenis = useState();
  const tugas = useState();
  const status = useState();

  useEffect(() => {
    if (!User || User.user.email != "111202113768@mhs.dinus.ac.id") {
      return navigate("/");
    }
  }, []);

  return (
    <>
    <section className="text-gray-600 body-font">
      <h1 className="text-2xl text-center mt-5 font-bold">DASHBOARD ADMIN Mr/s. Clean</h1>
      <FetchOrderUser />
      {/* ini spreading */}
      <Fetching {...{user,tanggal,jenis,tugas,status}}/> 
      <FormDashboard user={user} tanggal={tanggal} jenis={jenis} tugas={tugas} status={status}/> 
    </section>
    </>
  );
}

export default DashboardAdmin;
