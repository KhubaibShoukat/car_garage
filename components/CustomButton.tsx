'use client'
import Image from 'next/image'

const CustomButton = () => {
	return (
		<button
			disabled={false}
			type={'button'}
			className={`custom-btn`}
			onClick={() => {
				console.log('clicked')
			}}
		>
			Butn
		</button>
	)
}

export default CustomButton
