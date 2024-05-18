import Nav from "../components/Nav";
export default function Features() {
  return (
    <>
      <Nav />
      <h1 className="text-center text-gray-800 text-3xl font-bold my-10">
        Features
      </h1>
      <section className="flex flex-wrap mt-5 mx-5 justify-center gap-5">
        <div className="card w-96 glass box drop-shadow-lg ">
          <figure className="w-64 ml-10">
            <img
              src="https://media.angi.com/s3fs-public/female-janitor-vacuums-living-room.jpg"
              alt="cleaning home"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Features Cleaning House</h2>
            <p>
              Layanan ini adalah solusi lengkap untuk rumah kecil atau personal
              Anda. Dengan tim berpengalaman sebanyak 1-3 orang, kami
              menyediakan layanan pembersihan yang menyeluruh dan profesional
              untuk membuat rumah Anda bersih dan nyaman. Mulai dari
              membersihkan ruangan, mengelola peralatan, hingga detail-detail
              kecil seperti membersihkan debu, mengaspirasi permukaan, dan
              menyusun barang-barang. Kami hadir untuk memberikan lingkungan
              yang segar dan bersih bagi Anda dan keluarga.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-96 glass">
          <figure className="w-64 ml-10">
            <img
              src="https://business.yelp.com/wp-content/uploads/2023/04/cleaning-contractors-1200x630.jpg"
              alt="cleaning office"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mt-2">Features Cleaning Office and Firma</h2>
            <p>
              Dengan fokus pada kebersihan dan kenyamanan ruang kerja, layanan
              ini dirancang untuk kantor dan firma Anda. Tim profesional kami
              akan membersihkan ruangan kantor, area umum, dapur, dan kamar
              mandi dengan cermat. Kami juga mengelola limbah dan mendukung
              praktik kebersihan yang tepat. Dengan pembersihan berkala, kami
              membantu menciptakan lingkungan kerja yang bersih, rapi, dan
              menyegarkan bagi karyawan dan pengunjung.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="w-64 ml-10">
            <img
              src="https://assets-global.website-files.com/64b63fcc22060f5d5af72e46/65279fff5c7f1ee45053d09d_pressure%20washing%20the%20road.jpeg"
              alt="cleaning industry"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Features Cleaning Industry and Fabric</h2>
            <p>
              Kami menawarkan layanan kebersihan yang khusus di sektor industri
              dan pabrik. Tim ahli kami dilengkapi dengan pengetahuan dan
              peralatan yang sesuai untuk membersihkan area produksi, lantai
              pabrik, mesin, dan fasilitas industri lainnya. Kami memahami
              pentingnya standar kebersihan yang ketat dalam lingkungan
              industri, termasuk penanganan limbah dan sanitasi, untuk
              menciptakan tempat kerja yang aman dan efisien.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="w-64 ml-10">
            <img
              src="https://www.spectrumspecialistsupport.co.uk/uploads/blog/72_3.jpg"
              alt="cleaning window"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Features Climbing Window Cleaning</h2>
            <p>
              Jika Anda membutuhkan layanan pembersihan jendela yang sulit
              dijangkau, kami siap membantu. Tim kami terlatih untuk melakukan
              pembersihan jendela di ketinggian dengan aman dan efektif. Dengan
              penggunaan teknik-teknik pembersihan yang canggih dan peralatan
              keselamatan yang sesuai, kami dapat membersihkan jendela tinggi
              gedung, fasad bangunan, dan struktur lainnya tanpa mengganggu
              aktivitas sehari-hari.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </section>
    </>
  );
}
