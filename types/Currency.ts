interface CurrencyData {
    id: string;
    symbol: string;
    name: string;
    price_usd: string;
}

export interface Currency {
    data: CurrencyData[];
}
