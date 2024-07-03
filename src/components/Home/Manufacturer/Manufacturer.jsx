// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import './Manufacturer.scss'

// const Manufacturer = () => {
// 	const [tabs, setTabs] = useState(true)
// 	const [data, setData] = useState([])

// 	async function readProduct() {
// 		try {
// 			let { data } = await axios('http://13.53.171.221/pk/')
// 			setData(data.results)
// 		} catch (e) {
// 			console.log(e.message)
// 		}
// 	}
// 	useEffect(() => {
// 		readProduct()
// 	}, [])

// 	return (
// 		<div className='container'>
// 			<h1 className='text-center text-white text-2xl my-11 mt-[-167px]'>
// 				Производитель игровых ПК
// 			</h1>
// 			<div className='flex items-center justify-center gap-1'>
// 				<div
// 					style={{
// 						background: tabs ? '#2C384999' : '#1C232E'
// 					}}
// 					onClick={() => setTabs(true)}
// 					className='w-[330px] h-[90px] flex items-start pl-7 gap-3 justify-center flex-col'
// 				>
// 					<span className='mt-3'>
// 						<svg
// 							width='15'
// 							height='12'
// 							viewBox='0 0 15 12'
// 							fill='none'
// 							xmlns='http://www.w3.org/2000/svg'
// 						>
// 							<path
// 								d='M13.072 4.57462V2.65619C13.072 1.97462 12.5149 1.41747 11.8343 1.41747H6.88126L5.64348 0.179688H1.92919C1.24855 0.179688 0.691406 0.73683 0.691406 1.41747V8.84604C0.691406 9.52762 1.24855 10.0848 1.92919 10.0848H6.38633C7.12919 11.199 8.49141 11.9419 9.97712 11.9419C12.3914 11.9419 14.3098 10.0225 14.3098 7.60826C14.3098 6.43176 13.8149 5.37969 13.072 4.57462ZM5.82919 8.84604H1.92919V2.65619H11.8343V3.70826C11.2771 3.39904 10.6578 3.27462 9.97712 3.27462C9.40702 3.27104 8.84188 3.38069 8.31449 3.59721C7.78709 3.81373 7.30793 4.13281 6.9048 4.53594C6.50167 4.93907 6.18259 5.41823 5.96607 5.94562C5.74955 6.47302 5.6399 7.03816 5.64348 7.60826C5.64348 8.0419 5.70569 8.47462 5.82919 8.84604ZM9.97712 10.7032C9.56947 10.7074 9.16508 10.6302 8.78763 10.4762C8.41017 10.3222 8.06725 10.0944 7.77894 9.80617C7.49063 9.51795 7.26273 9.17509 7.10859 8.79768C6.95445 8.42028 6.87716 8.01591 6.88126 7.60826C6.87729 7.20064 6.95466 6.79633 7.10885 6.41898C7.26304 6.04163 7.49094 5.69883 7.77922 5.41063C8.06751 5.12243 8.41038 4.89463 8.78778 4.74056C9.16517 4.58649 9.56951 4.50924 9.97712 4.51333C10.3847 4.50923 10.789 4.58649 11.1663 4.74057C11.5437 4.89466 11.8865 5.12247 12.1747 5.41068C12.4629 5.69889 12.6907 6.04171 12.8448 6.41905C12.9989 6.7964 13.0761 7.20069 13.072 7.60826C13.0761 8.01583 12.9989 8.42012 12.8448 8.79747C12.6907 9.17481 12.4629 9.51762 12.1747 9.80583C11.8865 10.094 11.5437 10.3219 11.1663 10.4759C10.789 10.63 10.3847 10.7073 9.97712 10.7032ZM10.5955 6.37047H9.35776V5.13176H10.5955V6.37047ZM10.5955 10.0848H9.35776V6.9889H10.5955V10.0848Z'
// 								fill='#49DCFF'
// 							/>
// 						</svg>
// 					</span>
// 					<button className='text-2xl text-[#FEFFFF]'>Ноутбуки</button>
// 				</div>
// 				<div
// 					style={{
// 						background: tabs ? '#1C232E' : '#2C384999'
// 					}}
// 					onClick={() => setTabs(false)}
// 					className={`w-[330px] h-[90px] a
//            flex items-start pl-7 gap-3 justify-center flex-col`}
// 				>
// 					<span className='mt-3'>
// 						<svg
// 							width='12'
// 							height='14'
// 							viewBox='0 0 12 14'
// 							fill='none'
// 							xmlns='http://www.w3.org/2000/svg'
// 						>
// 							<g clip-path='url(#clip0_570_23971)'>
// 								<path
// 									d='M11.5725 9.85157C11.5728 9.96357 11.5424 10.0735 11.4847 10.1694C11.4269 10.2654 11.3439 10.3436 11.2448 10.3957L6.35398 13.1443C6.25151 13.2186 6.1277 13.2577 6.00112 13.2557C5.87454 13.2577 5.75073 13.2186 5.64826 13.1443L0.757478 10.3957C0.658339 10.3436 0.575369 10.2654 0.517581 10.1694C0.459793 10.0735 0.429396 9.96357 0.429693 9.85157V4.28015C0.429226 4.168 0.459543 4.05787 0.51734 3.96176C0.575137 3.86565 0.658199 3.78724 0.757478 3.73507L5.64826 0.986503C5.75073 0.912159 5.87454 0.87306 6.00112 0.875074C6.13112 0.875074 6.25462 0.912217 6.35398 0.986503L11.2448 3.73507C11.344 3.78724 11.4271 3.86565 11.4849 3.96176C11.5427 4.05787 11.573 4.168 11.5725 4.28015V9.85157ZM6.00112 2.20572L4.83112 2.86872L8.47762 4.96729L9.69033 4.28015L6.00112 2.20572ZM2.31191 4.28015L6.00112 6.35365L7.21476 5.673L3.57476 3.56793L2.31191 4.28015ZM1.66748 9.48572L5.38176 11.5787V7.42429L1.66748 5.33872V9.48572ZM10.3348 9.48572V5.33872L6.62048 7.42429V11.5787L10.3348 9.48572Z'
// 									fill='#8490A4'
// 								/>
// 							</g>
// 							<defs>
// 								<clipPath id='clip0_570_23971'>
// 									<rect
// 										width='12'
// 										height='13'
// 										fill='white'
// 										transform='translate(0 0.5625)'
// 									/>
// 								</clipPath>
// 							</defs>
// 						</svg>
// 					</span>
// 					<button className='text-2xl text-[#FEFFFF]'>ПК</button>
// 				</div>
// 			</div>
// 			<div className=''>
// 				{tabs ?
// 				 (
// 					<div className='forBack pt-11   flex items-center justify-between flex-wrap'>
// 						{data.slice(0, 3).map(el => (
// 							<div
// 								className={`w-[450px] h-[180px] bg-[#1C232E]
//                  flex items-center justify-center gap-4`}
// 							>
// 								<img
// 									className='mt-[-45px] mx-6 w-[150px]'
// 									src={el.image}
// 									alt='img'
// 								/>
// 								<div className=''>
// 									<h3 className='text-[#49DCFF] '>{el.title}</h3>
// 									<p className='text-[#8490A4] text-[13px] mt-4 '>
// 										{el.description.slice(0, 100)}
// 									</p>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				) : 
// 				(
// 					''
// 				)}
// 				{tabs === false ? (

