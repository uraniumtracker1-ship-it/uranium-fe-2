export const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL || 'https://lithiumdjango-production.up.railway.app';

//HOME & NEWS APIS

export const LITHIUM_NEWS = `${BASE_URL}/api/lithium_news/`;

export const SPORT_PRICE_CHART = `${BASE_URL}/api/spot-price-chart/`;

export const LITHIUM_PRICES = '/api/lithium-prices';

// Updated to use local API routes for press releases and stock news
export const PRESS_RELEASE = '/api/press-releases';

export const STOCK_NEWS = '/api/stock-news';

export const GENERAL_NEWS = '/api/general-news/';

export const SUBSTACKS = '/api/substacks';

//INVESTMENT APIS

export const MOST_FOLLOWED = '/api/most-followed';

export const LITHIUM_STOCK_DETAIL = `${BASE_URL}/api/lithium-stock-detail/`;

// Updated to use local API route for stock metrics
export const STOCK_SCREENER = '/api/stock-metrics';

export const FOLLOWED_STOCKS = `${BASE_URL}/api/followed-stocks/`;

export const INSIDER_TRANSACTIONS = '/api/insider-transactions';

//VIDEOS API

export const VIDEOS = '/api/youtube-videos';

//CALENDAR

export const CALENDAR = `${BASE_URL}/api/calendar-events`;

///FORUM

export const FORUM_POSTS = `${BASE_URL}/community/api/forum/posts/`;
