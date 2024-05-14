import { useEffect, useState } from "react";
import OpenAI from "openai"; // Make sure the 'openai' package is installed
import Gambar from "../assets/cs.jpg";
import { Link } from "react-router-dom";

function App() {
  const [respond, setRespond] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    // Any logic you want to run on component mount/update
  }, []);

  const kunci = import.meta.env.api_key; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promptAwal =
      "Kamu adalah seorang customer service yang bertugas untuk memberikan informasi kepada user. User bertanya terkait layanan kebersihan yang disediakan oleh perusahaan. Berikut adalah informasi yang bisa saya berikan: ";

    const APIBody = {
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `${promptAwal} + list informasi layanan : {
            'Fitur Layanan' : 'Kami menyediakan 4 layanan kebersihan yaitu, Cleaning House, Cleaning Office and Firma, Cleaning Industry and Fabric, Climbing Window Cleaning',
            'Berapa pekerja' : 'Cleaning House 1-3 orang, Cleaning Office and Firma 3-5 orang, Cleaning Industry and Fabric 5-10 orang, Climbing Window Cleaning 2-3 orang', 
            'Detail Layanan' : 'Cleaning House membersihkan ruangan, mengelola peralatan, hingga detail-detail kecil seperti membersihkan debu, mengaspirasi permukaan, dan menyusun barang-barang. Cleaning Office and Firma membersihkan ruangan kantor, area umum, dapur, dan kamar mandi dengan cermat. Cleaning Industry and Fabric membersihkan area industri dan pabrik, membersihkan mesin, peralatan, dan area produksi. Climbing Window Cleaning membersihkan jendela, kaca, dan area tinggi lainnya'
          } + pertanyaan dari user${prompt}`,
        },
      ],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + kunci,
        },
        body: JSON.stringify(APIBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setRespond(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Link to="/" className="btn btn-primary mx-20 mt-5 mb-8 text-medium border-2 m-3">Back to Home</Link>
      <h1 className="text-2xl text-center mt-5 font-bold">CUSTOMER SERVICE Mr/s. Clean</h1>
      <img src={Gambar} alt="csm" className="mx-60 my-5 w-[60%]"/>
      <form onSubmit={handleSubmit}>
        <label className="text-lg flex justify-center p-5">
          Kami akan menjawab pertanyaan anda dengan sepenuh hati :{" "}
        </label>
        <textarea
        className="textarea textarea-primary w-[80%] h-40 mx-20 my-5"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br></br>
        <button className="btn btn-primary mx-20 mt-5 mb-8 text-medium border-2 m-3" type="submit">
          Submit Pertanyaan
        </button>
      </form>
      {respond}
    </div>
  );
}

export default App;
