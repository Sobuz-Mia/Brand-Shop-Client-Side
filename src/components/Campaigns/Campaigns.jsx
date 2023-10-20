const Campaigns = () => {
  return (
    <div className="bg-[#F5F5F5] p-4 rounded-md">
      <h2 className="text-4xl text-center my-4">Upcoming Campaigns</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-3xl text-center my-4 font-semibold">Happy Hour</h2>
          <div className=" flex md:flex-row flex-col items-center gap-5">
            <h2 className="text-[#FF5417] text-lg my-3">Campaign starts in</h2>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 5 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 49 }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-3xl text-center my-4 font-semibold">Connect the World</h2>
          <p className="text-center my-2 text-red-300">Upto 50% discount in Laptop,Mobile etc</p>
          <div className=" flex items-center gap-5">
            <h2 className="text-[#FF5417] text-lg my-3">Campaign starts in</h2>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 4 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 5 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 14 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 29 }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
