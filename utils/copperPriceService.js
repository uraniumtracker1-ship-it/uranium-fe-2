// Lithium Price Service - Database Integration
// This service fetches lithium prices from our database instead of Yahoo Finance

export const fetchRealLithiumPrice = async () => {
  try {
    // Fetch from our database API instead of Yahoo Finance
    const response = await fetch('/api/lithium-prices');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Find lithium data from the response
    const lithiumData = data.find(item => 
      item.metal_name === "Lithium" || item.pgm_name === "Lithium"
    );
    
    if (!lithiumData) {
      throw new Error('Lithium price data not found in response');
    }
    
    console.log('Database Lithium Data:', lithiumData);
    
    return lithiumData;
    
  } catch (error) {
    console.error('Error fetching lithium price from database:', error);
    
    // Return fallback data with realistic changes
    return {
      metal_name: "Lithium",
      pgm_name: "Lithium", 
      price: 4.12,
      price_change: -0.08,
      price_change_percent: -1.91,
      last_updated: new Date().toISOString(),
      source: "Fallback Data",
      error: error.message
    };
  }
};

// Direct frontend fetch without CORS proxy
export const fetchLithiumPriceDirectly = async () => {
  try {
    // This will be called directly from React components
    const response = await fetch('/api/lithium-prices');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0]; // Return the lithium data
    
  } catch (error) {
    console.error('Error fetching lithium price from API:', error);
    return null;
  }
};

// Fetch multiple metal prices from database
export const fetchAllMetalPrices = async () => {
  try {
    // Fetch from our database API
    const response = await fetch('/api/lithium-prices');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Validate that we have data
    if (!data || data.length === 0) {
      throw new Error('No metal price data available');
    }
    
    console.log(`Fetched ${data.length} metal prices from database`);
    return data;
    
  } catch (error) {
    console.error('Error fetching all metal prices from database:', error);
    
    // Return fallback data with realistic changes
    return [
      {
        metal_name: "Lithium",
        pgm_name: "Lithium",
        price: 4.12,
        price_change: -0.08,
        price_change_percent: -1.91,
        last_updated: new Date().toISOString(),
        source: "Fallback Data",
        error: "Unable to fetch real-time data from database"
      }
    ];
  }
};