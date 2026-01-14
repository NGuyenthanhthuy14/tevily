import BoxTour from '@/app/components/boxTour/BoxTour'
import { tour } from '@/app/data/tour'
import React from 'react'

export default function ContentRight() {
	return (
		<div className='grid grid-cols-2 gap-5'>
			{tour.map((item) => (
				<div className="" key={item.slug}>
						<BoxTour  
							slug={item.slug}
							title={item.title} 
							location={item.location} 
							price = {item.price} 
							image={item.image} 
							guest={item.guest} 
							time={item.time} />
				</div>
			))}
			
		</div>
	)
}
