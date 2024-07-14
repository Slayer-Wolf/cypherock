import React, { useState, useEffect } from "react";
import TransactionCard from "../components/TransactionCard.js";
import {
	createWallet,
	listWallets,
	listTransactions,
	fetchBalance,
	fetchTransactionHistory,
	fetchAddressDetails,
} from "../services/api";
const LastTransactions = () => {
	const [wallets, setWallets] = useState([]);
	const [addressDetails, setAddressDetails] = useState([]);
	const [transactions, setTransactions] = useState([
		{
			date: "12/11/2020 10:31:20 AM",
			wallet: "Aru",
			amount: "0.5268 BTC",
			result: "RECEIVED",
			status: "SUCCESS",
		},
		{
			date: "12/11/2020 10:31:20 AM",
			wallet: "Aru",
			amount: "0.5268 BTC",
			result: "RECEIVED",
			status: "SUCCESS",
		},
		{
			date: "12/11/2020 10:31:20 AM",
			wallet: "Aru",
			amount: "0.5268 BTC",
			result: "RECEIVED",
			status: "SUCCESS",
		},
		{
			date: "12/11/2020 10:31:20 AM",
			wallet: "Aru",
			amount: "0.5268 BTC",
			result: "RECEIVED",
			status: "SUCCESS",
		},
		{
			date: "12/11/2020 10:31:20 AM",
			wallet: "Aru",
			amount: "0.5268 BTC",
			result: "RECEIVED",
			status: "SUCCESS",
		},
	]);

	const token = "fa6f391417bc46e495b857993bfaadd3";
	const walletName = "alice";
	const addresses = ["1JcX75oraJEmzXXHpDjRctw3BX6qDmFM8e"];

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
	}, [addresses]);
	return (
		<div>
			<h1 className="text-2xl font-semibold mb-4 text-[#C78D4E]">
				Transactions
			</h1>
			<h2 className="text-lg font-semibold mb-4">
				Total Transactions - {transactions.length}
			</h2>
			<hr className="w-full border-t-2 border-[#1E2328]" />
			<div className=" py-2 rounded-lg">
				<table className="min-w-full bg-gray-800 rounded-lg overflow-hidden ">
					<thead>
						<tr className="bg-[#0A1119] text-left text-gray-500">
							<th className="p-4">Coin</th>
							<th className="p-4 text-center">Wallet</th>
							<th className="p-4 text-center">Amount</th>
							<th className="p-4 text-center">Result</th>
							<th className="p-4 text-center">Status</th>
						</tr>
					</thead>
					<tbody className="divide-y-8 divide-opacity-100 divide-[#0A1119] ">
						{transactions.map((wallet, index) => (
							<TransactionCard
								key={index}
								date={wallet.date}
								wallet={wallet.wallet}
								amount={wallet.amount}
								result={wallet.result}
								status={wallet.status}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LastTransactions;
