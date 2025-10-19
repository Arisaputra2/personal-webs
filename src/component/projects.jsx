import React, { useState } from "react";
const projectsData = [
  {
    title: "I-Nusaplant",
    description:
      "I-Nusaplant adalah sebuah aplikasi berbasis mobile yang didesain untuk membantu User dalam mengidentifikasi tanaman obat. Sebelumnya desain dari aplikasi ini cukup sederhana dan hanya menampilkan informasi dasar mengenai tanamanan obat. Namun belum menggunakan rules UI/UX yang baik. Oleh karena itu, saya melakukan redesign pada aplikasi ini dengan menambahkan fitur-fitur baru seperti pencarian tanaman, glosarium, lokasi tanaman, dan fitur lainnya. Selain itu, saya juga memperbaiki tampilan antarmuka aplikasi agar lebih menarik dan mudah digunakan oleh User. Pengujian dilakukan menggunakan aplikasi Maze untuk mengukur Usability dari aplikasi ini. Hasil pengujian memberikan hasil yang sangat baik dengan skor 99% pengguna dapat menjalankan tugas yang diberikan dengan mudah dan cepat serta kompleksitas yang beda dari desain awal aplikasi.",
    imgSrc: "img/Projects-1.jpg",
    alt: "project 1 I-Nusaplant",
  },
  {
    title: "Travelin",
    description:
      "Travelin adalah sebuah desain aplikasi mobile yang bertujuan untuk anda yang suka berpergian. Aplikasi ini dirancang untuk membuat perjalanan menjadi lebih mudah dan menyenangkan. Dengan antarmuka yang sederhana dan intuitif, pengguna dapat dengan mudah mencari destinasi wisata, memesan tiket transportasi, dan mengatur jadwal perjalanan mereka. Aplikasi ini juga menyediakan fitur rekomendasi tempat wisata berdasarkan preferensi pengguna, serta ulasan dan rating dari pengguna lain untuk membantu dalam pengambilan keputusan. Selain itu, Travelin juga dilengkapi dengan peta interaktif yang memudahkan navigasi selama perjalanan. Dengan desain yang responsif dan menarik, Travelin bertujuan untuk menjadi teman setia bagi para pelancong dalam menjelajahi dunia.",
    imgSrc: "img/Projects-2.png",
    alt: "project 2 Travelin",
  },
  {
    title: "Pijar Music Event",
    description:
      "Project ini sebagai portfolio untuk membuat sebuah web desain untuk music event. Pada project ini hanya dibuatkan beberapa mockup pengenalan untuk tampilan Landing Page. Sebagai tantangan pada projek ini, saya mencoba untuk membuat desain yang menarik dengan waktu pengerjaan hanya 1 hari. Dengan waktu yang singkat tersebut, saya mencoba untuk memaksimalkan ide-ide kreatif saya agar dapat menghasilkan desain yang menarik dan sesuai dengan tema music event. Meskipun waktu yang terbatas, saya tetap berusaha untuk memberikan hasil terbaik dengan memperhatikan detail dan estetika desain. Hasil akhirnya adalah sebuah mockup landing page yang menarik dan mampu menggambarkan suasana music event dengan baik.",
    imgSrc: "img/Projects-3.png",
    alt: "project 3 Placeholder",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = projectsData.length;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
        // Kembali ke 0 jika sudah di kartu terakhir
        (prevIndex + 1) % totalSlides
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <div className="projects-section w-full flex flex-col box-border p-5 justify-center items-center border-2 border-black mt-5 h-auto">
        <div className="headingProjects">
          <h1 className="text-3xl font-bold mb-10">PROJECTS</h1>
        </div>

        {/* Container utama Slider */}
        <div className="slider-container w-full max-2-4xl relative overflow-hidden">
          {/* Wrapper untuk semua Card Project */}

          <div
            className="card-wrapper flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // 4. Terapkan CSS Transform
          >
            {projectsData.map((project, index) => (
              // Card Project
              <div
                key={index}
                className="project-card flex-shrink-0 w-full flex flex-col lg:flex-row justify-center items-center p-3"
                // Di sini w-full penting agar setiap kartu selebar container
              >
                {/* Image Section */}
                <div className="imgProjects w-full lg:w-1/2 flex justify-center items-center p-4">
                  <img
                    src={project.imgSrc}
                    alt={project.alt}
                    className="w-full max-w-sm rounded-lg shadow-lg"
                  />
                </div>

                {/* Description Section */}
                <div className="projectAbout p-3 flex flex-col w-full lg:w-1/2 justify-center">
                  <h1 className="text-2xl font-bold mb-5 text-center lg:text-left">
                    {project.title}
                  </h1>
                  <p className="text-justify">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 5. Tombol Navigasi */}
          {/* <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-60 bg-black text-white p-3 rounded-full shadow-lg z-10 opacity-40~ hover:opacity-100 transition"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-60 bg-black text-white p-3 rounded-full shadow-lg z-10 opacity-40~ hover:opacity-100 transition"
          >
            &gt;
          </button> */}

          {/* Indikator Slide */}
          <div className="relative justify-center items-center mb-8">
            <div className="flex justify-center mt-6 mb-4 space-x-2 ">
              {/* // eslint-disable-next-line no-undef */}
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-black" : "w-2 bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-0 right-0 transform translate-y-1/2 flex space-x-4 pr-4 z-20">
              <button
                onClick={handlePrev}
                className="opacity-70 bg-black text-white p-2 rounded shadow-lg hover:opacity-100 transition duration-300"
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <button
                onClick={handleNext}
                className="opacity-70 bg-black text-white p-2 rounded shadow-lg hover:opacity-100 transition duration-300"
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card-wrapper flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100})` }}
      ></div>
    </>
  );
}
