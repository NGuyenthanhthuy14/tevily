import React from 'react'
import BannerTitle from '../../components/bannerTitle/BannerTitle'
import ExoticPlace from '../(home)/ExoticPlace'
import VideoFeatures from '../(home)/VideoFeatures'
import MemberYet from '../(home)/MemberYet'

export default function Destination() {
	return (
		<div className=''>
			<BannerTitle title="Destination" desc="People Don’t Take, Trips Take People" />
			<ExoticPlace />
			<VideoFeatures />
			<MemberYet />
		</div>
	)
}
