export const NAVLINKS = [
	{
		name: 'exchange',
		url: '/',
	},
	{
		name: 'wallets',
		url: 'wallets',
	},
	{
		name: 'roqqu hub',
		url: 'roqqu hub',
	},
];

export interface Order {
	price: number;
	amount: number;
	total: number;
}

export interface OrderBOOK {
	bids: Order[];
	asks: Order[];
}

export const formatOrders = (orders: number[][]): Order[] => {
	return orders.map(([price, amount]) => {
		const total = price * amount;
		return { price, amount, total };
	});
};
