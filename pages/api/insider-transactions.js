import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Fetching insider transactions from database...');
    
    const result = await query(`
      SELECT 
        id,
        ticker,
        company_name,
        insider_name,
        title,
        trade_type,
        price,
        qty,
        value,
        owned,
        transaction_date,
        country
      FROM api_app_insidertransactions 
      ORDER BY transaction_date DESC
      LIMIT 1000
    `);

    console.log(`Found ${result.rows.length} insider transaction records`);

    const transactions = result.rows.map(row => ({
      id: row.id,
      ticker: row.ticker,
      company_name: row.company_name,
      insider_name: row.insider_name,
      title: row.title,
      trade_type: row.trade_type,
      price: row.price,
      qty: row.qty,
      value: row.value,
      owned: row.owned,
      transaction_date: row.transaction_date,
      country: row.country
    }));

    res.status(200).json(transactions);
    
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch insider transactions'
    });
  }
}
