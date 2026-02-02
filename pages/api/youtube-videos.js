import { Pool } from 'pg';

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { category, limit = 20 } = req.query;
    
    let query = `
      SELECT 
        id,
        video_category,
        video_link,
        channel_name,
        date,
        title,
        company_name,
        stock_ticker,
        thumbnail_url,
        duration,
        views,
        video_id,
        created_at
      FROM api_app_videopagedata
    `;
    
    const params = [];
    
    if (category) {
      query += ' WHERE video_category = $1';
      params.push(category);
      query += ' ORDER BY created_at DESC LIMIT $2';
      params.push(parseInt(limit));
    } else {
      query += ' ORDER BY created_at DESC LIMIT $1';
      params.push(parseInt(limit));
    }

    const result = await pool.query(query, params);
    
    const videos = result.rows.map(row => ({
      id: row.id,
      category: row.video_category,
      link: row.video_link,
      channel: row.channel_name,
      date: row.date,
      title: row.title,
      company: row.company_name,
      ticker: row.stock_ticker,
      thumbnail: row.thumbnail_url,
      duration: row.duration,
      views: row.views,
      videoId: row.video_id,
      createdAt: row.created_at
    }));

    // Get category counts
    const countQuery = `
      SELECT video_category, COUNT(*) as count
      FROM api_app_videopagedata 
      GROUP BY video_category 
      ORDER BY video_category
    `;
    const countResult = await pool.query(countQuery);
    const categoryCounts = {};
    countResult.rows.forEach(row => {
      categoryCounts[row.video_category] = parseInt(row.count);
    });

    res.status(200).json({
      success: true,
      total: videos.length,
      categoryCounts,
      videos
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch YouTube videos',
      error: error.message 
    });
  }
}