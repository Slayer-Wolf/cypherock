import React, { useState } from "react";
import {
	createWallet,
	listWallets,
	listTransactions,
	fetchBalance,
	fetchTransactionHistory,
	fetchAddressDetails,
} from "../services/api";
const Modal = ({ closeModal }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [addressDetails, setAddressDetails] = useState([]);
	const handleAPi = (e) => {
		e.preventDefault();
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
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
			<div className="bg-[#171C23] p-10 rounded-lg overflow-hidden shadow-lg w-2/5">
				<div className="flex justify-between items-center p-4 ">
					<h2 className="text-2xl ml-48 ">Import Wallet</h2>
					<button
						className="text-white text-2xl hover:text-gray-700"
						onClick={closeModal}
					>
						&times;
					</button>
				</div>
				<div className="p-4">
					<div className="mb-4">
						<label className="block text-[#A6A2A2] text-sm font-bold mb-2">
							Enter your wallet name :
						</label>
						<input
							type="text"
							className="w-full bg-[#20242B] px-3 py-2 border-1 border-gray-800 rounded-lg focus:outline-none focus:border-[#C5C5C5]"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-[#A6A2A2] text-sm font-bold mb-2">
							Enter your Mnemonic :
						</label>
						<textarea
							rows="4"
							className="w-full px-3 py-2 bg-[#20242B] border-1 rounded-lg focus:outline-none focus:border-[#C5C5C5]"
						></textarea>
					</div>
					<div className="flex justify-center">
						<button
							onClick={handleApi}
							className="px-4 py-2 bg-[#DB953C] text-white rounded-lg"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
