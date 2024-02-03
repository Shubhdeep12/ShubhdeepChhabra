import { IconProps } from '@/utils/types'

export const ProfileIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' role='presentation' width={width} height={height}>
		<path
			d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const GithubIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M15.8 22.5c-.6 0-1-.4-1-1V18c0-.7-.2-1.2-.6-1.7-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.6-.3 4.9-1.1 4.9-5.3 0-1-.4-2-1.1-2.7-.3-.3-.3-.7-.2-1 .2-.7.3-1.4.1-2-.4.1-1.2.4-2.3 1.1-.2.2-.5.2-.8.1-1.9-.5-3.9-.5-5.8 0-.1.1-.4.1-.6-.1-1.1-.7-1.9-1-2.3-1.1-.1.7-.1 1.4.1 2 .1.4.1.8-.2 1-.7.8-1.1 1.7-1.1 2.7 0 3.9 2 5 4.9 5.3.4 0 .7.3.8.7.1.4 0 .8-.2 1-.4.4-.6 1-.6 1.6v3.5c0 .6-.4 1-1 1s-1-.4-1-1V20c-2.7.4-3.9-1.1-4.7-2.1-.3-.4-.6-.8-.9-.9-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7.9.2 1.5.9 2 1.6.7.9 1.3 1.7 3.1 1.3 0-.5 0-1.1.2-1.6-2.5-.6-5.2-2.2-5.2-7.1.1-1.3.6-2.6 1.4-3.6-.3-1.2-.2-2.4.3-3.6.1-.3.3-.5.6-.6.3-.1 1.6-.3 4 1.2 2-.5 4-.5 6 0 2.4-1.5 3.7-1.3 4-1.2.3.1.5.3.6.6.5 1.1.6 2.4.3 3.6.8 1 1.2 2.3 1.2 3.6 0 5.1-3.1 6.6-5.2 7.1.2.5.3 1.1.2 1.7v3.4c0 .6-.4 1-1 1z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const LinkedinIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M21.5 22h-3.8c-.6 0-1-.4-1-1v-6.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9V21c0 .6-.4 1-1 1h-3.8c-.6 0-1-.4-1-1v-6.7a6.7 6.7 0 0 1 13.4 0V21c0 .6-.4 1-1 1zm-2.8-2h1.8v-5.7c0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7V20h1.8v-5.7c0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9V20zM6.3 22H2.5c-.6 0-1-.4-1-1V9.6c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1V21c0 .6-.4 1-1 1zm-2.8-2h1.8v-9.4H3.5V20zM4.4 7.8c-1.6 0-2.9-1.3-2.9-2.9S2.8 2 4.4 2s2.9 1.3 2.9 2.9S6 7.8 4.4 7.8zm0-3.8c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const TwitterIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 48 48' width={width} height={height} role='presentation'>
		<polygon fill={color} className={className} points='41,6 9.929,42 6.215,42 37.287,6'></polygon>
		<polygon
			fill='#FFFFFF00'
			className={className}
			fillRule='evenodd'
			points='31.143,41 7.82,7 16.777,7 40.1,41'
			clipRule='evenodd'
		></polygon>
		<path
			fill={color}
			className={className}
			d='M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z'
		></path>
	</svg>
)

export const MediumIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
		<path
			d='M13.4093 12.2471C13.4093 15.6973 10.6313 18.4944 7.20451 18.4944C3.77768 18.4944 0.999969 15.6982 0.999969 12.2471C0.999969 8.79604 3.77789 6 7.20451 6C10.6311 6 13.4093 8.79688 13.4093 12.2471ZM20.2159 12.2471C20.2159 15.4951 18.8269 18.1278 17.1136 18.1278C15.4003 18.1278 14.0112 15.4942 14.0112 12.2471C14.0112 8.99998 15.4003 6.36639 17.1136 6.36639C18.8269 6.36639 20.2159 8.99998 20.2159 12.2471ZM23 12.2471C23 15.1571 22.5114 17.516 21.9088 17.516C21.3063 17.516 20.8177 15.1563 20.8177 12.2471C20.8177 9.33792 21.3063 6.97822 21.909 6.97822C22.5118 6.97822 23 9.33729 23 12.2471Z'
			stroke={color}
			strokeWidth='2'
			strokeLinejoin='round'
			className={className}
		/>
	</svg>
)

