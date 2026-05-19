import axios from "axios";
import { Pool } from "pg";

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // try {
  //   console.log('Fetching CME uranium spot price from database...');

  //   // Query the database for the latest CME uranium spot price
  //   const query = `
  //     SELECT globex_code, last_price, price_change, price_change_percent,
  //            volume, is_decrease, source, scraped_at
  //             FROM api_app_cmeuraniumspot
  //             ORDER BY scraped_at DESC
  //             LIMIT 1;
  //   `;

  //   const result = await pool.query(query);

  //   if (result.rows.length === 0) {
  //     console.log('No CME uranium spot price found in database');

  //     return res.status(404).json({
  //       success: false,
  //       data: null,
  //       message: "No CME uranium spot price data available in database"
  //     });
  //   }

  //   // Format the data for frontend consumption
  //   const cmeData = result.rows[0];
  //   const formattedData = {
  //     globex_code: cmeData.globex_code,
  //     last_price: parseFloat(cmeData.last_price),
  //     price_change: parseFloat(cmeData.price_change || 0),
  //     price_change_percent: parseFloat(cmeData.price_change_percent || 0),
  //     volume: parseInt(cmeData.volume || 0),
  //     is_decrease: cmeData.is_decrease,
  //     source: cmeData.source || "CME Group",
  //     scraped_at: cmeData.scraped_at
  //   };

  //   console.log(`Returning CME uranium spot price: ${formattedData.last_price} (${formattedData.price_change_percent >= 0 ? '+' : ''}${formattedData.price_change_percent.toFixed(2)}%)`);

  //   res.status(200).json({
  //     success: true,
  //     data: formattedData,
  //     message: "Retrieved CME uranium spot price from database"
  //   });

  // } catch (error) {
  //   console.error('Error fetching CME uranium spot price from database:', error);

  //   res.status(500).json({
  //     success: false,
  //     data: null,
  //     message: "Database error - unable to fetch CME uranium spot price",
  //     error: error.message
  //   });
  // }

  try {
    const response = await axios.get(
      "https://metal-scrapper.onrender.com/commodities",
    );
    // res.send(response.data);
    const data = response.data;
    const uranium_data = data.filter((i) => i.name === "Uranium");
    res.send(uranium_data);
  } catch (error) {
    res.status(400).send("No data");
  }
}
