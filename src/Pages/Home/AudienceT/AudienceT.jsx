import target from "../../../assets/target.png";

const AudienceT = () => {
  return (
    <div className="bg-[#092635] py-20">
      <div className="max-w-screen-xl mx-auto space-y-8">
        <div className="w-1/2 mx-auto space-y-5">
          <h1 className="uppercase text-center text-4xl text-warning">
            Targeted Audience
          </h1>
          <p className="text-pretty text-center">
            Welcome to our diverse community! This website caters to a wide
            range of individuals, providing valuable resources and opportunities
            tailored to various professions and interests. Whether you're a
            seasoned professional or just starting out in your career, there's
            something here for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="">
            <img src={target} alt="" />
          </div>
          <div className="flex items-center">
            <div className="space-y-3">
              <h1 className="text-2xl">
               <span className="text-2xl">Hello...</span> <br />
                Developers and Programmers
              </h1>
              <p className="text-lg">
                Here you can Access to coding challenges, tutorials, and a
                vibrant community for networking and collaboration. Stay updated
                on the latest technologies and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceT;
