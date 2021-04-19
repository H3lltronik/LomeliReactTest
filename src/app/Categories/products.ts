import agua from '../../assets/images/agua.png' 
import recargas from '../../assets/images/recargas.png'
import telefono from '../../assets/images/telefono.png'
import electricidad from '../../assets/images/luz.png'
import tv from '../../assets/images/tv.png'
import { routes } from '../Shared/routes'

export type GridItem = {
    name: string,
    image: string,
    route: string,
    order: number
}

export const gridItems: GridItem[] = [
    {
        name: "Recargas",
        image: recargas,
        route: routes.rechargeFirst,
        order: 1,
    },
    {
        name: "TV",
        image: tv,
        order: 2,
        route: "",
    },
    {
        name: "Electricidad",
        image: electricidad,
        order: 3,
        route: "",
    },
    {
        name: "Telefonia",
        image: telefono,
        order: 4,
        route: "",
    },
    {
        name: "Agua",
        image: agua,
        order: 5,
        route: "",
    },
]

export const gridItemsByOrder = function (): GridItem[] {
    return gridItems.sort((a, b): number => {
        return (a.order > b.order)? a.order:b.order;
    })
}