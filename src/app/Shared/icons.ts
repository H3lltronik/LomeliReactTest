import check from '../../assets/images/icons/comprobar.png'
import password from '../../assets/images/icons/contraseña.png'
import facebook from '../../assets/images/icons/facebook.png'
import home from '../../assets/images/icons/home.png'
import medium from '../../assets/images/icons/medium.png'
import back from '../../assets/images/icons/return.png'
import user from '../../assets/images/icons/user.png'
import search from '../../assets/images/icons/search.png'
import youtube from '../../assets/images/icons/youtube.png'

export type IconImage = {
    name:  'check' | 'password' | 'facebook' | 'home' | 'medium' | 'back' | 'user' | 'youtube' | 'search';
}

export const icons = {
    check,
    password,
    facebook,
    home,
    medium,
    back,
    user,
    search,
    youtube,
}

export function getIcon (icon: IconImage) {
    return icons[icon.name]
}