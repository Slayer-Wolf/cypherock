import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import WalletDashboard from "./components/WalletDashboard";

import LastTransactions from "./components/LastTransactions";
import Logo from "./assets/cysunc logo.png";
import Sync from "./assets/sync.png";

function App() {
	return (
		<Router>
			<div className=" h-screen flex flex-col  bg-[#0A1119]  ">
				<header className="flex justify-between items-center p-4 border-b border-gray-700">
					<img src={`${Logo}`} className="text-xl text-white" alt="logo" />
					<button className="flex justify-between items-center text-[#C78D4E] py-2 px-2  	">
						<span className="flex text-xl mx-3 items-center">Synced</span>
						<img src={`${Sync}`} className="w-4 h-5" alt="sync" />
					</button>
				</header>
				<div className="flex  h-5/6 overflow-y-auto ">
					<Sidebar />
					<div className="flex-1 nowrap bg-[#0A1119] text-white p-8">
						<Routes>
							<Route path="/" element={<WalletDashboard />} />
							<Route path="/transactions" element={<LastTransactions />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
