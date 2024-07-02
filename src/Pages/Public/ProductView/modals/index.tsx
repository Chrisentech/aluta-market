import React from "react";
import DeliveryAddressFormModal from "./ChangeAddress";
import { SkynetModal } from "../../../../Shared/Components";

const ModalContent: React.FC<{ active: string | null }> = ({ active }) => {
	return (
		<>
			{active && active === "changeAddress" ? (
				<DeliveryAddressFormModal active={active} />
			) : (
				<SkynetModal />
			)}
		</>
	);
};

export default ModalContent;
