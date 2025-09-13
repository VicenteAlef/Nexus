export const Container = ({ children }) => {
  return (
    <section className="w-full py-8 md:py-15 px-5 md:px-[5%] lg:px-[10%] xl:px-[15%]">
      {children}
    </section>
  );
};

export const ContainerFull = ({ children }) => {
  return (
    <section className="w-full py-8 md:py-15 px-5 md:px-[5%]">
      {children}
    </section>
  );
};

export const Title = ({ children }) => {
  return (
    <h2 className="text-center uppercase text-3xl md:text-4xl font-bold text-blue-800">
      {children}
    </h2>
  );
};

export const OverTitle = ({ children }) => {
  return (
    <h2 className="text-center uppercase text-2xl md:text-3xl font-bold text-white">
      {children}
    </h2>
  );
};

export const Card = ({ children }) => {
  return (
    <div className="w-[280px] h-[420px] flex flex-col items-center justify-center bg-white border-4 border-blue-700 p-5 rounded-xl shadow-[0_15px_15px_#00000050] hover:scale-110 duration-500 ease-in-out hover:shadow-[0_20px_20px_#00000050] cursor-default">
      {children}
    </div>
  );
};

export const GaleryPlans = ({ children }) => {
  return (
    <div className="w-full flex flex-col flex-wrap md:flex-row gap-5 my-5 md:my-10  items-center justify-center">
      {children}
    </div>
  );
};
