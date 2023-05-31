'use client'

import { EyeIcon, ProfileIcon, ResumeIcon, StarIcon } from '@/assets/Icons'
import Button from '@/components/Button'
import Greeting from '@/components/Greeting'
import SocialButtons from '@/components/SocialButtons'
import Text from '@/components/Text'
import { useIsMounted } from '@/hooks/isMounted'
import { useTheme } from '@/providers/theme-provider'
import cx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Home = () => {
	const isMounted = useIsMounted()
	const router = useRouter()
	const { isDark } = useTheme()

	if (!isMounted) {
		return <></>
	}

	type ProjectProps = {
		key: string
		title: string
		description?: string
		github: boolean
		stars?: number
		imageUrl?: string
		color: string
	}
	const PROJECTS: ProjectProps[] = [
		{
			key: 'blueprint',
			title: 'BluePrint',
			description: 'Feature rich dashboard android icon packs',
			github: true,
			stars: 569,
			imageUrl: '../assets/blueprint.png',
			color: 'sky',
		},
		{
			key: 'frames',
			title: 'Frames',
			description: 'Immersive Android Wallpaper gallery',
			github: true,
			stars: 59,
			imageUrl: '../assets/blueprint.png',
			color: 'green',
		},
		{
			key: 'kuper',
			title: 'Kuper',
			description: 'Widget showcase for Zooper',
			github: false,
			stars: undefined,
			imageUrl: '../assets/blueprint.png',
			color: 'purple',
		},
		{
			key: 'blueprint-1',
			title: 'BluePrint',
			description: 'Feature rich dashboard android icon packs',
			github: true,
			stars: 569,
			imageUrl: '../assets/blueprint.png',
			color: 'indigo',
		},
		{
			key: 'blueprint-2',
			title: 'BluePrint',
			description: 'Feature rich dashboard android icon packs',
			github: true,
			stars: 569,
			imageUrl: '../assets/blueprint.png',
			color: 'blue',
		},
	]
	return (
		<section className='flex flex-col gap-12 px-2'>
			<section id='Intro' className='flex flex-col items-start laptop:flex-row-reverse lpatop:items-center gap-5'>
				<section>
					<div className='rounded-full w-[160px] h-[160px] bg-[#204fa7] bg-opacity-[0.7]'>
						<Image
							className='transition rounded-full contrast-75 brightness-150 grayscale mix-blend-hard-light opacity-70 hover:filter-none hover:opacity-100 hover:mix-blend-normal'
							src={require('../assets/Shubhdeepchhabra.png')}
							alt='shubhdeep Chhabra'
						/>
					</div>
				</section>
				<section className='flex flex-col gap-5 w-full'>
					<Greeting />

					<div className='flex-wrap flex font-medium'>
						Unleashing my wizardry as a full-stack developer from India, I work magic in the software industry.
					</div>

					<div className='flex flex-row gap-3 my-4'>
						<Button
							height='h-[42px]'
							width='w-fit'
							className='p-4 flex gap-1 justify-center items-center rounded-lg bg-blue-700 text-text-light hover:-translate-y-[1px] hover:bg-blue-800 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-400'
							hoverable={false}
							onClick={() => router.push('/about')}
						>
							<ProfileIcon width={24} height={24} color='#fff' className='dark:fill-text-dark transition' />
							<Text
								transitioned={false}
								className='h-full text-white dark:text-text-dark font-extrabold dark:font-bold p-0'
							>
								More about me
							</Text>
						</Button>

						<SocialButtons
							bordered
							socials={[
								{
									key: 'github',
									icon: 'github',
									className: 'group-hocus:fill-black dark:group-hocus:fill-slate-200 dark:fill-slate-400',
									action: () => window.open('https://github.com/Shubhdeep12', '_blank'),
								},
								{
									key: 'linkedin',
									icon: 'linkedin',
									className: 'group-hocus:fill-blue-600 dark:fill-slate-400',
									action: () => window.open('https://www.linkedin.com/in/shubhdeepchhabra/', '_blank'),
								},
								{
									key: 'twitter',
									icon: 'twitter',
									className: 'group-hocus:fill-sky-500 dark:fill-slate-400',
									action: () => window.open('https://twitter.com/ShubhInTech', '_blank'),
								},
								{
									key: 'medium',
									icon: 'medium',
									className:
										'group-hocus:fill-black group-hocus:stroke-black dark:group-hocus:fill-slate-200 dark:group-hocus:stroke-slate-200 dark:stroke-slate-400',
									action: () => window.open('https://shubhdeepchhabra.medium.com/', '_blank'),
								},
							]}
						/>
					</div>
				</section>
			</section>
			<section id='featured-projects' className='flex flex-col gap-4'>
				<div
					id='featured-projects-header'
					className='flex flex-col gap-6 laptop:flex-row justify-between items-start laptop:items-center'
				>
					<Text
						shadow={!isDark}
						shadowColor='orange'
						gradient={isDark}
						active={isDark}
						className='font-semibold text-3xl text-heading-dark'
					>
						Featured Projects
					</Text>

					<div id='actions' className='flex gap-3'>
						<Button
							height='h-[42px]'
							width='w-fit'
							className='group p-4 flex gap-1 justify-center items-center rounded-lg text-text-light
							 hover:-translate-y-[1px] hover:shadow-md 
							 hover:bg-slate-100 dark:hover:bg-slate-900
							 border border-slate-200 hover:border-blue-800 dark:border-slate-800 dark:hover:border-blue-200'
							hoverable={false}
							onClick={() => router.push('/about')}
						>
							<ResumeIcon width={24} height={24} color='#fff' className='fill-text-dark dark:fill-white transition' />
							<Text
								transitioned={false}
								className='h-full dark:text-white text-text-dark font-extrabold dark:font-bold p-0'
							>
								Resume
							</Text>
						</Button>
						<Button
							height='h-[42px]'
							width='w-fit'
							className='p-4 flex gap-1 justify-center items-center rounded-lg bg-blue-700 text-text-light hover:-translate-y-[1px] hover:shadow-md hover:bg-blue-800  dark:bg-blue-500 dark:hover:bg-blue-400'
							hoverable={false}
							onClick={() => router.push('/about')}
						>
							<EyeIcon width={24} height={24} color='#fff' className='dark:fill-text-dark transition' />
							<Text
								transitioned={false}
								className='h-full text-white dark:text-text-dark font-extrabold dark:font-bold p-0'
							>
								View All
							</Text>
						</Button>
					</div>
				</div>
				<div id='featured-projects-content' className='w-full flex flex-col gap-4'>
					{PROJECTS.map((project: ProjectProps) => (
						<Link
							href=''
							key={project.key}
							id={project.key}
							className={cx(
								'flex gap-2 w-full',
								`hocus:bg-${project.color}-50`,
								'dark:bg-opacity-[0.07] group p-2 transition-all duration-200 rounded-lg focus:outline-dashed focus:outline-2 focus:outline-offset-0'
							)}
						>
							<Image
								alt='p1'
								src={require('../assets/blueprint.png')}
								className={`p-1 bg-${project.color}-50 dark:bg-opacity-[0.07] transition rounded-lg group-hocus:bg-opacity-0 group-hocus:scale-110`}
							/>
							<div className='flex flex-col justify-around items'>
								<div className='flex gap-2 items-center'>
									<Text
										transitioned={false}
										className={`h-full font-bold p-0 group-hocus:underline group-hocus:underline-offset-2 group-hocus:underline-2 dark:group-hocus:text-${project.color}-400 group-hocus:text-${project.color}-800`}
									>
										{project.title}
									</Text>
									{project.github && project.stars && project.stars > 0 && (
										<div
											className={`
													transition-all h-[20px]
													group-hocus:bg-inherit dark:bg-${project.color}-900 dark:bg-opacity-20 bg-${project.color}-50
													border border-transparent group-hocus:border-${project.color}-200 group-hocus:border-opacity-50
													group-hocus:text-black dark:text-text-light dark:group-hocus:text-white
													rounded-md p-[4px] 
													text-xs font-medium items-center flex gap-1`}
										>
											<StarIcon
												color='#383838'
												width={10}
												className='group-hocus:fill-black dark:fill-text-light dark:group-hocus:fill-white'
											/>
											569
										</div>
									)}
								</div>
								<Text transitioned={false} className='h-full font-semibold text-sm p-0'>
									{project.description}
								</Text>
							</div>
						</Link>
					))}
				</div>
			</section>
		</section>
	)
}

export default Home
