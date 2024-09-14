import { motion } from 'framer-motion'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import useSetOnScreen from '../hooks/useSetOnScreen'
import useTheme from '../hooks/useTheme'

const About = () => {
	const { theme } = useTheme()
	const ref = useSetOnScreen('about')

	return (
		<div ref={ref} id='about'>
			<ParallaxProvider>
				<ParallaxBanner
					className='aspect-[2/1] h-[500px]'
					layers={[
						{
							image:
								theme === 'dark' ? 'backgrounds/moon.webp' : '/backgrounds/clouds.webp',

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
		className='absolute inset-0 z-10 flex items-center justify-center container px-6 mx-auto py-14'
	>
		<div className='mx-auto text-center sm:w-1/2 sm:text-left'>
			<h1 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl flex gap-2'>
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
			<p className='text-lg text-gray-700 dark:text-gray-200'>
				I've got a solid foundation in programming from all the projects I've worked
				on. I specialize in Network Engineering, especially with Cisco and Linux.
				I'm also pretty good at data mining using Python, SQL, and Excel. When it
				comes to teamwork, I'm great at collaborating, communicating effectively,
				and always working towards our shared goals with high efficiency and
				quality. I truly believe that good teamwork is crucial for any project's
				success, and I'm always committed to giving my best in every situation.
			</p>
		</div>
	</motion.div>
)

export default About