export const EmailIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
		<path
			d='M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const EyeIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const ResumeIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M9.54 15.65L11.63 17.74L10.35 19L7 15.65L10.35 12.3L11.63 13.56L9.54 15.65M17 15.65L13.65 19L12.38 17.74L14.47 15.65L12.38 13.56L13.65 12.3L17 15.65Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const StarIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' role='presentation' width={width} height={height}>
		<path
			d='M18.2 22c-.2 0-.3 0-.5-.1l-5.7-3-5.7 3c-.3.2-.7.1-1.1-.1-.3-.2-.5-.6-.4-1l1.1-6.4L1.3 10C1 9.7.9 9.3 1 9c.1-.4.4-.6.8-.7l6.4-.9 2.9-5.8c.3-.7 1.5-.7 1.8 0l2.9 5.8 6.4.9c.3 0 .6.3.8.7.1.4 0 .8-.3 1l-4.6 4.5 1.1 6.4c.1.4-.1.8-.4 1-.2.1-.4.1-.6.1zM4.1 10l3.5 3.5c.3.2.4.5.4.8l-.8 4.9 4.4-2.3c.3-.2.6-.2.9 0l4.4 2.3-.9-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5L12 4.3 9.8 8.7c-.1.3-.4.5-.7.5l-5 .8z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const TypeScriptIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const JavaScriptIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'
			fill={color}
			className={className}
		/>
	</svg>
)

export const ReactIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const NextjsIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.4-.5 4.8-1.2L9.6 10.6v5.7H8.5V8.5h1.1l7.9 11.8c2.7-1.8 4.5-4.9 4.5-8.4C22 6.5 17.5 2 12 2zm3.5 13.2-1.2-1.8V8.5h1.2v6.7z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const StyledComponentsIcon = ({
	width = 24,
	height = 24,
	color = 'currentColor',
	className = '',
}: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z'
			fill={color}
			className={className}
		/>
	</svg>
)

export const TailwindIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const HTMLIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const CSSIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const NodejsIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const MongoDBIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const ExpressjsIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z'
			fill={color}
			className={className}
		/>
	</svg>
)

export const GitIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const SemanticUIIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M11.857 23.995C4.52 23.9-.237 17.431.012 11.775-.004 6.167 4.646.066 12.111 0c6.254.027 11.978 5.271 11.885 12.202-.072 6.813-5.84 11.973-12.14 11.793zm.175-4.92c.988.93 3.497 3.166 5.362 1.957 1.434-.93 1.157-3.975.75-5.5 1.597-.365 4.44-1.76 4.37-3.506-.078-2-2.615-3.057-4.408-3.545.347-1.495.913-4.317-.745-5.527-1.637-1.195-4.302.88-5.354 1.969-1.025-.879-3.361-3.096-5.22-2.046-1.46.824-1.513 3.087-.875 5.598-1.441.34-4.459 1.532-4.42 3.546.04 2.183 3.342 3.175 4.397 3.553-.495 1.639-.768 4.596.884 5.55 1.88 1.085 4.39-1.292 5.26-2.048zm-5.244-3.321c.126.039.216.054.362.113.035-.362.268-.685.486-.875-.221-.005-.544-.066-.615-.113.172-.562.439-1.357.657-1.782.25.375.393.674.6 1.1a3.35 3.35 0 0 1 .66-.68c-.645-1.294-1.514-2.837-1.896-4.38.227-.112.426-.116.618-.15.053-.324.162-.638.288-.95-.378-.003-.764.097-1.15.19-.525-1.693-.604-4.156.511-4.624 1.354-.48 3.525 1.331 4.052 2.013l-.337.351c.668-.123 1.305-.107 1.988.013a2.52 2.52 0 0 0-.358-.382c1.172-1.273 3.307-2.653 4.306-1.81.906.852.681 2.98.286 4.456-.466-.083-.72-.138-1.065-.194-.097.51-.163.523-.366.83.317.035.617.065 1.188.234-.19.624-.387 1.202-.662 1.776-.273-.415-.473-.829-.932-1.55l-.565.74c.725 1.284 1.45 2.526 2.143 4.79-.196.114-.309.103-.604.165a4.16 4.16 0 0 1-.333.96c.451-.087.794-.142 1.182-.233.4 1.242.676 3.872-.423 4.554-1.172.677-3.229-.943-4.141-1.918.086-.13.11-.172.26-.274-.594.062-1.29.082-1.779.044.13.108.169.163.207.245-1.43 1.496-3.372 2.559-4.275 1.822-.887-.724-.77-2.846-.293-4.481zm6.072 1.5c2.67-.512 3.576-3.241 2.114-4.976-.405-.48-1.479-1.024-2.257-1.275-1.523-.49-2.556-1.136-1.716-1.962.826-.81 2.851.083 3.182.503l1.155-1.49c-1.161-1.105-2.702-1.52-4.337-1.222C9.54 7.1 8.488 8.336 8.418 9.308c-.155 2.168.875 2.764 2.821 3.598 1.592.682 2.139.913 2.051 1.487-.246 1.618-2.867.959-3.977-.09l-1.361 1.58c1.696 1.405 3.33 1.653 4.908 1.371zM2.404 12.055c-.097-1.216 2.43-2.463 3.731-2.682.318.892.625 1.788 1.031 2.608-.412.86-.737 1.764-1.042 2.679-1.08-.236-3.616-1.31-3.72-2.605zm14.455-.082c.452-1.08.812-2.016 1.013-2.64 1.2.252 3.78 1.37 3.724 2.668-.061 1.442-2.362 2.165-3.703 2.669a29.043 29.043 0 0 0-1.034-2.697z'
			fill={color}
			className={className}
		/>
	</svg>
)

