import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './Bestseller.scss'
const Bestseller = () => {
	const [data, setData] = React.useState([])
	const [coments, setComents] = useState([])
	const [comentCategory, setComentCategory] = useState([])
	const nav = useNavigate()
	//? fc pk
	async function readProductPK() {
		try {
			const { data } = await axios(
				'http://13.53.171.221/pk/?id_category=1&id_classifications=4'
			)
			setData(data.results)
		} catch (error) {
			alert(error.message)
		}
	}
	//? fc pk
	// ? components Category

	const readProductComents = async () => {
		try {
			const { data } = await axios('http://13.53.171.221/componentsCategory/')
			setComents(data.slice(0, 11))
		} catch (error) {
			console.log(error.message)
		}
	}
	// ? components Category
	//! comments

	async function readProductComentsCategory() {
		try {
			const { data } = await axios(`http://13.53.171.221/components/`)
			setComentCategory(data)
		} catch (error) {
			alert(error.message)
		}
	}
	//! comments

	useEffect(() => {
		readProductPK()
		readProductComents()
		readProductComentsCategory()
	}, [])
	console.log(data, 'Data')
	return (
		<div className='container'>
			<div className='bestseller bg-[#2C384999]'>
				<div className='flex text-xl gap-4'>
					<div className='pt-11 flex items-center gap-4	'>
						<h6 className='text-3xl font-[400]'>Хит продаж</h6>
						<button
							onClick={() => nav('/gaming')}
							className='text-[#49DCFF] text-[12px] px-4 mt-3 rounded-sm bg-[#2C3849]'
						>
							смотреть все
						</button>
					</div>
				</div>
				<div className=''>
					<div className='forSpaceEvenly flex items-center justify-evenly flex-wrap'>
						{data.length ? (
							data.map(el => (
								<div className=' forMarginBestSeler bg-[#1C232E] h-auto w-[300px] pb-3'>
									<div className='flex items-start justify-center flex-col p-5 h-auto'>
										<img className='mx-auto' src={el.image} alt='img' />
										<span className='mt-5'>{el.title}</span>
										<div className='flex items-center gap-2 my-3 text-[#49DCFF] font-bold'>
											<span>{el.price}</span>
											<div className='w-[15px] h-[15px] bg-[#49DCFF] rounded-full text-black flex items-center justify-center text-xs'>
												C
											</div>
											<button>
												<svg
													width='14'
													height='14'
													viewBox='0 0 14 14'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M6.80242 0.671875C10.2565 0.671875 13.0541 3.46949 13.0541 6.92352C13.0541 10.3776 10.2565 13.1752 6.80242 13.1752C5.98137 13.1754 5.16832 13.0139 4.40972 12.6998C3.65112 12.3857 2.96184 11.9252 2.38127 11.3447C1.8007 10.7641 1.34022 10.0748 1.02614 9.31622C0.712053 8.55762 0.550525 7.74457 0.550782 6.92352C0.550782 3.46949 3.34839 0.671875 6.80242 0.671875ZM7.58388 3.7977C7.58388 3.3679 7.23222 3.01624 6.80242 3.01624C6.37262 3.01624 6.02097 3.3679 6.02097 3.7977C6.02097 4.2275 6.37262 4.57915 6.80242 4.57915C7.23222 4.57915 7.58388 4.2275 7.58388 3.7977ZM7.58388 10.8308V6.14206H6.02097V10.8308H7.58388Z'
														fill='#5F697A'
													/>
												</svg>
											</button>
										</div>
										<div className='flex items-center justify-center gap-1 px-2 w-full'>
											<button
												onClick={() => nav('/configurator')}
												type='button'
												class='text-black font-[600] bg-[#49DCFF] hover:bg-blue-800 rounded-[5px] text-sm px-4 py-2.5 me-2 mb-2 dark:bg-[#49DCFF] dark:hover:bg-[#2C3849] hover:text-white focus:outline-none dark:focus:ring-blue-800 transition-[.6s] duration-300'
											>
												купить
											</button>
											<button
												onClick={() => nav('/navonas')}
												className='text-[#49DCFF] font-[600] bg-transparent hover:bg-[#2a2a33] rounded-[5px] text-sm px-3 py-2.5 me-2 mb-2 dark:bg-[#2C3849] focus:outline-none'
											>
												Подробнее
											</button>
											<button
												onClick={() => nav('/configurator')}
												className='text-[#49DCFF] font-[600] bg-transparent hover:bg-[#232335] rounded-[5px] text-sm px-5 py-[13px] me-2 mb-2 dark:bg-[#2C3849] focus:outline-none'
											>
												<svg
													width='13'
													height='14'
													viewBox='0 0 13 14'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g clip-path='url(#clip0_570_24037)'>
														<path
															d='M12.4847 12.1699L11.6267 13.028C11.5133 13.1405 11.3601 13.2037 11.2004 13.2037C11.0406 13.2037 10.8874 13.1405 10.7741 13.028L3.59025 5.85686C3.39351 5.91385 3.19005 5.94435 2.98525 5.94756C2.60019 5.94725 2.22077 5.85503 1.87853 5.67856C1.53629 5.50209 1.24112 5.24647 1.01757 4.93296C0.794008 4.61944 0.64852 4.25709 0.593197 3.87603C0.537875 3.49497 0.574317 3.1062 0.699493 2.74206L2.23512 4.27859L2.55622 3.9575L3.41428 3.09943L3.73538 2.77834L2.19884 1.24271C2.56298 1.11753 2.95175 1.08109 3.33281 1.13642C3.71387 1.19174 4.07622 1.33723 4.38974 1.56078C4.70325 1.78434 4.95887 2.07951 5.13534 2.42175C5.31181 2.76399 5.40403 3.14341 5.40434 3.52847C5.40113 3.73327 5.37063 3.93673 5.31364 4.13347L12.4847 11.3173C12.5973 11.4306 12.6605 11.5839 12.6605 11.7436C12.6605 11.9033 12.5973 12.0566 12.4847 12.1699ZM0.742124 11.3173C0.629572 11.4306 0.566406 11.5839 0.566406 11.7436C0.566406 11.9033 0.629572 12.0566 0.742124 12.1699L1.60019 13.028C1.71353 13.1405 1.86677 13.2037 2.0265 13.2037C2.18623 13.2037 2.33948 13.1405 2.45281 13.028L5.76081 9.72631L4.04921 8.01563L0.742124 11.3173ZM11.4507 1.10938L9.03253 2.31937V3.52847L7.72003 4.84096L8.92912 6.05006L10.2416 4.73756H11.4507L12.6607 2.31937L11.4507 1.10938Z'
															fill='#49DCFF'
														/>
													</g>
													<defs>
														<clipPath id='clip0_570_24037'>
															<rect
																width='12.6986'
																height='12.6986'
																fill='white'
																transform='translate(0.265625 0.8125)'
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
										</div>
										<p className='text-[11px] text-[#8490A4] pr-4 mt-4'>
											{el.description}
										</p>
									</div>
									<hr className='h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%] mx-auto' />
									{coments.map(el => (
										<div className='px-9 py-2'>
											<div className='flex items-center gap-5'>
												<a href='#'>
													<img src={el.image} alt='i' />
												</a>
												<div className=''>
													<h3 className='text-[#8490A4] text-[12px]'>
														{el.title}
													</h3>
													<p className='text-[12px]'>{el.description}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							))
						) : (
							<div className='flex items-center justify-center mx-auto my-20'>
								<div class='text-center'>
									<div class='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto'></div>
									<h2 class='text-zinc-900 dark:text-white mt-4'>Loading...</h2>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bestseller
