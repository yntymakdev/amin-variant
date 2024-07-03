import React from 'react'
import footerImage from '../../../images/bgFooter.jpg'
import './selection.scss'
const Selection = () => {
	return (
		<div className='container'>
			<div data-aos='zoom-in' className='selectionDiv'>
				<div className='flex items-center pt-11 justify-between px-20'>
					<img src={footerImage} alt='footerImg' />
					<div className=''>
						<h1 className='text-2xl text-[#FFFFFF]'>
							Подбор компьютера по цене, графической карте или центральному
							процессору
						</h1>
						<h2 className='my-8 text-[#8490A4]'>ПК ДЛЯ ГЕЙМИНГА Amin store</h2>
						<button className='text-black font-[600] bg-[#49DCFF] hover:bg-blue-200  focus:ring-blue-300 rounded-[5px] text-sm px-5 py-3.5 me-2 mb-2 dark:bg-[#49DCFF] dark:hover:bg-blue-200 transition-[.6s] focus:outline-none'>
							ИГРОВЫЕ КОМПЬЮТЕРЫ{' '}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Selection
