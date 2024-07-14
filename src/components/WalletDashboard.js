import React, { useState, useEffect } from "react";
import WalletCard from "./WalletCard";
import Add from "../assets/add.png";
import Modal from "./Modal";
import {
	createWallet,
	listWallets,
	listTransactions,
	fetchBalance,
	fetchTransactionHistory,
	fetchAddressDetails,
} from "../services/api";
const WalletDashboard = () => {
	const [wallets, setWallets] = useState([
		{ name: "BITCOIN", amount: "BTC 0.00256" },
		{ name: "BITCOIN 1", amount: "BTC 0.00256" },
		{ name: "BITCOIN 2", amount: "BTC 0.00256" },
		{ name: "BITCOIN 3", amount: "BTC 0.00256" },
		{ name: "BITCOIN 4", amount: "BTC 0.00256" },
	]);

	const token = "fa6f391417bc46e495b857993bfaadd3";
	const walletName = "alice";
	const addresses = ["1JcX75oraJEmzXXHpDjRctw3BX6qDmFM8e"];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [addressDetails, setAddressDetails] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Import wallet
				const wallet = await createWallet(token, walletName, addresses);
				console.log("Imported wallet:", wallet);

				// List wallets
				const walletsData = await listWallets(token, walletName);
				setWallets(walletsData.chains[0].chain_addresses);

				// List transactions
				const transactionsData = await listTransactions(token, walletName);
				setTransactions(transactionsData.txs);

				// Fetch balance
				const balance = await fetchBalance(token, walletName);
				console.log("Balance:", balance);

				// Fetch transaction history
				const history = await fetchTransactionHistory(token, walletName);
				console.log("Transaction history:", history);

				// Fetch address details
				const addressDetailsPromises =
					walletsData.chains[0].chain_addresses.map(async (wallet) => {
						return await fetchAddressDetails(token, wallet.address);
					});

				const allAddressDetails = await Promise.all(addressDetailsPromises);
				setAddressDetails(allAddressDetails);
				console.log("Address details:", allAddressDetails);
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className=" bg-[#0A1119]">
			<div className="flex justify-end  items-center my-2">
				<button
					className="py-2 px-4 flex items-center bg-gray-700 rounded-lg"
					onClick={openModal}
				>
					<img src={`${Add}`} className="" alt="add" />
					<span className="flex uppercase mx-3 items-center">
						Import Wallet
					</span>
				</button>
				{isModalOpen && <Modal closeModal={closeModal} />}
			</div>
			<h1 className="text-2xl font-semibold py-4">
				Total Coins - {wallets.length}
			</h1>
			<hr className="w-full border-t-2 border-[#1E2328]" />
			<div className=" py-2 rounded-lg">
				<table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
					<thead>
						<tr className="bg-[#0A1119] text-left text-gray-500">
							<th className="p-4">Coin</th>
							<th className="p-4 text-center">Holdings</th>
							<th className="p-4 text-center">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y-8 divide-opacity-100 divide-[#0A1119] ">
						{wallets.map((wallet, index) => (
							<WalletCard
								key={index}
								name={wallet.name}
								amount={wallet.amount}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default WalletDashboard;