// 					<div className='forBack pt-11 '>
// 						{!isMobile ? 
// 						(
// 							<>
// 								{data.slice(1, 4).map(el => (
// 									<div
// 										className={` forBlock w-[450px] h-[180px] bg-[#1C232E]
//                  flex items-center justify-center gap-4`}
// 									>
// 										<img
// 											className='mt-[-45px] mx-6 w-[150px]'
// 											src={el.image}
// 											alt='img'
// 										/>
// 										<div className=''>
// 											<h3 className='text-[#49DCFF] '>{el.title}</h3>
// 											<p className='text-[#8490A4] text-[13px] mt-4 '>
// 												{el.description.slice(0, 100)}
// 											</p>
// 										</div>
// 									</div>
// 								))}
// 							</>
// 						) : 
// 						(
// 							<>
// 								{data.slice(2, 3).map(el => (
// 									<div
// 										className={` forBlock w-[450px] h-[180px] bg-[#1C232E]
//                  flex items-center justify-center gap-4`}
// 							>
// 								<img
// 									className='mt-[-45px] mx-6 w-[150px]'
// 									src={el.image}
// 									alt='img'
// 								/>
// 								<div className=''>
// 									<h3 className='text-[#49DCFF] '>{el.title}</h3>
// 									<p className='text-[#8490A4] text-[13px] mt-4 '>
// 										{el.description.slice(0, 100)}
// 									</p>
// 								</div>
// 									</div>
// 									))}
// 							</>
// 						)}
				
