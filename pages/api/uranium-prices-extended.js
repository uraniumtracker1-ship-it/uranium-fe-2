import { Pool } from 'pg';

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching metal prices from database...');
    
    // Query the database for metal prices
    const query = `
      SELECT metal_name, symbol, price, price_change, price_change_percent, 
             currency, exchange, last_updated, created_at
      FROM api_app_metalprices 
      ORDER BY metal_name;
    `;
    
    const result = await pool.query(query);
    
    if (result.rows.length === 0) {
      console.log('No metal prices found in database, returning fallback data');
      
      // Return fallback data if no database records
      const fallbackPrices = [
        {
          metal_name: "Uranium",
          price: 158500,
          price_change: 3745.07,
          price_change_percent: 2.42,
          last_updated: new Date().toISOString(),
          source: "Fallback Data",
          currency: "CNY",
          exchange: "Trading Economics"
        },
        {
          metal_name: "Uranium",
          price: 0.91,
          price_change: -0.02,
          price_change_percent: -1.51,
          last_updated: new Date().toISOString(),
          source: "Fallback Data",
          currency: "USD",
          exchange: "COMEX"
        }
      ];
      
      return res.status(200).json(fallbackPrices);
    }
    
    // Format the data for frontend consumption
    const metalPrices = result.rows.map(row => ({
      metal_name: row.metal_name,
      price: parseFloat(row.price),
      price_change: parseFloat(row.price_change || 0),
      price_change_percent: parseFloat(row.price_change_percent || 0),
      last_updated: row.last_updated,
      source: "Database",
      currency: row.currency || "USD",
      exchange: row.exchange || "COMEX",
      symbol: row.symbol
    }));
    
    console.log(`Returning ${metalPrices.length} metal price records from database`);
    
    res.status(200).json(metalPrices);
    
  } catch (error) {
    console.error('Error fetching metal prices from database:', error);
    
    // Fallback to basic mock data
    const fallbackPrices = [
      {
        metal_name: "Uranium",
        price: 158500,
        price_change: 3745.07,
        price_change_percent: 2.42,
        last_updated: new Date().toISOString(),
        source: "Fallback Data",
        currency: "CNY",
        exchange: "Trading Economics"
      },
      {
        metal_name: "Uranium",
        price: 0.91,
        price_change: -0.02,
        price_change_percent: -1.51,
        last_updated: new Date().toISOString(),
        source: "Fallback Data",
        currency: "USD",
        exchange: "COMEX"
      }
    ];
    
    res.status(200).json(fallbackPrices);
  }
}
