'use client'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Slider from 'react-slick'
import { CarouselItem } from './CarouselItem/CarouselItem'

export function Carousel() {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '20px',
		swipeToSlide: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerMode: true,
					dots: true,
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1150,
				settings: {
					centerMode: true,
					dots: true,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 725,
				settings: {
					centerMode: true,
					dots: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 425,
				settings: {
					centerMode: true,
					dots: false,
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<Slider {...settings} easing='ease-in' speed={700}>
			<CarouselItem
				title='PREPARE
YOUR SKIN'
				text='Please moisturize your skin as often as you can (best for 3 days before the session). Use coconut oil/butter, it will make your skin more soft and gentle which means it will be a pleasure to tattoo that skin and the result will be perfect!'
			/>
			<CarouselItem
				title='DO NOT WAX YOUR TATTOO PLACEMENT'
				text='But you could shave the placement on your skin - 1 day before session.'
			/>
			<CarouselItem
				title='EAT SUPER WELL BEFORE THE SESSION'
				text='At least 1 hour before. And please, also take with you some snacks, chocolates and water, it’s very important!'
			/>
			<CarouselItem
				title='WEAR CORRECT CLOTHES'
				text='Especially if the area for your tattoo is under Your breast, on your ribs, etc. You have to be prepared for the moment where you need to take your clothes off and put some special stickers for your nipples, which means it is going to be comfortable for you and me as well.'
			/>
			<CarouselItem
				title='DO NOT
WEAR TIGHT UNDERWEAR AND CLOTHES'
				text='So that there are no traces left at the place where we will do the tattoo. It will be more comfortable for both of us to work if you come in loose and soft underwear/clothes.'
			/>
			<CarouselItem
				title='DO NOT DRINK ALCOHOL'
				text='At least 1 day before session (and after session as well). For me it’s very important that your body is not intoxicated and you feel fresh and well.'
			/>
			<CarouselItem
				title='TRY NOT TO SPEND A LOT OF TIME IN THE SUN'
				text='Before our session, please don’t get a sunburn, because your skin can be irritated and it’s really hard to work on irritated and dry skin.'
			/>
			<CarouselItem
				title='DON’T TAKE PAINKILLERS AT ALL'
				text='And don’t be scared if it’s your first tattoo, it’s really not as painful as you can think and being scared is not going to help us to make the best quality and adorable tattoo.'
			/>
		</Slider>
	)
}
