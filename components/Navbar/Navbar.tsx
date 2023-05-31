'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import cx from 'clsx'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { IoMoon, IoSunny } from 'react-icons/io5'

import { useTheme } from '@/providers/theme-provider'

import Button from '../Button'
import Text from '../Text'
import { useIsMounted } from '@/hooks/isMounted'

const Navbar = () => {
	const pathname = usePathname()
	const router = useRouter()
	const [navbarExpanded, setNavbarExpanded] = useState(false)
	const { isDark, toggleTheme } = useTheme()
	const isMounted = useIsMounted()

	const NAVBAR_ITEMS = [
		{
			key: 'about',
			title: 'About',
			route: '/about',
			gradient: true,
			gFrom: 'from-blue-500',
			gTo: 'to-green-500',
			active: pathname === '/about',
		},
		{
			key: 'projects',
			title: 'Projects',
			route: '/projects',
			gradient: true,
			gFrom: 'from-[#c86827]',
			gTo: 'to-[#c69227]',
			active: pathname === '/projects',
		},
		{
			key: 'blogs',
			title: 'Blogs',
			route: '/blogs',
			gradient: true,
			gFrom: 'from-[#bc2f48]',
			gTo: 'to-[#7a4cbb]',
			active: pathname === '/blogs',
		},
	]

	if (!isMounted) {
		return <div />
	}
	return (
		<nav
			className={cx(
				'fixed top-2 left-1/2 laptop:top-4 laptop:max-w-laptop w-full mx-auto -translate-x-1/2',
				'flex flex-col',
				'transition-all',
				'rounded-lg',
				'p-[10px]',
				'bg-background-nav-light/20 dark:bg-background-nav-dark backdrop-blur-[10px] backdrop-saturate-150',
				'hover:shadow-dark',
				'border border-border-nav-dark dark:border-border-nav-light',
				'z-10'
			)}
		>
			<section className='h-[40px] flex gap-4 justify-between items-center'>
				<div className='h-full'>
					<Button onClick={() => router.push('/')} height='h-full' variant='normal' focusOutlined className='rounded'>
						<Text className='font-semibold text-base p-2' hoverable>
							Shubhdeep
						</Text>
					</Button>
				</div>

				<section className='flex grow justify-end h-full'>
					<ul className='hidden laptop:flex gap-6'>
						{NAVBAR_ITEMS.map((item) => (
							<li key={item.key}>
								<Button
									onClick={() => router.push(item.route)}
									height='h-full'
									width='w-full'
									variant='normal'
									focusOutlined
									className='rounded flex justify-center'
									active={item.active}
								>
									<Text
										className='font-semibold text-base p-2'
										gFrom={item.gFrom}
										gTo={item.gTo}
										gradient={item.gradient}
										active={item.active}
										hoverable
									>
										{item.title}
									</Text>
								</Button>
							</li>
						))}
					</ul>
				</section>
				<div className='h-full w-[42px]'>
					<Button
						height='h-full'
						width='w-full'
						variant='normal'
						focusOutlined
						className='rounded flex justify-center items-center'
						onClick={toggleTheme}
					>
						{isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
					</Button>
				</div>

				<div className='laptop:hidden h-full w-[42px]'>
					<Button
						height='h-full'
						width='w-full'
						variant='normal'
						focusOutlined
						className='rounded flex justify-center items-center'
						onClick={() => setNavbarExpanded(!navbarExpanded)}
					>
						<div className={`transition-all ${navbarExpanded ? 'rotate-45' : '-rotate-45'}`}>
							{navbarExpanded ? (
								<RxCross2 className='-rotate-45' size={20} />
							) : (
								<RxHamburgerMenu size={20} className='rotate-45' />
							)}
						</div>
					</Button>
				</div>
			</section>

			<section
				className={`${
					navbarExpanded ? 'h-[calc(100vh-75px)]' : 'h-0'
				} transition-all w-full flex items-center laptop:hidden`}
			>
				<ul className={navbarExpanded ? 'laptop:hidden flex align-middle w-full h-[42px] flex-col gap-6' : 'hidden'}>
					{NAVBAR_ITEMS.map((item) => (
						<li key={item.key}>
							<Button
								onClick={() => router.push(item.route)}
								height='h-full'
								width='w-full'
								variant='normal'
								focusOutlined
								className='rounded flex justify-center'
								active={item.active}
							>
								<Text
									className='font-semibold text-base p-2'
									gFrom={item.gFrom}
									gTo={item.gTo}
									gradient={item.gradient}
									active={item.active}
									hoverable
								>
									{item.title}
								</Text>
							</Button>
						</li>
					))}
				</ul>
			</section>
		</nav>
	)
}

export default Navbar