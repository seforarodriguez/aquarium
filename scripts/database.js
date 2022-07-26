export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};

const database = {
    fish: [
        {
            image: "https://image.shutterstock.com/image-illustration/angry-cartoon-fish-tank-3d-600w-1999656959.jpg",
            species: "Swordfish",
            fishLength: "5 meters",
            fishName: "Guorpy",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            image: "https://content.instructables.com/ORIG/FV2/6SBO/FLROKI2Q/FV26SBOFLROKI2Q.jpg?auto=webp&frame=1&fit=bounds&md=818862759d29c46a84dc771db2ce0e54",
            species: "Goldfish",
            fishLength: "5 meters",
            fishName: "Lorpy",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            image: "https://c7.alamy.com/comp/BC98AD/powder-blue-tang-…rgeon-fish-herbivorous-tropical-marine-BC98AD.jpg",
            species: "Blue Tang",
            fishLength: "5 cms",
            fishName:"Firus",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            image: "https://content.instructables.com/ORIG/FV2/6SBO/FLROKI2Q/FV26SBOFLROKI2Q.jpg?auto=webp&frame=1&fit=bounds&md=818862759d29c46a84dc771db2ce0e54",
            species: "Bluegill",
            fishLength: "5 meters",
            fishName: "Torus",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            image: "https://c7.alamy.com/comp/BC98AD/powder-blue-tang-…rgeon-fish-herbivorous-tropical-marine-BC98AD.jpg",
            species: "Bluegill",
            fishLength: "5 meters",
            fishName: "Cloris",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            image: "https://image.shutterstock.com/image-illustration/angry-cartoon-fish-tank-3d-600w-1999656959.jpg",
            species: "Bluegill",
            fishLength: "5 meters",
            fishName: "Fernand",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
    ]
}