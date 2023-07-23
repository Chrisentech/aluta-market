import React from "react";
import { PaginationProps } from "../../../Interfaces";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  PageButton,
  PaginationContainer,
  Dots,
  PaginationWrapper,
  Select,
} from "./paginatione.styles";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  goToPage,
  nextPage,
  prevPage,
}) => {
  return (
    <PaginationContainer>
      <PaginationWrapper>
        <PageButton onClick={prevPage} disabled={currentPage === 1}>
          <FiChevronLeft />
        </PageButton>
        <PageButton onClick={() => goToPage(1)} active={currentPage === 1}>
          1
        </PageButton>
        {currentPage > 3 && <Dots>...</Dots>}
        {currentPage > 2 && (
          <PageButton onClick={() => goToPage(currentPage - 1)}>
            {currentPage - 1}
          </PageButton>
        )}
        {currentPage !== 1 && currentPage !== totalPages && (
          <PageButton onClick={() => goToPage(currentPage)} active>
            {currentPage}
          </PageButton>
        )}
        {currentPage < totalPages - 1 && (
          <PageButton onClick={() => goToPage(currentPage + 1)}>
            {currentPage + 1}
          </PageButton>
        )}
        {currentPage < totalPages - 2 && <Dots>...</Dots>}
        {totalPages > 1 && (
          <PageButton
            onClick={() => goToPage(totalPages)}
            active={currentPage === totalPages}
          >
            {totalPages}
          </PageButton>
        )}
        <PageButton onClick={nextPage} disabled={currentPage === totalPages}>
          <FiChevronRight />
        </PageButton>
      </PaginationWrapper>
      <Select>
        <option>Show 20</option>
        <option>Show 50</option>
        <option>Show 100</option>
      </Select>
    </PaginationContainer>
  );
};

export default Pagination;
