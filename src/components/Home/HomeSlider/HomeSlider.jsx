import React, { useRef, useState } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './homeSlider.scss'
const HomeSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const sliderRef = useRef(null)
	const nav = useNavigate()
	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (_, newIndex) => setCurrentSlide(newIndex)
	}

	const handleTitleClick = index => {
		setCurrentSlide(index)
		sliderRef.current.slickGoTo(index)
	}

	const handlePrevSlide = () => {
		sliderRef.current.slickPrev()
	}

	const handleNextSlide = () => {
		sliderRef.current.slickNext()
	}

	const slidesContent = [
		{ title: 'Ноутбуки и ПК', titlePro: 'RTX ON' },
		{ title: 'Ноутбуки и ПК', titlePro: 'RTX ON' },
		{ title: 'Ноутбуки и ПК', titlePro: 'RTX ON' },
		{ title: 'Ноутбуки и ПК', titlePro: 'RTX ON' }
	]

	return (
		<div id='homeSlider'>
			<div className='container'>
				<div className='relative'>
					<Slider {...sliderSettings} ref={sliderRef}>
						{slidesContent.map((content, index) => (
							<div
								className='homeSlider w-full h-[392px] flex items-center justify justify-between px-11'
								key={index}
							>
								<div className='flex items-center justify-between px-[60px]'>
									<div className='my-28'>
										<h1 className='font-bold my-3 text-[#49DCFF]'>
											{content.titlePro}
										</h1>
										<h1
											data-aos='zoom-in'
											data-aos-duration={300}
											className='text-5xl text-white font-medium my-11'
										>
											{content.title}
										</h1>
										<button
											onClick={() => nav('/gaming')}
											data-aos='zoom-in'
											data-aos-duration={1200}
											className='relative w-[200px] h-11 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-black hover:text-black dark:text-black  hover:scale-110 duration-200 my-7'
										>
											<span className='relative w-[200px] h-11 px-5 py-2.5 transition-all ease-in duration-75 bg-[#49DCFF] dark:bg-[#49DCFF] rounded-md'>
												перейти
											</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</Slider>
					<div
						className='flex gap-2 absolute right-5 bottom-16'
						style={{ textAlign: 'center', marginTop: '20px' }}
					>
						<button
							onClick={handlePrevSlide}
							className='w-[70px] flex items-center justify-center cursor-pointer'
						>
							<div className='relative h-[40px] inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group'>
								<span className='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full'></span>
								<span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
									<GrLinkPrevious />
								</span>
								<span className='absolute left-4 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
									<GrLinkPrevious />
								</span>
							</div>
						</button>
						<button
							onClick={handleNextSlide}
							className='w-[70px] flex items-center justify-center cursor-pointer'
						>
							<div className='relative h-[40px] inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group'>
								<span className='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full'></span>
								<span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
									<GrLinkNext />
								</span>
								<span className='absolute left-4 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
									<GrLinkNext />
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeSlider
