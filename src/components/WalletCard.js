import React from "react";
import BitCoin from "../assets/bitcoin.png";
import Trash from "../assets/trash-2.png";

const WalletCard = ({ name, amount }) => {
	return (
		<tr className="bg-[#161C23] space-2 py-2 w-full rounded-lg ">
			<td className="p-4 flex   items-center">
				<img
					className="w-8 h-8 rounded-full mr-4"
					src={BitCoin}
					alt="bitCoin"
				/>
				<span>{name}</span>
			</td>
			<td className="p-4  text-center">{amount}</td>
			<td className="p-4  flex justify-center items-center ">
				<button className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
					<img className="w-full h-full" src={Trash} alt="deleteIcon" />
				</button>
			</td>
		</tr>
	);
};

export default WalletCard;
