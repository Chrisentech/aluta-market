import React, { useEffect, useState } from "react";
import { Card } from "../../../../../Shared/Components";
import { MoneyIcon } from "../../../../../assets";
import { Heading } from "../payment.styles";
import { MdDeleteOutline } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectStore } from "../../../../../Features/store/storeSlice";

const WithdrawAccountTab: React.FC = () => {
	const [banks, setBanks] = useState<any>(null); // Type for banks array
	const store = useSelector(selectStore);
	const fetchBank = async () => {
		try {
			const response = await fetch("https://nigerianbanks.xyz/");

			if (!response.ok) {
				throw new Error(`Error fetching banks: ${response.statusText}`);
			}

			const bankData = await response.json(); // Assuming the response is JSON
			setBanks(bankData);
		} catch (error) {
			setBanks({ logo: "https://nigerianbanks.xyz/logo/default-image.png" });
			console.error("Error fetching banks:", error);
			// Handle errors appropriately (e.g., display an error message to the user)
		}
	};

	const myBank = (bank: string) => {
		return banks?.find((x: any) => x.name === bank);
	};

	useEffect(() => {
		fetchBank(); // Call fetchBank on component mount
	}, []);
	return (
		<Card
			width="unset"
			padding="40px 80px"
			height="500px"
			borderRadius="20px"
			onHover={false}
			className="card4"
		>
			<div className="container">
				<Heading>
					<MoneyIcon />
					<h2>Withdrawal account</h2>
				</Heading>
				<div className="info2">
					NB: For safety reason, you can only add max. of 3 accounts, and each
					account must be in your name
				</div>

				{store?.accounts?.map((account: any, i: number) => {
					return (
						<div className="account" key={i}>
							<img src={myBank("Wema Bank")?.logo} alt="" width={30} />

							<div className="descr">
								<p>{myBank("Wema Bank")?.name}</p>
								<h2>227722112</h2>
								<p>Arike Lauren</p>
							</div>

							<MdDeleteOutline className="svg" size="21px" color="red" />
						</div>
					);
				})}

				<button disabled={store?.accounts?.length < 3} className="button">
					<IoAdd />
					<span>Add Account</span>
				</button>
			</div>
		</Card>
	);
};

export default WithdrawAccountTab;
