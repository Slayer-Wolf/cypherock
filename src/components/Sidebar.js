import React from "react";
import { NavLink } from "react-router-dom";
import LastTransactions from "../assets/transactions.png";
import Wallet from "../assets/wallet.png";

const Sidebar = () => {
	return (
		<div className="w-1/5 bg-[#161C23] rounded-lg m-5 text-white flex flex-col">
			<div className="m-5 pt-5 px-2 flex-1 overflow-y-auto">
				<div className="mb-5 relative">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "block py-2 pl-4 pr-2 px-full border-l-4 border-[#C78D4E] text-[#C78D4E] font-bold relative"
								: "block py-2 pl-4 pr-2 rounded-lg hover:bg-gray-700 relative"
						}
					>
						<div className="flex items-center">
							<span className="mr-2">
								<img src={Wallet} alt="icon" />
							</span>
							Wallets
						</div>
					</NavLink>
				</div>

				<hr className="w-full border-t-2 border-[#1E2328]" />

				<div className="my-5 relative">
					<NavLink
						to="/transactions"
						className={({ isActive }) =>
							isActive
								? "block py-2 pl-4 pr-2 border-l-4 border-[#C78D4E] text-[#C78D4E] font-bold relative"
								: "block py-2 pl-4 pr-2 rounded-lg hover:bg-gray-700 relative"
						}
					>
						<div className="flex items-center">
							<span className="mr-2">
								<img src={LastTransactions} alt="icon" />
							</span>
							Last Transactions
						</div>
					</NavLink>
				</div>

				<hr className="w-full border-t-2 border-[#1E2328]" />
			</div>
			<div>
				<button className="w-full py-2 bg-[#4B3C2B] text-white rounded-b-lg">
					Support
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
