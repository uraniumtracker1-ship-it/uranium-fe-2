import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
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
