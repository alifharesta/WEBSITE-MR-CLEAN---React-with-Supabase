import { useState } from "react";
import { User, supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";


const Booking = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const navigate = useNavigate();

  //insert data di form user
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, address, phone, service);

    
    const { data, error } = await supabase
      .from("order_user")
      .insert([{ username, address, phone, service, id_user : User.user.id }]);

    if (error) {
      console.log("Error inserting data: ", error);
      return;
    }
      console.log("Data inserted: ", data);
      navigate("/statususer");
  };


  return (
    <section>
      <h1 className="text-3xl font-bold text-center mt-3">SERVICE OPTIONS</h1>
      <div className="card card-side rounded-none bg-base-100 shadow-xl mt-5 mx-3">
        <figure className="w-1/4">
          <img
            src="https://media.angi.com/s3fs-public/female-janitor-vacuums-living-room.jpg"
            alt="Cleaning Home"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cleaning House</h2>
          <p>pokoknya bersih bersih rumah kecil / personal</p>
          <p>jumlah tenaga kerja 1-3 orang</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card card-side rounded-none bg-base-100 shadow-xl mt-3 mx-3 flex">
        <figure className="w-1/4 order-2">
          <img
            src="https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520631.jpg?t=st=1714884062~exp=1714887662~hmac=1a6d5828bfb60502781f1bf3613b854b471c53afadffdf0e3b144ee5455f7e5b&w=1060"
            alt="Cleaning Home"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cleaning Office and Firma</h2>
          <p>pokoknya bersih bersih gedung kantor PT / FIRMA min.lantai 2</p>
          <p>jumlah tenaga kerja 5-10 orang</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mt-3 mx-3">
        <figure className="w-1/4 rounded-none">
          <img
            src="https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?t=st=1714884013~exp=1714887613~hmac=cb8f7a73e41a3edb4242f2e077034172516f0d7c4d2fd153f1470c629ae0eede&w=1060"
            alt="Cleaning Home"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cleaning Industry and Fabric</h2>
          <p>pokoknya bersih bersih gedung pabrik gede atau suatu industri</p>
          <p>jumlah tenaga kerja 10-25 orang</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl mt-3 mx-3 flex">
        <figure className="w-1/4 order-2 rounded-none">
          <img
            src="https://www.simpli.com/wp-content/uploads/sites/5/2020/03/eec0bd1ff033ae8d8807e3beb916eeb5.jpg"
            alt="Cleaning Home"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Climbing Window Cleaning</h2>
          <p>pokoknya bersih bersih kaca gedung tinggi</p>
          <p>
            Tenaga Kerja Professional, Tidak takut ketinggian, Serfitikasi 100%
            aman dan terpercaya
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <h1 className="text-2xl text-black font-semibold flex justify-center mt-10">
        Order Now According to Your Needs 😇💕
      </h1>

      <form
        onSubmit={handleSubmit}
        className="my-3 mb-10 w-[50%] mx-auto flex flex-col"
        label="Create Order User"
      >
        <label className="input input-primary input-bordered flex items-center gap-2 mt-2">
          <input
            type="text"
            className="username"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="input input-primary input-bordered flex items-center gap-2 mt-2">
          <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label className="input input-primary input-bordered flex items-center gap-2 mt-2">
          <input
            type="text"
            placeholder="Phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <select
          required
          onInput ={(e) => setService(e.target.value)}
          className="select select-primary w-full max-w-xs mt-2"
        >
          <option value="Cleaning Houser">Cleaning House</option>
          <option value="Cleaning Office">Cleaning Office and Firma</option>
          <option value="Cleaning Industry">
            Cleaning Industry and Fabric
          </option>
          <option value="Climbing Window Cleaning">
            Climbing Window Cleaning
          </option>
        </select>
        <br></br>
        <button
          type="submit"
          className="btn btn-primary mt-4 mb-5 w-[50%] self-center"
        >
          Order Now
        </button>
      </form>
    </section>
  );
};

export default Booking;