// 					</div>
// 					) : 
// 					(
// 						""
// 					)}
// 				</div>
// 			</div>
// 	)
// 				}	

// export default Manufacturer





import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Manufacturer.scss'

const Manufacturer = () => {
  const [tabs, setTabs] = useState(true)
  const [data, setData] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  async function readProduct() {
    try {
      let { data } = await axios('http://13.53.171.221/pk/')
      setData(data.results)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    readProduct()
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 575)
    window.addEventListener('resize', handleResize)
    handleResize()
    return window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className='container'>
      <h1 className='text-center text-white text-2xl my-11 mt-[-167px]'>
        Производитель игровых ПК
      </h1>
      <div className='flex items-center justify-center gap-1'>
        <div
          style={{
            background: tabs ? '#2C384999' : '#1C232E'
          }}
          onClick={() => setTabs(true)}
          className='w-[330px] h-[90px] flex items-start pl-7 gap-3 justify-center flex-col'
        >
          <span className='mt-3'>
            <svg
              width='15'
              height='12'
              viewBox='0 0 15 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.072 4.57462V2.65619C13.072 1.97462 12.5149 1.41747 11.8343 1.41747H6.88126L5.64348 0.179688H1.92919C1.24855 0.179688 0.691406 0.73683 0.691406 1.41747V8.84604C0.691406 9.52762 1.24855 10.0848 1.92919 10.0848H6.38633C7.12919 11.199 8.49141 11.9419 9.97712 11.9419C12.3914 11.9419 14.3098 10.0225 14.3098 7.60826C14.3098 6.43176 13.8149 5.37969 13.072 4.57462ZM5.82919 8.84604H1.92919V2.65619H11.8343V3.70826C11.2771 3.39904 10.6578 3.27462 9.97712 3.27462C9.40702 3.27104 8.84188 3.38069 8.31449 3.59721C7.78709 3.81373 7.30793 4.13281 6.9048 4.53594C6.50167 4.93907 6.18259 5.41823 5.96607 5.94562C5.74955 6.47302 5.6399 7.03816 5.64348 7.60826C5.64348 8.0419 5.70569 8.47462 5.82919 8.84604ZM9.97712 10.7032C9.56947 10.7074 9.16508 10.6302 8.78763 10.4762C8.41017 10.3222 8.06725 10.0944 7.77894 9.80617C7.49063 9.51795 7.26273 9.17509 7.10859 8.79768C6.95445 8.42028 6.87716 8.01591 6.88126 7.60826C6.87729 7.20064 6.95466 6.79633 7.10885 6.41898C7.26304 6.04163 7.49094 5.69883 7.77922 5.41063C8.06751 5.12243 8.41038 4.89463 8.78778 4.74056C9.16517 4.58649 9.56951 4.50924 9.97712 4.51333C10.3847 4.50923 10.789 4.58649 11.1663 4.74057C11.5437 4.89466 11.8865 5.12247 12.1747 5.41068C12.4629 5.69889 12.6907 6.04171 12.8448 6.41905C12.9989 6.7964 13.0761 7.20069 13.072 7.60826C13.0761 8.01583 12.9989 8.42012 12.8448 8.79747C12.6907 9.17481 12.4629 9.51762 12.1747 9.80583C11.8865 10.094 11.5437 10.3219 11.1663 10.4759C10.789 10.63 10.3847 10.7073 9.97712 10.7032ZM10.5955 6.37047H9.35776V5.13176H10.5955V6.37047ZM10.5955 10.0848H9.35776V6.9889H10.5955V10.0848Z'
                fill='#49DCFF'
              />
            </svg>
          </span>
          <button className='text-2xl text-[#FEFFFF]'>Ноутбуки</button>
        </div>
        <div
          style={{
            background: tabs ? '#1C232E' : '#2C384999'
          }}
          onClick={() => setTabs(false)}
          className={`w-[330px] h-[90px] a
           flex items-start pl-7 gap-3 justify-center flex-col`}
        >
          <span className='mt-3'>
            <svg
              width='12'
              height='14'
              viewBox='0 0 12 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_570_23971)'>
                <path

d='M11.5725 9.85157C11.5728 9.96357 11.5424 10.0735 11.4847 10.1694C11.4269 10.2654 11.3439 10.3436 11.2448 10.3957L6.35398 13.1443C6.25151 13.2186 6.1277 13.2577 6.00112 13.2557C5.87454 13.2577 5.75073 13.2186 5.64826 13.1443L0.757478 10.3957C0.658339 10.3436 0.575369 10.2654 0.517581 10.1694C0.459793 10.0735 0.429396 9.96357 0.429693 9.85157V4.28015C0.429226 4.168 0.459543 4.05787 0.51734 3.96176C0.575137 3.86565 0.658199 3.78724 0.757478 3.73507L5.64826 0.986503C5.75073 0.912159 5.87454 0.87306 6.00112 0.875074C6.13112 0.875074 6.25462 0.912217 6.35398 0.986503L11.2448 3.73507C11.344 3.78724 11.4271 3.86565 11.4849 3.96176C11.5427 4.05787 11.573 4.168 11.5725 4.28015V9.85157ZM6.00112 2.20572L4.83112 2.86872L8.47762 4.96729L9.69033 4.28015L6.00112 2.20572ZM2.31191 4.28015L6.00112 6.35365L7.21476 5.673L3.57476 3.56793L2.31191 4.28015ZM1.66748 9.48572L5.38176 11.5787V7.42429L1.66748 5.33872V9.48572ZM10.3348 9.48572V5.33872L6.62048 7.42429V11.5787L10.3348 9.48572Z'
fill='#8490A4'
/>
</g>
<defs>
<clipPath id='clip0_570_23971'>
<rect
  width='12'
  height='13'
  fill='white'
  transform='translate(0 0.5625)'
/>
</clipPath>
</defs>
</svg>
</span>
<button className='text-2xl text-[#FEFFFF]'>ПК</button>
</div>
</div>
<div className=''>
{tabs ? (
<div className='forBack pt-11 '>
{!isMobile ? (
<>
{data.slice(0, 3).map(el => (
<div
  className={` forBlock w-[450px] h-[180px] bg-[#1C232E]
flex items-center justify-center gap-4`}
>
  <img
	className='mt-[-45px] mx-6 w-[150px]'
	src={el.image}
	alt='img'
  />
  <div className=''>
	<h3 className='text-[#49DCFF] '>{el.title}</h3>
	<p className='text-[#8490A4] text-[13px] mt-4 '>
	  {el.description.slice(0, 100)}
	</p>
  </div>
</div>
))}
</>
) : (
<>
{data.slice(0, 1).map(el => (
<div
  className={` forBlock w-[450px] h-[180px] bg-[#1C232E]
flex items-center justify-center gap-4`}
>
  <img
	className='forImg mt-[-45px] mx-6 w-[150px]'
	src={el.image}
	alt='img'
  />
  <div className=''>
	<h3 className='forTexth3 text-[#49DCFF] '>{el.title}</h3>
	<p className='forTextP text-[#8490A4] text-[13px] mt-4 '>
	  {el.description.slice(0, 100)}
	</p>
  </div>
</div>
))}
</>
)}
</div>
) : (
''
)}
{tabs === false ? (
<div className='forBack pt-11 '>
{!isMobile ? (
<>
{data.slice(1, 4).map(el => (
<div
  className={` forBlock w-[450px] h-[180px] bg-[#1C232E]
flex items-center justify-center gap-4`}
>
  <img
	className='mt-[-45px] mx-6 w-[150px]'
	src={el.image}
	alt='img'
  />
  <div className=''>
	<h3 className='text-[#49DCFF] '>{el.title}</h3>
	<p className='text-[#8490A4] text-[13px] mt-4 '>
	  {el.description.slice(0, 100)}
	</p>
  </div>

  </div>
                ))}
              </>
            ) : (
              <>
                {data.slice(2, 3).map(el => (
                  <div
                    className={` forBlock w-[450px] h-[180px] bg-[#1C232E]
                 flex items-center justify-center gap-4`}
                  >
                    <img
                      className='forImg mt-[-45px] mx-6 w-[150px]'
                      src={el.image}
                      alt='img'
                    />
                    <div className=''>
                      <h3 className='forTexth3 text-[#49DCFF] '>{el.title}</h3>
                      <p className='forTextP text-[#8490A4] text-[13px] mt-4 '>
                        {el.description.slice(0, 100)}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Manufacturer