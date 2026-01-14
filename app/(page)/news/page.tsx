"use client"
import React from 'react'
import BannerTitle from '../../components/bannerTitle/BannerTitle'
import CardNews from '../../components/cardNews.tsx/CardNews'
import { newSlug } from '../../data/news'
import { useTranslations } from 'next-intl'

export default function News() {
	const t = useTranslations();
	return (
		<div>
			<BannerTitle title={t("News")} desc=''/>

			<div className="container grid sm:grid-cols-3 grid-cols-1 gap-10 my-10">
				{newSlug.map((item) => (
				<div className="" key={item.slug}>
					<CardNews slug={item.slug} title={item.title} day={item.day} month={item.month} image={item.image} author={item.author} excerpt={item.excerpt}/>
				</div>
			))}
			</div>
		</div>
	)
}
