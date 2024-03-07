import "./Banner.css";
import banner from "../../assets/Images/banner.jpeg";
const Banner = () => {
  return (
    <>
      {/* banner  */}
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center justify-center">
        <img
          className="absolute w-full h-full object-cover object-center opacity-90"
          src={banner}
          alt="Banner"
        />

        <div className="absolute bg-slate-900 bg-opacity-60 w-full h-full rounded-md flex flex-col items-center justify-center">
          <div className="text-center lg:px-44">
            <h2 className="text-2xl lg:text-4xl mt-2 font-semibold mb-4 text-white font-Arial">
              Mentoring Can be both simple <br />
              and life-changing
            </h2>
            <p className="text-base sm:text-lg px-2 md:text-xl lg:text-2xl text-white">
              hello
            </p>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="container">
        <div className="line line-1">
          <div
            className="wave wave1"
            style={{ backgroundImage: "url(https://i.ibb.co/bm58z1Q/1.png)" }}
          ></div>
        </div>
        <div className="line line-2">
          <div
            className="wave wave2"
            style={{ backgroundImage: "url(https://i.ibb.co/dcXSDQJ/2.png)" }}
          ></div>
        </div>
        <div className="line line-3">
          <div
            className="wave wave3"
            style={{ backgroundImage: "url(https://i.ibb.co/v3VvJfT/3.png)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
