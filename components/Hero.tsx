import React from 'react'
import { CustomButton } from '.'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='flex-1 pt-26 padding-x'>
				<h1 className='hero__title'>
					Find, book or rent a car -- quickly and easily
				</h1>
				<p className='hero__subtitle'>
					Streamline you car rental experience with our effortless booking
					process.
				</p>
				<CustomButton />
			</div>
		</div>
	)
}

export default Hero
