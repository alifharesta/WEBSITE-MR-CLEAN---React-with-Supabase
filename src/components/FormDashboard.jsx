// INI PAGE ADMIN DI FORM ORDER UNTUK INSERT TANGGAL, TUGAS, DAN STATUS ORDER

import { useState } from "react";
import { User, supabase } from "../config/supabaseClient";

const FormDashboard = ({
  user: [user, SetUser],
  tanggal: [tanggal, SetTanggal],
  jenis: [jenis, SetJenis],
  tugas: [tugas, SetTugas],
  status: [status, SetStatus],
}) => {
  //destructuring

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mengambil data dari table_order
    const { data: userData, error: userError } = await supabase
      .from("order_user")
      .select("*")
      .maybeSingle() //nyari 1 user berdasarkan namanya
      .eq("username", user);

    if (!userData) {
      return alert("User tidak ada");
    }

    //insert data ke table_order
    const { data, error } = await supabase
      .from("table_order")
      .insert([
        {
          tanggal_data: tanggal,
          jenis_layanan: jenis,
          tugas_ob: tugas,
          status_order: status,
          username: user,
        },
      ])
      .select();

    if (error) {
      console.log(error.message);
    }
    if (data) {
      console.log(data);
      window.location.reload();
    }
  };

  return (
    <section>
      <div className="max-w-lg mx-auto mt-16 mb-10">
        <p className="text-2xl font-bold text-center text-primary mb-5 underline">
          Form Order
        </p>

        <form onSubmit={handleSubmit} className="shadow-xl p-8 rounded-md">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="date"
                className="block text-sm leading-6 font-medium text-gray-900"
              >
                Nama User
              </label>
              <div className="mt-2">
                <input
                  id="tanggal"
                  name="tanggal"
                  type="text"
                  onChange={(e) => SetUser(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="date"
                className="block text-sm leading-6 font-medium text-gray-900"
              >
                Tanggal Order
              </label>
              <div className="mt-2">
                <input
                  id="tanggal"
                  name="tanggal"
                  type="date"
                  onChange={(e) => SetTanggal(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="tugas"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tugas OB
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="tugas"
                  id="tugas"
                  onChange={(e) => SetTugas(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="jenis"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Jenis Layanan yang dipilih
              </label>
              <div className="mt-2">
                <select
                  name="jenis_layanan"
                  id="jenis"
                  onChange={(e) => SetJenis(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="Cleaning House">Cleaning House</option>
                  <option value="Cleaning office and firma">
                    Cleaning Office and Firma
                  </option>
                  <option value="Cleaning Industry">Cleaning Industry</option>
                  <option value="Climbing Window Cleaning">
                    Climbing Window Cleaning
                  </option>
                </select>
              </div>
            </div>

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
                  onChange={(e) => SetStatus(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="Driver On The Way">Driver On The Way</option>
                  <option value="On Process Cleaning">
                    On Process Cleaning
                  </option>
                  <option value="Task Done">Task Done</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-primary text-white mt-5" type="submit">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};
export default FormDashboard;
