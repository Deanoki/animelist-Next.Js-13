const Loading = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-color-primary text-4xl ">Mohon Tunggu</h1>
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default Loading;
