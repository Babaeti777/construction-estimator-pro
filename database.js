// Construction Cost Database
// This file contains the item data used by the eTakeoff Pro application.
// To update costs, simply edit the price for the corresponding item.

const costDatabase = {
  "itemsDB": {
    "Concrete & Masonry": [
      { "name": "Concrete (Ready Mix)", "unit": "cubic yard", "price": 166, "updated": "2024-12" },
      { "name": "Concrete Installation", "unit": "sq ft", "price": 10.5, "updated": "2024-12" },
      { "name": "Rebar #4", "unit": "linear foot", "price": 1.32, "updated": "2024-12" },
      { "name": "Concrete Block 8\"", "unit": "each", "price": 2.25, "updated": "2024-12" }
    ],
    "Lumber & Wood": [
      { "name": "Framing Lumber 2x4", "unit": "linear foot", "price": 1.65, "updated": "2024-12" },
      { "name": "Plywood 1/2\" CDX", "unit": "sheet", "price": 35, "updated": "2024-12" }
    ],
    "Drywall & Finishes": [
      { "name": "Drywall 1/2\" Regular", "unit": "sheet", "price": 16.8, "updated": "2024-12" },
      { "name": "Interior Paint (Eggshell)", "unit": "gallon", "price": 32, "updated": "2024-12" }
    ],
    "Plumbing": [
      { "name": "PEX Pipe 1/2\"", "unit": "linear foot", "price": 1.25, "updated": "2024-12" },
      { "name": "Water Heater (50 gal)", "unit": "each", "price": 1250, "updated": "2024-12" }
    ],
    "Electrical": [
      { "name": "Romex Wire 12/2", "unit": "linear foot", "price": 0.85, "updated": "2024-12" },
      { "name": "Electrical Panel 200A", "unit": "each", "price": 1850, "updated": "2024-12" }
    ],
    "Labor": [
      { "name": "Carpenter (Skilled)", "unit": "hour", "price": 29.5, "updated": "2024-12" },
      { "name": "Electrician (Journeyman)", "unit": "hour", "price": 34.5, "updated": "2024-12" },
      { "name": "Plumber (Journeyman)", "unit": "hour", "price": 34.75, "updated": "2024-12" }
    ]
  }
};
