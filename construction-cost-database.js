// Construction Cost Database
// Version: 2025 Q3 - GEP-24-A
// Modeled after industry standards like RSMeans, using CSI MasterFormat.
// All costs are for demonstration and should be verified for actual estimates.

const CostDatabase2025_Q3 = {
    // --- METADATA ---
    id: "GEP-24-A",
    name: "General Estimating Purpose - 2025 Q3 Data",
    description: "A comprehensive set of unit, assembly, and square foot costs for general construction estimating.",

    // --- UNIT COSTS (CSI MASTERFORMAT) ---
    unitCosts: {
        "03": {
            name: "Concrete",
            items: {
                "033000": { description: "Cast-in-Place Concrete, 3000 psi", unit: "CY", material: 160, labor: 50, equipment: 25, total: 235 },
                "033053": { description: "Slab on Grade, 4\" thick", unit: "SF", material: 3.75, labor: 2.50, equipment: 0.50, total: 6.75 },
                "034100": { description: "Precast Structural Concrete Wall Panel", unit: "SF", material: 22, labor: 9, equipment: 4, total: 35 },
            }
        },
        "04": {
            name: "Masonry",
            items: {
                "042200": { description: "CMU Block Wall, 8x8x16", unit: "SF", material: 5, labor: 9, equipment: 1, total: 15 },
                "042113": { description: "Brick Veneer, Standard", unit: "SF", material: 8, labor: 15, equipment: 2, total: 25 },
            }
        },
        "08": {
            name: "Openings",
            items: {
                 "081113": { description: "Hollow Metal Door & Frame, 3'x7'", unit: "EA", material: 800, labor: 250, equipment: 25, total: 1075 },
                 "085113": { description: "Aluminum Clad Wood Window, 3'x5'", unit: "EA", material: 750, labor: 200, equipment: 20, total: 970 },
            }
        },
        "09": {
            name: "Finishes",
            items: {
                "092900": { description: "Gypsum Board Wall, 5/8\", Taped & Finished", unit: "SF", material: 0.90, labor: 2.50, equipment: 0.25, total: 3.65 },
                "096813": { description: "Carpet Tile, Commercial Grade", unit: "SY", material: 38, labor: 9, equipment: 1, total: 48 },
                "099123": { description: "Interior Paint, 2 Coats on Drywall", unit: "SF", material: 0.45, labor: 0.90, equipment: 0.15, total: 1.50 },
            }
        }
    },

    // --- ASSEMBLY COSTS ---
    assemblies: {
        "EXT_WALL_01": {
            name: "Exterior Wall - Brick Veneer on CMU Backup",
            unit: "SF",
            total: 40.00, // Sum of included unit costs
            components: [
                { code: "042200", qty: 1 }, // 1 SF of CMU
                { code: "042113", qty: 1 }  // 1 SF of Brick Veneer
            ]
        },
        "INT_PART_01": {
            name: "Interior Partition - 2x4 Stud w/ GWB Each Side",
            unit: "LF", // Priced per linear foot of wall
            total: 29.20,
            components: [
                { code: "092900", qty: 2 * 8 } // 2 sides * 8' height = 16 SF GWB per LF of wall
            ]
        },
    },

    // --- SQUARE FOOT MODELS (NEW CONSTRUCTION) ---
    squareFootModels_New: {
        "OFFICE_MIDRISE": {
            name: "Office Building, 5-10 Story",
            unit: "SF",
            cost: 275.00
        },
        "WAREHOUSE": {
            name: "Warehouse, Distribution",
            unit: "SF",
            cost: 120.00
        },
        "SCHOOL_ELEMENTARY": {
            name: "School, Elementary",
            unit: "SF",
            cost: 310.00
        }
    },
    
    // --- SQUARE FOOT MODELS (RENOVATION) ---
    squareFootModels_Reno: {
        "OFFICE_INTERIOR_RENO": {
            name: "Office Interior Renovation, Mid-Range",
            unit: "SF",
            cost: 150.00
        },
        "BATHROOM_COMMERCIAL_RENO": {
            name: "Commercial Bathroom Renovation",
            unit: "SF",
            cost: 450.00
        }
    }
};
