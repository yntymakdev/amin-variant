import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import telegram from '../../../../images/Amin Stors (1)/Гл.стр/Frame.png'
import instagram from '../../../../images/Amin Stors (2)/Гл.стр/basil_instagram-solid.png'
import watsapp from '../../../../images/Amin Stors/Гл.стр/08.whatsapp.png'
import '../Footer.scss'
const FooterBottom = () => {
	const [isMobile, setIsMobile] = useState(false)
	const nav = useNavigate()
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1280)
		window.addEventListener('resize', handleResize)
		handleResize()
		return window.addEventListener('resize', handleResize)
	}, [])
	
	return (
		<div className='MainHeight w-full h-auto py-11 bg-[#212936]'>
			<div className='container'>
				<div className='MainFooterOne flex items-center justify-between'>
					<div className='footerMain'>
						<div className='flex items-center gap-4 pt-6'>
							<a href='https://wa.me/996703601008' target='_blank'>
								<img
									className='w-[30px] object-contain'
									src={watsapp}
									alt='img'
								/>
							</a>
							<a href='https://t.me/+996703601008' target='_blank'>
								<img
									className='w-[30px] object-contain'
									src={telegram}
									alt='img'
								/>
							</a>
							<a
								href='https://www.instagram.com/_kojom5erd1ev_1/'
								target='_blank'
							>
								<img
									className='w-[30px] object-contain'
									src={instagram}
									alt='img'
								/>
							</a>
						</div>
						<span className='flex flex-col items-end w-[240px] my-6 text-[#49DCFF]'>
							г. Бишкек, Куренкеева 138 <br />
							<span> Турусбекова 109/3</span>
						</span>
						<p className='text-sm text-[#5F697A] pb-4'>
							Обработка и прием заказов по <br /> телефону:
						</p>
						<h3 className='text-[#49DCFF]'>+ 996 705 06 04 04</h3>
						<p className='text-[#5F697A] text-sm pt-4'>Пн-Пт: 09:00 - 20:00</p>
						<p className='text-[#5F697A] text-sm'>Сб-Вс: 09:00 - 20:00</p>
					</div>
					<div className='flex flex-col'>
						<span className='text-[#5F697A] my-5' href='#'>
							Каталог AMIN STORS
						</span>
						<div className='flex items-start gap-6'>
							<div className='oneBlock'>
								<ul className='flex items-center gap-3 text-sm my-4 mt-6'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li onClick={() => nav('/configurator')}>
										Аксессуары для пк
									</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li onClick={() => nav('/powerful')}>
										КОМПЬЮТЕРЫ В рассрочку
									</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ЭКСТРЕМАЛЬНАЯ СЕРИЯ</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ГРАФИЧЕСКИЕ СТАНЦИИ</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>КОМПЬЮТЕРЫ ДЛЯ ФОТО</li>
								</ul>
							</div>
							<div className='oneBlock'>
								<ul className='flex items-center gap-2 text-sm my-4 mt-6'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ПК с GEFORCE GTX 16ХХ</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ПК с GEFORCE RTX 4060</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ПК с GEFORCE RTX 4070</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ПК с GEFORCE RTX 4080</li>
								</ul>
								<ul className='flex items-center gap-2 text-sm my-4'>
									<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
									<li>ПК с GEFORCE RTX 4090</li>
								</ul>
							</div>
							{!isMobile && (
								<>
									<div className='oneBlock'>
										<ul className='flex items-center gap-2 text-sm my-4 mt-6'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Игровые станции от 30 000</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Игровые станции от 100 000</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Игровые станции от 200 000</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Подобрать игровой ПК</li>
										</ul>
									</div>
									<div className='oneBlock'>
										<ul className='flex items-center gap-2 text-sm my-4 mt-6'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>КОМПЬЮТЕРЫ с INTEL CORE i3</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>КОМПЬЮТЕРЫ с INTEL CORE i5</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>КОМПЬЮТЕРЫ с INTEL CORE i7</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>КОМПЬЮТЕРЫ с INTEL CORE i9</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>ПК с ВОДЯНЫМ ОХЛАЖДЕНИЕМ</li>
										</ul>
									</div>
									<div className='oneBlock'>
										<ul className='flex items-center gap-2 text-sm my-4 mt-6'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Офисный </li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Игровой </li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Для бизнесса </li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Для программирование</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>3д моделирование</li>
										</ul>
										<ul className='flex items-center gap-2 text-sm my-4'>
											<div className='w-[4px] h-[4px] bg-[#5F697A] rounded-full'></div>
											<li>Для монтажа</li>
										</ul>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterBottom
