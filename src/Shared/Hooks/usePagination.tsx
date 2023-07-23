import { useState } from "react";

const usePagination = (totalPages: number, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return { currentPage, goToPage, nextPage, prevPage };
};

export default usePagination;
