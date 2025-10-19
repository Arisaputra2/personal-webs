export default function About() {
  const linkProperties = `font-bold hover:text-blue-700 hover:underline transform duration-400 ease-in`;
  return (
    <>
      <div className="w-full flex flex-row box-border p-5 justify-evenly items-center border-2 border-black mt-5 h-auto">
        <div className="about-text p-3 flex flex-col w-1/2">
          <h1 className="text-4xl font-bold text-center mb-10 tracking-wider">
            TENTANG SAYA
          </h1>
          <p className="text-justify">
            Hallo, Perkenalkan nama saya M. Ari Saputra, saya seorang UI/UX
            Designer dan Web Developer. Saya memiliki pengalaman dalam merancang
            antarmuka pengguna. Memiliki minat yang tinggi dalam hal eksplor hal
            baru membuat saya menemukan keterikan yang sangat kuat. Belajar
            adalah salah satu hal yang saya senangi, terutama dalam bidang
            desain dan pengembangan web. Saya selalu berusaha untuk meningkatkan
            keterampilan saya dan mengikuti tren terbaru dalam industri ini.
            Saya percaya bahwa desain yang baik dapat memberikan pengalaman yang
            menyenangkan bagi pengguna dan membantu mencapai tujuan bisnis.
            Selama ini, saya telah belajar dan bekerja di berbagi bidang usaha
            dari FnB, Web dan mobile apps, hingga membangun usaha sendiri dengan
            ilmu yang saya miliki. Beberapa tools yang sering saya gunakan untuk
            mencapai hasil yang maksimal antara lain Figma, Adobe Photoshop,
            Adobe Illustrator, dan beberapa tools pendukung lainnya. Saya akan
            sangat senang bila anda sekalian berkunjung ke instagram bisnis saya{" "}
            <a
              href="https://www.instagram.com/thejudge.inc/"
              className={linkProperties}
            >
              The Judge.Inc
            </a>
          </p>
        </div>
        <div className="about-pic">
          <div className="pic w-full flex justify-center items-center">
            <img src="img/About Pic.jpg" alt="" className="w-70" />
          </div>
        </div>
      </div>
    </>
  );
}
