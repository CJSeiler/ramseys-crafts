import hat from "../images/hat.jpg"
import hat_tan from "../images/hat_tan.jpg"
import shaw from "../images/shaw.jpg"
import sweater_gray from "../images/sweater_gray.jpg"
import sweater_tan from "../images/sweater_tan.jpg"
import tile_sweater from "../images/tile_sweater.jpg"


const productsData = [
    {
        image: hat,
        title: "Pom Hat",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
        id: 1,
        price: 2599,
        inStock: true,
        isFavorite: true
    },
    {
        image: hat_tan,
        title: "Pomless Hat",
        description: "second description",
        id: 2,
        price: 2199,
        inStock: true,
        isFavorite: true
    },
    {
        image: shaw,
        title: "Shaw",
        description: "third description",
        id: 3,
        price: 5499,
        inStock: true,
        isFavorite: true
    },
    {
        image: sweater_gray,
        title: "Ribboned Cardigan",
        description: "fourth description",
        id: 4,
        price: 9999,
        inStock: true,
        isFavorite: false
    },
    {
        image: sweater_tan,
        title: "Cardigan",
        description: "fifth description",
        id: 5,
        price: 8999,
        inStock: true,
        isFavorite: false
    },
    {
        image: tile_sweater,
        title: "Tiled Cardigan",
        description: "sixth description",
        id: 6,
        price: 12999,
        inStock: true,
        isFavorite: false
    }
]

export { productsData }