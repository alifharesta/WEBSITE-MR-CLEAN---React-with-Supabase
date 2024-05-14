import React from "react";
import { Link } from "react-router-dom";

const StatusUser = () => {

  function sendMessageToWhatsapp() {
    const urlToWhatsapp = `https://wa.me/6281325461363?text=Halo,`;
    window.open(urlToWhatsapp, "_blank");
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-y-10 mt-8">

      <span className="loading w-10 loading-spinner text-neutral"></span>

        <ul className="steps mb-5 ml-10 justify-center text-center steps-vertical lg:steps-horizontal">
          <li className="step step-primary">
            Please Waiting Your Order On Process
          </li>
          <li className="step step-primary">The Cleaner On The Way</li>
        </ul>
      </section>

      <section className="w-full flex justify-center mt-10 hover:underline text-blue-500">
      <Link className = ""to = {"/"}>Balik Home</Link>
      </section>

      <section className="w-full flex justify-center mt-10 hover:underline text-blue-500">
      <button onClick={sendMessageToWhatsapp}> Kalau mau lanjut menanyakan posisi atau status pesanan anda lanjut di wa admin yaa hehe 😄</button>
      </section>
    </>
  );
};

export default StatusUser;
