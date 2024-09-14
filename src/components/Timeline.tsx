import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
const Timeline = () => (
	<AnimatedSection>
		<div className='container px-6 mx-auto py-14'>
			<h1 className='mb-10 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 sm:text-4xl sm:text-left flex gap-2'>
				Educational
				<motion.div
					initial={{ x: 50 }}
					whileInView={{ x: 0 }}
					viewport={{ once: true }}
					className='text-cyan-500'
					transition={{ duration: 1 }}
				>
					Timeline
				</motion.div>
			</h1>
			<ol className='sm:flex justify-center'>
				<TimeLineList
					title='Satya Wacana Christian University'
					date='Enroled on August 1, 2017'
					desc='I am a student of the Faculty of Information and Technology, majoring Informatics Engineering with the latest GPA of 3.05'
				/>
				<TimeLineList
					title='PT. Telkom Witel Kupang – Nusa TenggaraTimur, Indonesia Internship'
					date='May 5 - July 21, 2022'
					desc='My first internship experience was quite enriching as I worked in two teams: Assurance and PSB. In the Assurance team, we were responsible for coordinating and supervising technicians in troubleshooting WiFi issues. Meanwhile, in the PSB team, our focus was on deploying new WiFi installations. This experience provided me with a deep understanding of team coordination and project management in a dynamic technological environment.'
				/>
				<TimeLineList
					title='PT Angkasa Pura 1 El Tari International Airport Kupang – Nusa TenggaraTimur, Indonesia Internship'
					date='August 8 - Desember 18, 2022'
					desc='My second internship experience was with the Airport Technology division, where our responsibility was to manage and oversee the operation of technological systems at El Tari Airport in Kupang. This opportunity allowed me to implement what I had learned during my studies, particularly in configuring WiFi networks and CCTV systems (LAN). I also gained valuable experience in coordinating with teams to ensure smooth operations.'
				/>
				<TimeLineList
					title='Universitas Kristen Satya Wacana, Assistant for RSNA 1 (CCNAv7: Introduction to Networks)'
					date='September - Desember 2023'
					desc='Being a Teaching Assistant for RSNA 1 (CCNAv7: Introduction to Networks) at Satya Wacana Christian University provided valuable experience in teaching fundamental network concepts such as OSI model, IP addressing, subnetting, routing, and switching. This role expanded my troubleshooting skills and prepared me for a career in information technology.'
				/>
			</ol>
		</div>
	</AnimatedSection>
)
const TimeLineList = ({ title, date, desc }: TimeLineList) => (
	<li className='relative mb-6 sm:mb-0 min-w-[300px]'>
		<div className='flex items-center'>
			<div className='z-10 flex items-center justify-center w-6 h-6 rounded-full bg-cyan-200 ring-0 ring-gray-200 dark:bg-cyan-900 sm:ring-8 dark:ring-gray-800 shrink-0'>
				<svg
					className='w-3 h-3 text-cyan-600 dark:text-cyan-300'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
			<div className='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
		</div>
		<div className='mt-3 sm:pr-8'>
			<p className='font-semibold text-md text-gray-900 dark:text-gray-100'>
				{title}
			</p>
			<time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
				{date}
			</time>
			<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
				{desc}
			</p>
		</div>
	</li>
)

interface TimeLineList {
	title: string
	date: string
	desc: string
}

export default Timeline
