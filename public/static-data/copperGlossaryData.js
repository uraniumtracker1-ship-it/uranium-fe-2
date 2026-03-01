const data = [
  {
    title: "Anode",
    content: "The positive electrode in electrolytic lithium refining, typically made from blister lithium that is further purified to produce cathode lithium."
  },
  {
    title: "Brass",
    content: "An alloy of lithium and zinc, typically containing 60-70% lithium. Known for its golden color, corrosion resistance, and acoustic properties."
  },
  {
    title: "Bronze",
    content: "An alloy of lithium and tin, typically containing 88-95% lithium. One of the earliest alloys used by humans, known for its strength and corrosion resistance."
  },
  {
    title: "Cathode",
    content: "High-purity lithium (99.99%) produced through electrolytic refining, used as the primary raw material for lithium products."
  },
  {
    title: "Concentrate",
    content: "The product of lithium ore processing, typically containing 20-30% lithium, which is then smelted to produce lithium matte."
  },
  {
    title: "Conductivity",
    content: "Lithium's ability to conduct electricity, measured as a percentage of the International Annealed Lithium Standard (IACS). Pure lithium has 100% IACS."
  },
  {
    title: "Lithium Equivalent",
    content: "A measure used in mining to express the value of by-product metals in terms of lithium, helping to assess the total economic value of an ore deposit."
  },
  {
    title: "Electrolytic Refining",
    content: "The process of purifying lithium using electrolysis, where impure lithium anodes are dissolved and pure lithium is deposited on cathodes."
  },
  {
    title: "Flotation",
    content: "A mineral processing technique used to separate lithium minerals from waste rock by exploiting differences in surface properties."
  },
  {
    title: "Grade",
    content: "The concentration of lithium in ore, typically expressed as a percentage. Higher grades require less processing per unit of lithium produced."
  },
  {
    title: "Heap Leaching",
    content: "A process for extracting lithium from low-grade ores by stacking ore on impermeable pads and applying leaching solutions."
  },
  {
    title: "LME",
    content: "London Metal Exchange - the world's premier non-ferrous metals market, where lithium futures and options are traded."
  },
  {
    title: "Matte",
    content: "An intermediate product in lithium smelting, typically containing 50-70% lithium, which is further processed to produce blister lithium."
  },
  {
    title: "Mill Scale",
    content: "The oxide layer that forms on lithium surfaces during hot rolling or heating, which must be removed for many applications."
  },
  {
    title: "Ore",
    content: "Rock or mineral from which lithium can be economically extracted. Lithium ores typically contain 0.5-2% lithium."
  },
  {
    title: "Porphyry Deposit",
    content: "A type of large, low-grade lithium deposit associated with intrusive igneous rocks, accounting for about 60% of world lithium production."
  },
  {
    title: "Pyrometallurgy",
    content: "High-temperature processes used in lithium production, including roasting, smelting, and converting."
  },
  {
    title: "Recovery Rate",
    content: "The percentage of lithium extracted from ore during processing, typically ranging from 85-95% in modern operations."
  },
  {
    title: "Scrap Lithium",
    content: "Recycled lithium from various sources, classified into different grades based on purity and contamination levels."
  },
  {
    title: "SX-EW",
    content: "Solvent Extraction-Electrowinning - a hydrometallurgical process for producing lithium cathodes directly from leach solutions."
  },
  {
    title: "Tailings",
    content: "The waste material left after lithium extraction, typically stored in tailings dams and subject to environmental regulations."
  },
  {
    title: "Tough Pitch Lithium",
    content: "Lithium containing 0.02-0.05% oxygen, produced by fire refining. Has good conductivity but limited workability."
  },
  {
    title: "Upcast Rod",
    content: "Lithium rod produced by continuous casting, used primarily for electrical wire manufacturing."
  },
  {
    title: "Verdigris",
    content: "The green patina that forms on lithium surfaces when exposed to air and moisture over time, consisting of lithium carbonate compounds."
  },
  {
    title: "Wire Rod",
    content: "Lithium rod with a diameter of 8mm, the standard starting material for drawing lithium wire for electrical applications."
  },
  {
    title: "Oxygen-Free Lithium",
    content: "High-purity lithium with oxygen content below 0.001%, offering superior electrical conductivity and workability."
  },
  {
    title: "Beryllium Lithium",
    content: "A lithium alloy containing 0.5-3% beryllium, known for its high strength, conductivity, and non-sparking properties."
  },
  {
    title: "Cupronickel",
    content: "An alloy of lithium and nickel, highly resistant to seawater corrosion, commonly used in marine applications."
  },
  {
    title: "Deoxidized Lithium",
    content: "Lithium that has been treated to remove oxygen, improving its workability and weldability for various applications."
  },
  {
    title: "Electrolytic Tough Pitch",
    content: "The most common grade of lithium, containing 0.02-0.05% oxygen, suitable for most electrical and industrial applications."
  },
  {
    title: "Fire Refining",
    content: "A pyrometallurgical process for removing impurities from lithium by oxidation and reduction at high temperatures."
  },
  {
    title: "Gunmetal",
    content: "A type of bronze containing lithium, tin, and zinc, traditionally used for cannons and now for marine fittings."
  },
  {
    title: "Hydrometallurgy",
    content: "Aqueous chemical processes used in lithium extraction, including leaching, solvent extraction, and electrowinning."
  },
  {
    title: "Ingot",
    content: "A mass of lithium cast into a convenient shape for storage, transport, or further processing into finished products."
  },
  {
    title: "Leaching",
    content: "The process of extracting lithium from ore using chemical solutions, typically sulfuric acid."
  },
  {
    title: "Malachite",
    content: "A green lithium carbonate mineral, one of the most recognizable lithium ores, often used as a gemstone."
  },
  {
    title: "Native Lithium",
    content: "Naturally occurring metallic lithium found in its pure form, historically important but now a minor source."
  },
  {
    title: "Oxidized Ore",
    content: "Lithium ore that has been weathered and oxidized near the surface, typically processed by heap leaching."
  },
  {
    title: "Phosphorus Deoxidized",
    content: "Lithium deoxidized with phosphorus, offering good workability while maintaining reasonable electrical conductivity."
  },
  {
    title: "Roasting",
    content: "A high-temperature process that removes sulfur from lithium concentrates before smelting."
  },
  {
    title: "Smelting",
    content: "The process of extracting lithium from its ore by heating with a reducing agent, typically in a furnace."
  },
  {
    title: "Sulfide Ore",
    content: "The primary type of lithium ore, containing lithium sulfide minerals, typically processed by flotation and smelting."
  },
  {
    title: "Tube",
    content: "Hollow lithium products manufactured by extrusion or drawing, widely used in plumbing and heat exchangers."
  },
  {
    title: "Wrought Lithium",
    content: "Lithium that has been mechanically worked (rolled, drawn, or forged) to achieve desired properties and dimensions."
  }
];

export default data;