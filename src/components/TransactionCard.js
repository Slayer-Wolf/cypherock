import React from "react";
import BitCoin from "../assets/bitcoin.png";
import Recieved from "../assets/recievedArrow.png";

const TransactionCard = ({ date, wallet, amount, result, status }) => {
	return (
		<tr className="bg-[#161C23]  space-2 py-2 w-full rounded-lg ">
			<td className="p-4 flex   items-center">
				<img
					className="w-8 h-8 rounded-full mr-4"
					src={BitCoin}
					alt="bitCoin"
				/>
				<span>{date}</span>
			</td>
			<td className="p-4  text-center">{wallet}</td>
			<td className="p-4  text-center">{amount}</td>
			<td className="p-4 ml-50 flex items-center text-center uppercase text-[#8484F1]">
				<img src={`${Recieved}`} alt="icon" />
				{result}
			</td>
			<td className="p-4 text-[#8484F1] uppercase text-center">{status}</td>
		</tr>
	);
};

export default TransactionCard;
