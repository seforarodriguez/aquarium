/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
export.module const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};

const database = {
    fish: [
        {
            specie: "Swordfish",
            fishLength: "5 meters",
            fishName: "Guorpy",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            specie: "Goldfish",
            fishLength: "5 meters",
            fishName: "Lorpy",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            specie: "Blue Tang",
            fishLength: "5 cms",
            fishName:"Firus",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            specie: "Bluegill",
            fishLength: "5 meters",
            fishName: "Torus",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            specie: "Bluegill",
            fishLength: "5 meters",
            fishName: "Cloris",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
        {
            specie: "Bluegill",
            fishLength: "5 meters",
            fishName: "Fernand",
            harvested: 'theZoo',
            food: "Sea Weed"
        },
    ]
}