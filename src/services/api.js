import axios from "axios";

export const createWallet = async (token, walletName, addresses) => {
	const url = `https://api.blockcypher.com/v1/btc/main/wallets/${walletName}/${addresses}?token=${token}`;
	const data = {
		name: walletName,
		addresses: addresses,
	};

	try {
		const response = await axios.get(url, data, {
			params: {
				token: token,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error creating wallet:", error);
		throw error;
	}
};

// Example usage:

export const listWallets = async (token, walletName) => {
	const url = `https://api.blockcypher.com/v1/btc/main/wallets/hd/${walletName}/addresses`;

	try {
		const response = await axios.get(url, {
			params: {
				token: token,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error listing wallets:", error);
		throw error;
	}
};

export const listTransactions = async (token, walletName) => {
	const url = `https://api.blockcypher.com/v1/btc/main/wallets/hd/${walletName}/full?token=${token}`;

	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error listing transactions:", error);
		throw error;
	}
};

export const fetchBalance = async (token, walletName) => {
	const url = `https://api.blockcypher.com/v1/btc/main/wallets/hd/${walletName}/balance`;

	try {
		const response = await axios.get(url, {
			params: {
				token: token,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching balance:", error);
		throw error;
	}
};

export const fetchTransactionHistory = async (token, walletName) => {
	const url = `https://api.blockcypher.com/v1/btc/main/wallets/hd/${walletName}/full?token=${token}`;

	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching transaction history:", error);
		throw error;
	}
};

export const fetchAddressDetails = async (token, address, before = null) => {
	let url = `https://api.blockcypher.com/v1/btc/main/addrs/${address}/full`;

	if (before) {
		url += `?before=${before}`;
	}

	try {
		const response = await axios.get(url, {
			params: {
				token: token,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching address details:", error);
		throw error;
	}
};
