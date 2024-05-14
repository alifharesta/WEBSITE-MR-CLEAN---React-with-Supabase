import React, { useEffect, useState } from "react";
import { User } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import supabase  from "../config/supabaseClient";
import FetchOrderUser from "../components/FetchOrderUser";
import Fetching from "../components/Fetching";
import FormDashboard from "../components/FormDashboard";


function DashboardAdmin() {
  const navigate = useNavigate();
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
      <Fetching/>
      <FormDashboard/>
    </section>
    </>
  );
}

export default DashboardAdmin;
