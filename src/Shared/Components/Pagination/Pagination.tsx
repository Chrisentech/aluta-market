import React, { useState } from "react";
import { PaginationProps } from "../../../Interfaces";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
	PageButton,
	PaginationContainer,
	Dots,
	PaginationWrapper,
	Select,
} from "./paginatione.styles";
import Puff from "react-loading-icons/dist/esm/components/puff";
import { AppColors } from "../../Constants";

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	goToPage,
	nextPage,
	isLoading,
	prevPage,
	handlePageSizeChange,
}) => {
	const [pageSize, setPageSize] = useState(20); // Default page size

	const handleChangePageSize = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const newSize = parseInt(event.target.value);
		setPageSize(newSize);
		handlePageSizeChange(newSize); // Call the function passed from the parent component
	};
	return (
		<PaginationContainer>
			{isLoading ? (
				<PaginationWrapper>
					<PageButton
						onClick={prevPage}
						disabled={currentPage === 1 || isLoading}
					>
						<FiChevronLeft />
					</PageButton>
					<PageButton
						onClick={() => goToPage(1)}
						active={currentPage === 1 || isLoading}
					>
						1
					</PageButton>
					{currentPage > 3 && <Dots>...</Dots>}
					{currentPage > 2 && (
						<PageButton
							onClick={() => goToPage(currentPage - 1)}
							disabled={isLoading}
						>
							{currentPage - 1}
						</PageButton>
					)}
					{currentPage !== 1 && currentPage !== totalPages && (
						<PageButton
							onClick={() => goToPage(currentPage)}
							active
							disabled={isLoading}
						>
							{currentPage}
						</PageButton>
					)}
					{currentPage < totalPages - 1 && (
						<PageButton
							onClick={() => goToPage(currentPage + 1)}
							disabled={isLoading}
						>
							{currentPage + 1}
						</PageButton>
					)}
					{currentPage < totalPages - 2 && <Dots>...</Dots>}
					{totalPages > 1 && (
						<PageButton
							onClick={() => goToPage(totalPages)}
							active={currentPage === totalPages}
							disabled={isLoading}
						>
							{totalPages}
						</PageButton>
					)}

					<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />

					<PageButton
						onClick={prevPage}
						disabled={currentPage === totalPages || isLoading}
					>
						<FiChevronRight />
					</PageButton>
				</PaginationWrapper>
			) : (
				<>
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
						<PageButton
							onClick={nextPage}
							disabled={currentPage === totalPages}
						>
							<FiChevronRight />
						</PageButton>
					</PaginationWrapper>
					<Select value={pageSize} onChange={handleChangePageSize}>
						<option value={20}>Show 20</option>
						<option value={50}>Show 50</option>
						<option value={100}>Show 100</option>
					</Select>
				</>
			)}
		</PaginationContainer>
	);
};

export default Pagination;
