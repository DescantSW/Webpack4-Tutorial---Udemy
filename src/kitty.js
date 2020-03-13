import Heading from './components/heading/heading.js'
import KittyImage from './components/kitty-image/kitty-image.js'
import React from 'react'

const heading = new Heading()
heading.render('Kitty')
const kittyImage = new KittyImage()
kittyImage.render()