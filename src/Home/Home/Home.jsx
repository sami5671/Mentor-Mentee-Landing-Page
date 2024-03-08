import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import loadingImg from "../../assets/Images/loading4.gif";

const Home = () => {
  // ----------------------------------------------------------------

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // ----------------------------------------------------------------
  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center ">
          <img src={loadingImg} alt="" className="" />
        </div>
      ) : (
        <div>
          <Banner></Banner>
        </div>
      )}
    </>
  );
};

export default Home;
