import React from 'react'
import Bestseller from './Bestseller/Bestseller'
import HomeSlider from './HomeSlider/HomeSlider'
import Manufacturer from './Manufacturer/Manufacturer'
import OurAdvantages from './OurAdvantages/OurAdvantages'
import Selection from './Selection/Selection'

const Home = () => {
	return (
		<div>
			<HomeSlider />
			<Manufacturer />
			<Bestseller />
			<OurAdvantages />
			<Selection />
		</div>
	)
}

export default Home
