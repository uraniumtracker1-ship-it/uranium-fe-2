import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const fallbackData = [
    {
      metal_name: "Uranium",
      price: 4.15,
      price_change: -0.08,
      price_change_percent: -1.89,
      source: "Fallback",
    },
    {
      metal_name: "Aluminum",
      price: 0.91,
      price_change: -0.02,
      price_change_percent: -1.51,
      source: "Fallback",
    },
    {
      metal_name: "Nickel",
      price: 8.51,
      price_change: -0.16,
      price_change_percent: -2.27,
      source: "Fallback",
    },
    {
      metal_name: "Zinc",
      price: 1.25,
      price_change: -0.02,
      price_change_percent: -1.7,
      source: "Fallback",
    },
  ];

  try {
    const response = await axios.get(
      "https://metal-scrapper.onrender.com/commodities",
    );
    // res.status(200).send(response.data);
    const data = response.data;
    const metalPrices = data.map((i) => ({
      metal_name: i.name,
      price: i.price,
      price_change: i.day_change,
      price_change_percent: i.percent_change,
    }));

    res.status(200).send(metalPrices);
  } catch (error) {
    res.status(400).send(fallbackData);
  }
}
