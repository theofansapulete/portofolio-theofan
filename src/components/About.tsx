import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import BGclouds from '../assets/backgrounds/clouds.webp'
import BGmoon from '../assets/backgrounds/moon.webp'
import useSetOnScreen from '../hooks/useSetOnScreen'
import { AppContext } from '../utils/AppContext'

const About = () => {
	const { theme } = useContext(AppContext)
	const ref = useSetOnScreen('about')

	return (
		<div ref={ref} id='about'>
			<ParallaxProvider>
				<ParallaxBanner
					className='aspect-[2/1] h-[500px]'
					layers={[
						{
							image: theme === 'light' ? BGclouds : BGmoon,

							speed: -30,
						},
					]}
				>
					<Text />
				</ParallaxBanner>
			</ParallaxProvider>
		</div>
	)
}
const Text = () => (
	<motion.div
		initial={{ y: 50, opacity: 0 }}
		transition={{ duration: 1, type: 'spring' }}
		whileInView={{ y: 0, opacity: 1 }}
		viewport={{ once: true }}
		className='absolute inset-0 z-10 flex items-center justify-center myContainer'
	>
		<div className='mx-auto text-center sm:w-1/2 sm:text-left'>
			<h1 className='mb-4 text-intro flex gap-2'>
				<motion.div
					initial={{ y: -50 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='text-cyan-500'
				>
					Get to know
				</motion.div>
				me a bit
			</h1>
			<p className='text-lg text-medium'>
				My
				<span className='mx-1 font-semibold text-cyan-500 w-fit'>passion</span>
				is programing, i've been seriously started to jump into the programing world
				about 6 month ago and i am absolutly loving it. My weapon of choice is
				<span className='mx-1 font-semibold text-cyan-500'>Typescript and Go.</span>
				I am currently married to
				<span className='mx-1 font-semibold text-cyan-500'>ReactJS</span> but i also
				like to work with other frameworks such as
				<span className='mx-1 font-semibold text-cyan-500'>
					Express, React Native and Gin
				</span>
			</p>
		</div>
	</motion.div>
)

export default About
