import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  totalEntries: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const getPaginationRange = () => {
    let range = [];

    // If the total pages are less than or equal to 5, show all pages
    if (totalPages <= 5) {
      range = Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      if (currentPage <= 3) {
        range = [1, 2, 3, 4, "..."];
      } else if (currentPage >= totalPages - 2) {
        range = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        range = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return range;
  };
  return (
    <section className="bg-white w-full py-4 text-xs">
      <div className="flex items-center justify-center space-x-3 ">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-blueGray cursor-pointer bg-transparent border-none hover:bg-blowSecondary rounded-[8px]"
        >
          Previous
        </Button>

        {getPaginationRange().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(Number(page))}
              className={` h-[31px] w-[31px] flex items-center justify-center rounded-[8px] ${
                currentPage === page
                  ? "bg-blowSecondary text-white"
                  : "bg-lightGray hover:bg-blowSecondary hover:text-white"
              }`}
            >
              {page}
            </button>
          )
        )}
        {/* <p className="h-[31px] w-[31px] rounded-[8px] bg-blowSecondary text-white flex items-center justify-center cursor-pointer">
          1
        </p>
        <p className="h-[31px] w-[31px] rounded-[8px] bg-lightGray flex items-center justify-center cursor-pointer">
          2
        </p>
        <p className="h-[31px] w-[31px] rounded-[8px] bg-lightGray flex items-center justify-center cursor-pointer">
          3
        </p> */}
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-blueGray cursor-pointer bg-transparent border-none hover:bg-blowSecondary rounded-[8px]"
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Pagination;