export const PythonIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation'>
		<path
			d='M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z'
			fill={color}
			className={className}
		/>
	</svg>
)

export const ShadcnUI = ({ width = 24, height = 24 }: IconProps) => (
	<svg viewBox='0 0 256 256' width={width} height={height} role='presentation'>
		<rect width='256' height='256' fill='none'></rect>
		<line
			x1='208'
			y1='128'
			x2='128'
			y2='208'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='16'
		></line>
		<line
			x1='192'
			y1='40'
			x2='40'
			y2='192'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='16'
		></line>
	</svg>
)

export const ChevronUp = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation' className={className}>
		<path d='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z' fill={color} />
	</svg>
)

export const BackToTopIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation' className={className}>
		<path
			d='M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14zm-3.3-5.7c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L12 11.4l-3.3 3.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0l4 4z'
			fill={color}
			className={className}
		></path>
	</svg>
)

export const SCIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg
		viewBox='0 0 356 461'
		width={width}
		height={height}
		role='presentation'
		stroke={color}
		fill={color}
		className={className}
	>
		<path d='M192 1L367 27.1138V131.569H307.318L302.26 82.3545L255.728 71.3064V347.51C287.546 317.709 304.431 300.775 307.318 264.147H367V298.295C326.702 387.558 279.889 415.052 192 460V1Z' />
		<path d='M1 31L171 1V135H111V75L63 83V170H171V460C46.9049 393.255 9.35807 354.229 1 298V266H63C56.341 298.014 70.8361 316.53 111 350V230H1V31Z' />
	</svg>
)

export const CalendarIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation' fill={color} className={className}>
		<path d='M8 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2V2a1 1 0 0 1 1-1ZM7 5H5a1 1 0 0 0-1 1v3h16V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9v1a1 1 0 0 1-2 0V5Zm13 6H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9Z'></path>
	</svg>
)

export const TimeIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation' fill={color} className={className}>
		<path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z'></path>
	</svg>
)

export const LikeIcon = ({
	width = 24,
	height = 24,
	color = 'currentColor',
	className = '',
	filled = false,
}: IconProps) => (
	<svg
		viewBox='0 0 24 24'
		width={width}
		height={height}
		role='presentation'
		className={className}
		fill={filled ? color : 'transparent'}
		stroke={!filled ? color : 'transparent'}
	>
		<path d='M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z'></path>
	</svg>
)

export const LoveIcon = ({
	width = 24,
	height = 24,
	color = 'currentColor',
	className = '',
	filled = false,
}: IconProps) => (
	<svg
		viewBox='0 0 24 24'
		width={width}
		height={height}
		role='presentation'
		className={className}
		fill={filled ? color : 'transparent'}
		stroke={!filled ? color : 'transparent'}
	>
		<path d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'></path>{' '}
	</svg>
)

export const BookmarkIcon = ({
	width = 24,
	height = 24,
	color = 'currentColor',
	filled = false,
	className = '',
}: IconProps) => (
	<svg
		viewBox='0 0 24 24'
		width={width}
		height={height}
		role='presentation'
		fill={filled ? color : 'transparent'}
		stroke={!filled ? color : 'transparent'}
		className={className}
	>
		<path d='M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z'></path>
	</svg>
)

export const EditIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation' fill={color} className={className}>
		<path d='M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z'></path>{' '}
	</svg>
)

export const ShareIcon = ({ width = 24, height = 24, color = 'currentColor', className = '' }: IconProps) => (
	<svg viewBox='0 0 24 24' width={width} height={height} role='presentation' fill={color} className={className}>
		<path d='M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z'></path>{' '}
	</svg>
)

export const AuzmorLogo: React.ElementType = ({ width = 24, height = 24, className = '' }: IconProps) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 28 28'
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		className={className}
	>
		<g id='Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
			<g id='Header-Main' transform='translate(0.000000, -1.000000)'>
				<g id='Group-7'>
					<g id='Group-2'>
						<g id='Logo' transform='translate(0.000000, 1.000000)'>
							<g id='Group'>
								<g id='Group-7' fillRule='nonzero'>
									<g id='Group-2'>
										<rect
											id='Rectangle-4'
											fill='#E72364'
											x='8.87804878'
											y='8.19512195'
											width='10.9268293'
											height='10.9268293'
										></rect>
										<polygon id='Rectangle' fill='#FF3366' points='0 0 28 0 28 28'></polygon>
										<rect
											id='Rectangle-8'
											fillOpacity='0.133491848'
											fill='#FFFFFF'
											x='14.3414634'
											y='0'
											width='13.6585366'
											height='13.6585366'
										></rect>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
)
