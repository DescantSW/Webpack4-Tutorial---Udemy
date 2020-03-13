import Kitty from './kitty.jpg';
import './kitty-image.scss';

class KittyImage {
    render() {
        const img = document.createElement('img');
        img.src = Kitty;
        img.alt = 'Kitty';
        img.classList.add('kitty-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default KittyImage