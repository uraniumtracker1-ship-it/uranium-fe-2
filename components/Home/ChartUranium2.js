import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { SPORT_PRICE_CHART } from "@/src/api/uraniumAPI";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartUranium2 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(SPORT_PRICE_CHART);
        const result = response.data;

        if (!result || result.length === 0) {
          setError("No data available");
          setData(null);
        } else {
          setData(result[0].price_chart);
          setError(null);
        }
      } catch (err) {
        setError("Failed to fetch data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const chartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: data ? data.map((item) => item.DateTime) : [],
      labels: {
        show: true,
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          colors: "#595e66",
        },
        rotate: -45,
        trim: false,
        formatter: function (value) {
          const date = new Date(value);
          return date.getDate() === 1
            ? date.toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
              })
            : "";
        },
      },
      title: { text: "Date/Time", style: { fontSize: "0px", fontWeight: 0 } },
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          colors: "#595e66",
        },
        formatter: (value) => `${value.toLocaleString()}`,
      },
      title: { text: "Price (USD)", style: { fontSize: "0px", fontWeight: 0 } },
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    stroke: { width: 2, curve: "smooth" },
    theme: { mode: "light" },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      opacity: 0.1,
    },
    colors: ["#0089A4"],
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd MMM yyyy",
      },
      y: {
        formatter: (value, { dataPointIndex }) => {
          const date = new Date(data[dataPointIndex].DateTime);
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return `${formattedDate}: ${value.toLocaleString()}`;
        },
      },
    },
  };

  const chartSeries = [
    {
      name: "Uranium2",
      data: data
        ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
        : [],
    },
  ];

  return (
    <div className="-ml-4 -mt-3">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={280}
        width="100%"
      />
    </div>
  );
};

export default ChartUranium2;
