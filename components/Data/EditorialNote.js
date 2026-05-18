import React from "react";
import * as s from "./styles";

const EditorialNote = () => {
  return (
    <div style={s.editorial}>
      <div style={s.editorialIcon}>📝</div>
      <div>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: s.vars.ink,
            marginBottom: "4px",
          }}
        >
          Editorial note
        </p>
        <p
          style={{
            fontSize: "12px",
            color: s.vars.ink3,
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          This page tracks 227 uranium assets across 10 countries and is updated
          regularly with price and production data from UxC, TradeTech,
          Kazatomprom, Cameco, USGS, IEA, IAEA, and World Nuclear Association.
          Data sources: UxC (spot/LT prices), TradeTech (conversion/SWU),
          Kazatomprom annual reports, USGS Mineral Commodity Summaries, IAEA
          PRIS database, WNA. This is information, not financial advice. Last
          reviewed:{" "}
          <span style={{ ...s.liveVal, fontWeight: "600" }}>April 2026</span>.
        </p>
      </div>
    </div>
  );
};

export default EditorialNote;
