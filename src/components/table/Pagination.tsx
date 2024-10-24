const Pagination = () => {
  return (
    <section className="bg-white w-full py-4 text-xs">
      <div className="flex items-center justify-center space-x-3 ">
        <p className="text-blueGray cursor-pointer">Previous</p>
        <p className="h-[31px] w-[31px] rounded-[8px] bg-blowSecondary text-white flex items-center justify-center cursor-pointer">
          1
        </p>
        <p className="h-[31px] w-[31px] rounded-[8px] bg-lightGray flex items-center justify-center cursor-pointer">
          2
        </p>
        <p className="h-[31px] w-[31px] rounded-[8px] bg-lightGray flex items-center justify-center cursor-pointer">
          3
        </p>
        <p className="text-blueGray cursor-pointer">Next</p>
      </div>
    </section>
  );
};

export default Pagination;
