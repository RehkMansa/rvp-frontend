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

export const chartOptions = {
	height: 300,
	timeScale: {
		timeVisible: true,
		secondsVisible: false,
	},
	autoSize: true,
	layout: {
		background: {
			color: '#20252b',
		},
		textColor: '#A7B1BC',
		fontFamily: 'Satoshi, Ubuntu, Arial, sans-serif',
		fontWeight: 500,
	},
	grid: {
		vertLines: {
			color: '#1C2127',
		},
		horzLines: {
			color: '#1C2127',
		},
	},
};

export const CANDLE_API_URL =
	'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000';
