const db = require('../db/index')
const Brand = require('../models/brand')
const Denim = require('../models/denim')

//connect to DB

db.on('error', console.error.bind(console, `MongoDB connection: error`))

const main = async () => {
    //brands JSON
    const brand1 =  await new Brand ({
        name: `Naked and Famous`,
        url: `https://www.nakedandfamousdenim.com/`,
        location: `New York, NY`,
        isBoutique: true
    })
    brand1.save()

    const brand2 = await new Brand ({
        name: `Hiroshi Kato`,
        url: `https://kato-brand.com/`,
        location: `Gardena, CA`,
        isBoutique: true
    })
    brand2.save()

    const brand3 = await new Brand ({
        name: `Old Blue Co.`,
        url: `https://oldblueco.net`,
        location: `Jakarta, ID`,
        isBoutique: true
    })
    brand3.save()

    const brand4 = await new Brand ({
        name: `Hinoya`,
        url: `https://hinoya.shop/en-us`,
        location: `Tokyo, JPN`,
        isBoutique: true
    })
    brand4.save()

    const brand5 = await new Brand ({
        name: `Left Field, NYC`,
        url: `https://leftfieldnyc.com/`,
        location: `New York, NY`,
        isBoutique: true
    })
    brand5.save()

    console.log(`Created Brands!`)


const denims = [
    {
        name: `Greencast Slub`,
        priceUSD: `178`,
        fit: `Easy Guy`,
        weight: `15oz`,
        color: `Greencast Indigo Dye`,
        sizes: [29, 30, 31, 32, 34, 36, 38],
        brand: brand1._id,
        description: `The Greencast Slub Selvedge is a 15oz Japanese Selvedge Denim woven using irregular slub yarns and dyed a greencast indigo color.`,
        isSelvedge: true
    },
    {
        name: `Elephant-12 Big Slub`,
        priceUSD: `209`,
        fit: `Weird Guy`,
        weight: `20oz`,
        color: `Indigo Rinse`,
        sizes: [28, 29, 30, 31, 32, 34, 36, 38, 40],
        brand: brand1._id,
        description: `The Elephant Series from Naked and Famous showcases the heaviest denim offerings from the brand's vast catalog. This iteration features a slubby 20oz fabric woven in a rare broken twill weave. `,
        isSelvedge: true
    },
    {
        name: `Warehouse Lot.S1000`,
        priceUSD: `260`,
        fit: `Classic`,
        weight: `NA`,
        color: `DeadStock Blue`,
        sizes: [29, 30, 31, 32, 33, 34, 36, 38],
        brand: brand4._id,
        description: `WAREHOUSE celebrates its th anniversary in 2020. From leather label, buttons, rivets to sewing threads and even the sewing machine's setting,  this『DEAD STOCK BLUE DENIM』is the most greatful model produced by WARE HOUSE with their heart and soul so that they could say "there is nothing to do more". `,
        isSelvedge: true
    },
    {
        name: `The Prospector`,
        priceUSD: `295`,
        fit: `Regular`,
        weight: `8oz`,
        color: `Rope-Dyed Indigo`,
        sizes: [28, 30, 32, 34, 36, 38, 40, 42],
        brand: brand3._id,
        description: `This lightweight 8 oz. / sq. yd. indigo corduroy fabric was specially woven in Osaka, Japan. We utilized our Prospector Pants style as the base pattern. The Prospector was heavily inspired by the various pants pre 1890s era; the period when the rivet’s patent was still valid.`,
        isSelvedge: false
    },
    {
        name: `8.25" Cut`,
        priceUSD: `185`,
        fit: `Slim Straight`,
        weight: `18oz`,
        color: `Rope-Dyed Indigo`,
        sizes: [28, 30, 32, 34, 36, 38, 40],
        brand: brand3._id,
        description: `The denim is in the mid-weight class; weighted at 18 ounces / square yard. The denim is in sanforized state, so you can wear ’em out of the box without any hustle. As you can easily witness, the main superiority of this denim lays on its particular slub texture; hence we named it, the ‘Over-Slub’.`,
        isSelvedge: true
    },
    {
        name: `Jelt Double Knee Carpenter Pants`,
        priceUSD: `230`,
        fit: `Relaxed`,
        weight: `11.5oz`,
        color: `Indigo Rinse`,
        sizes: [30, 31, 32, 33, 34, 35, 36, 38, 40, 42, 43],
        brand: brand5._id,
        description: `Used exclusively by Lee, this 11.5 oz. denim was made by twisting the yarn tighter than previously made and engineered to be harder to snag, tear or rip yet pliable and comfortable. In 1931, Lee changed the name to “Jelt Denim.
        In 1939 Lee's Jelt denim survived Ripley's Believe It or Not! 26-mile crawl across untreated concrete.`,
        isSelvedge: true
    },
    {
        name: `Pen Slim`,
        priceUSD: `238`,
        fit: `Calssic`,
        weight: `10.5oz`,
        color: `Dark Green Sulfur Dye`,
        sizes: [29, 30, 31, 32, 33, 34, 36],
        brand: brand2._id,
        description: `Using a sulfur dye, we are able to create colored denim that fades just like classic blue jeans. Our lightweight 10.5oz denim 4-Way Stretch Selvedge has all of the qualities of top shelf Japanese selvedge while offering a level of comfort and range of motion not possible in a 100% cotton jean.`,
        isSelvedge: true
    },
    {
        name: `The Hammer`,
        priceUSD: `228`,
        fit: `Straight`,
        weight: `14oz`,
        color: `Indigo Raw`,
        sizes: [29, 30, 31, 32, 33, 34, 36, 38],
        brand: brand2._id,
        description: `Our premium denim is inspired by the classic vintage blue jean. Our Premium Japanese 4-Way Stretch Selvedge denim story starts in Japan where our fabric is developed at one of the oldest denim mills. We blend a unique 4 way stretch material with selvedge denim to create a specific amount of stretch and comfort you wouldn’t typically get with selvedge denim. This 360 degree of stretch gives the wearer comfort from every angle no matter what they are doing.`,
        isSelvedge: true
    },
    {
        name: `Big Slub`,
        priceUSD: `145`,
        fit: `Weird Guy`,
        weight: `18oz`,
        color: `Indigo Rinse`,
        sizes: [29, 30, 31, 32, 33, 34, 36, 38],
        brand: brand1._id,
        description: `Returning for the first time since 2008, this hefty selvedge denim is a recreation of a popular style from the very first Naked & Famous collection8. ;The 18oz heavyweight fabric is woven on vintage shuttle looms in Okayama, Japan and features an extremely uneven surface texture.`,
        isSelvedge: true
    },
    {
        name: `Indigo Selvedge`,
        priceUSD: `148`,
        fit: `Weird Guy`,
        weight: `13oz`,
        color: `Indigo Raw`,
        sizes: [28, 29, 30, 31, 32, 33, 34, 36, 38, 40, 42],
        brand: brand1._id,
        description: `The "Indigo Selvedge" from Naked & Famous is the eccentric denim brand's original indigo fabric. Made from a sanforized 13oz Japanese denim, these well-balanced jeans sport a classic shade of indigo that will fade to a vintage blue color with wear.`,
        isSelvedge: true
    },
]

await Denim.insertMany(denims)
console.log(`Created Selvedge!`)
}


const run = async () => {
    await main()
    db.close()
}

run()