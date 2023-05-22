'use client'

import Button from '../Button'

import { IoMoon } from 'react-icons/io5'
import Text from '../Text'
const Navbar = () => {
	return (
		<nav
			className='
				fixed top-2 left-1/2 bg-gray-50 w-[95%] h-[60px] laptop:top-4 laptop:max-w-laptop -translate-x-1/2
				flex justify-between items-center
				rounded-lg
				p-[10px]
		'
		>
			<div>
				<Button variant='normal' focusOutlined className='rounded' hoverStyle>
					<Text className='font-bold text-base ' gradient>
						Shubhdeep
					</Text>
				</Button>
			</div>

			<section className='laptop:flex laptop:gap-8 hidden h-full'>
				<ul className='flex gap-6'>
					<li>
						<Button height='h-full' variant='normal' focusOutlined className='rounded' hoverStyle>
							<Text className='font-bold text-base' gradient>
								About
							</Text>
						</Button>
					</li>
					<li>
						<Button height='h-full' variant='normal' focusOutlined className='rounded' hoverStyle>
							<Text className='font-bold text-base ' gradient>
								Projects
							</Text>
						</Button>
					</li>
					<li>
						<Button height='h-full' variant='normal' focusOutlined className='rounded' hoverStyle>
							<Text className='font-bold text-base ' gradient>
								Blog
							</Text>
						</Button>
					</li>
				</ul>

				<div>
					<Button height='h-full' variant='normal' focusOutlined className='rounded' hoverStyle>
						<IoMoon />
					</Button>
				</div>
			</section>
		</nav>
	)
}

export default Navbar
