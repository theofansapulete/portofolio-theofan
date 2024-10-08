import type { Project } from './types'

export const socialLinks = {
	instagram: 'https://www.instagram.com/tyo_sapulete',
	facebook: 'https://www.facebook.com/people/Theofan Sapulete-Pattiselanno',
	github: 'https://github.com/theofansapulete',
	linkedin: 'https://www.linkedin.com/in/theofan-sapulete-7b1a74265/',
}

export const cvLinks = {
	english: '',
	bahasa: '',
}

export const projects: Project[] = [
	{
		title: 'Academic Information System',
		desc: {
			short:
				'An information system for IAKN Kupang university, Build with Next.js, Postgresql, and Tailwindcss.',
			description:
				'The Information System for IAKN Kupang University Students is a web-based application built using Next.js, Postgresql, and Tailwindcss. The primary goal of the system is to provide students of IAKN Kupang University with a centralized platform to access academic information and manage their academic progress more efficiently. The system offers the following features:',
			list: [
				'User Authentication: The system allows students to register and login to their accounts securely. The authentication system ensures that only registered students can access the systems features.',
				'Dashboard: Once logged in, students can view their academic progress and other relevant information on their dashboard. The dashboard provides quick access to critical information, such as grades, course schedules, and assignments.',
				'Course Management: Students can view all their enrolled courses, including course descriptions, schedules, and instructors. They can also submit assignments, view grades, and receive notifications for course-related updates.',
				'Academic Calendar: The system provides a comprehensive academic calendar that lists all the important dates, such as exam schedules, assignment deadlines, and class schedules.',
				'Personal Information Management: Students can update their personal information, such as their name, address, and contact details, through the system. They can also view their academic transcript, including their GPA and credit hours.',
				'And More...',
			],
			aditional:
				'The Information System for IAKN Kupang University Students is an efficient tool for managing academic information, improving communication between students and instructors, and facilitating student success. It is a modern, user-friendly platform that streamlines academic processes and helps students stay on top of their academic responsibilities.',
		},
		img: '/projects/iaknKupang.webp',
		video: {
			src: '/projects/iaknKupang.mp4',
		},
		details: {
			status: 'Work on Progress',
			code: 'Private',
			demo: 'Prototype',
			stack: [
				{
					name: 'Next.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Postgresql',
					badgeColor: 'primary',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			demo: 'http://nextjs-iakn-kupang.vercel.app/',
		},
		badge: {
			text: 'Active',
		},
	},
	{
		title: 'Ecommerce App',
		desc: {
			short:
				'A fullstack ecommerce application with unique and bold design build with PHP, Laravel, and Tailwindcss.',
			description:
				'The Ecommerce App is a full-stack web application built using PHP, Laravel, and Tailwindcss. The app is designed to provide users with a seamless shopping experience, from browsing products to placing orders. The app offers the following features:',
			list: [
				'User Authentication: The app allows users to register and login to their accounts securely. The authentication system ensures that only registered users can access the apps features.',
				'Product Catalog: The app offers a comprehensive product catalog that allows users to browse through different categories of products. Users can filter products by category, price range, and other attributes.',
				'Cart Management: Users can add products to their cart and checkout securely using their preferred payment method. The app supports popular payment gateways, such as Stripe and PayPal.',
				'Wishlist: The app allows users to save products to their wishlist for future reference. Users can view their wishlist and add products to their cart directly from the wishlist page.',
				'Transaction History: The app keeps track of all the transactions made by the user. Users can view their transaction history and download receipts for their purchases.',
			],
			aditional:
				'The Ecommerce App is a modern, user-friendly application that offers a seamless shopping experience for users. It is a great example of how to build a full-stack web application using modern frontend frameworks and payment gateways.',
		},
		img: '/projects/ecommerce.webp',
		video: {
			src: '/projects/ecommerce.mp4',
		},
		details: {
			status: 'Stable',
			code: 'Public',
			demo: 'Unavailable',
			stack: [
				{
					name: 'PHP',
					badgeColor: 'info',
				},
				{
					name: 'Laravel',
					badgeColor: 'error',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			code: 'https://github.com/jeheskielSunloy77/laravel-ecommerce',
		},
		badge: {
			text: 'New',
		},
	},
	{
		title: 'Ecommerce Web Scraper',
		desc: {
			short:
				'A webscraper build with GO using serverless functions technology, that can scrape the web looking for any product from the user.',
			description:
				'The Product Web Scraper with GO is a web scraper tool built using serverless functions technology that allows users to scrape the web for any product they want. The system uses GO programming language, a serverless computing platform, and cloud-based storage to offer a highly scalable, efficient, and cost-effective solution to product web scraping.',
			list: [
				'User Interface: The system offers a simple and intuitive user interface that allows users to specify the product they want to scrape for. Users can enter the product name or any relevant keywords in the search bar.',
				'Serverless Functions: Once the user enters the product information, the system triggers a serverless function that retrieves product data from various e-commerce websites. The serverless functions are automatically triggered when the user makes a request to scrape a particular product.',
				'Cloud-Based Storage: The scraped product data is stored in a cloud-based storage system, such as Amazon S3 or Google Cloud Storage. The data is stored in a structured format that is easily accessible by users.',
				'Analytics: The system also offers analytics features that allow users to track their web scraping activities. Users can see the total number of products scraped, the time taken to scrape the products, and other relevant information.',
			],
			aditional:
				'The Product Web Scraper with GO is a powerful tool that can help businesses and individuals automate their product research processes. It is a highly scalable solution that can handle a large volume of web scraping requests without compromising on performance. With its cloud-based storage and serverless computing architecture, the system offers a cost-effective solution for web scraping that can help businesses save time and resources.',
		},
		img: '/projects/webscraper.webp',
		video: {
			src: '/projects/webscraper.mp4',
		},
		details: {
			status: 'Stable',
			code: 'Public',
			demo: 'Available',
			stack: [
				{
					name: 'GO',
					badgeColor: 'info',
				},
				{
					name: 'Colly Framework',
					badgeColor: 'accent',
				},
			],
		},
		links: {
			demo: 'https://go-ecommerce-scraper.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/go-ecommerce-scraper',
		},
	},
	{
		title: 'IAKN Kupang Profile Website',
		desc: {
			short:
				'A Fullstack web app for IAKN Kupang University build with Next.js, Tailwindcss and Postgresql.',
			description:
				'IAKN Kupang University Web App is a full-stack web application built using Next.js, Tailwindcss, and MongoDB. The app is designed to provide students and university members of the IAKN Kupang University with an online platform to access academic resources, manage their academic progress, and stay up-to-date with the latest news and events.',
			aditional:
				'IAKN Kupang University Web App is a comprehensive platform that streamlines academic processes, promotes collaboration, and facilitates communication between students and university members. It is a modern, user-friendly app that offers a seamless experience for accessing academic resources and staying up-to-date with the latest news and events.',
			list: [
				'University Landing Page: The app includes a beautiful landing page that showcases the university strengths, achievements, and facilities. The landing page features stunning visuals, animations, and interactive elements that engage users and leave a lasting impression.',
				'About Page: The app includes an about page that provides information about IAKN Kupang University. Users can learn about the history, vision, and mission of the university.',
				'Gallery: The app includes a gallery feature that showcases photos and videos related to the university. Users can browse through different categories of media, such as events, campus life, and student activities.',
				'News and Events: The app provides news and event updates related to the university. Users can view the latest news, upcoming events, and important announcements.',
				'Research and Publication: The app offers features that allow students and university members to share their research findings and publications. Users can upload research papers, articles, and other scholarly materials to the app.',
			],
		},
		img: '/projects/iaknProfile.webp',
		video: {
			src: '/projects/iaknProfile.mp4',
		},
		details: {
			status: 'Work on Progress',
			code: 'Private',
			demo: 'Prototype',
			stack: [
				{
					name: 'Astro',
					badgeColor: 'secondary',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Postgresql',
					badgeColor: 'success',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			demo: 'https://iakn-kupang-profile.vercel.app/',
		},
	},
	{
		title: 'CRUD App',
		desc: {
			short:
				'A simple CRUD application with Antd on the frontend and using mockapi.io to handle the resources.',
			description:
				'The Antd CRUD Application is a simple web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a set of resources. The application is built using Antd, a popular React UI library, and mockapi.io, a mock API service that provides a simple way to create, test, and share APIs.',
			list: [
				'User Interface: The app offers a clean and intuitive user interface that allows users to easily interact with the applications features. The UI is built using Antd components, which provide a consistent and professional look and feel.',
				'API Integration: The app uses mockapi.io to handle the resources. mockapi.io allows users to create a mock API with a simple and intuitive interface. Users can define the resources, endpoints, and responses they need, and mockapi.io will generate a fully functional API that can be used in the app.',
				'CRUD Operations: The app offers a complete set of CRUD operations for managing resources. Users can create new resources using a simple form, view existing resources in a table, update resource information using a form, and delete resources with a confirmation prompt.',
			],
			aditional:
				'The Antd CRUD Application is a simple and practical web application that demonstrates how to build a CRUD application using Antd and mockapi.io. It is an ideal starting point for developers who want to learn how to create web applications using modern frontend frameworks and mock APIs.',
		},
		img: '/projects/crudApp.webp',
		video: {
			src: '/projects/crudApp.mp4',
		},
		details: {
			status: 'Final',
			code: 'Public',
			demo: 'Available',
			stack: [
				{
					name: 'React.js',
					badgeColor: 'primary',
				},
				{
					name: 'Ant Design',
					badgeColor: 'accent',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			demo: 'https://dataon-project.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/dataon-project',
		},
	},
	{
		title: 'PWA Weather App',
		desc: {
			short:
				'A progressive web application that can be installed on any device that can provide an acurate weather report from all around the world.',
			description:
				'The Global Weather PWA is a progressive web application that allows users to access accurate weather reports from anywhere in the world. The application is designed to be lightweight, fast, and reliable, and it can be installed on any device that supports PWA technology.',
			aditional:
				'The Global Weather PWA is a reliable and convenient way to access accurate weather reports from anywhere in the world. It is a lightweight and fast application that offers real-time updates and works offline. The app is a great example of how to build a PWA using modern frontend frameworks and weather APIs.',
			list: [
				'Weather Reports: The app provides accurate weather reports for any location in the world. Users can search for a location using a city name, a postal code, or GPS coordinates, and the app will display the current weather conditions, as well as the forecast for the next few days.',
				'Real-Time Updates: The app offers real-time updates that keep users informed about any changes in the weather conditions. Users can choose to receive notifications for severe weather alerts, such as thunderstorms, hurricanes, or tornadoes.',
				'PWA Features: The app offers PWA features, such as installability, push notifications, and app-like experiences. Users can install the app on their devices and access it from the home screen, just like a native app.',
			],
		},
		img: '/projects/weatherApp.webp',
		video: {
			src: '/projects/weatherAppVideoFw.mp4',
		},
		details: {
			status: 'Stable',
			code: 'Public',
			demo: 'Available',
			stack: [
				{
					name: 'Next.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			demo: 'https://nextjs-weather-app-lemon.vercel.app/',
			code: 'https://github.com/jeheskielSunloy77/nextjs-weather-app',
		},
	},
	{
		title: 'Cross Platform Coffee Shop App',
		desc: {
			short:
				'A cross platform mobile application for a coffee shop, build with React Native, Typescript, and Tailwindcss.',
			description:
				'The Coffee Shop Mobile App is a cross-platform mobile application that allows users to order coffee and other drinks from a local coffee shop. The app is built using React Native, Typescript, and Tailwindcss, and it can be run on both iOS and Android devices.',
			aditional:
				'The Coffee Shop Mobile App is a cross-platform mobile application that offers a modern and convenient way for customers to order coffee and other drinks from a local coffee shop. The app is built using React Native, Typescript, and Tailwindcss, and it can be run on both iOS and Android devices. The app is a great example of how to build a mobile application using modern frontend frameworks and payment gateways.',
			list: [
				'Menu Management: The app allows the coffee shop owner to manage the menu items, including adding new items, updating prices, and removing items. The owner can also set up special offers, such as discounts and promotions.',
				'Order Management: The app allows the coffee shop owner to manage the orders, including accepting new orders, updating the status of the orders, and marking orders as complete. The owner can also view the order history and generate reports.',
				'User Interface: The app offers a clean and modern user interface that allows users to easily browse the coffee shops menu and place orders. The UI is designed to be responsive and adaptive, so it can be used on both phones and tablets.',
				'Payment Integration: The app integrates with popular payment gateways, such as Stripe and PayPal, to allow users to pay for their orders using their preferred payment method.',
				'Notifications: The app offers push notifications to keep users informed about the status of their orders. Users receive notifications when their orders are accepted, when their orders are ready for pickup, and when their orders are complete.',
			],
		},
		img: '/projects/coffeeShopApp.png',
		video: {
			src: '/projects/coffeeShopApp.webm',
			isPortrait: true,
		},
		details: {
			status: 'Work on Progress',
			code: 'Public',
			demo: 'Unavailable',
			stack: [
				{
					name: 'React Native',
					badgeColor: 'primary',
				},
				{
					name: 'Expo.js',
					badgeColor: 'secondary',
				},
				{
					name: 'Supabase',
					badgeColor: 'success',
				},
				{
					name: 'Typescript',
					badgeColor: 'info',
				},
				{
					name: 'Tailwindcss',
					badgeColor: 'primary',
				},
			],
		},
		links: {
			code: 'https://github.com/jeheskielSunloy77/react-native-coffee-shop',
		},
	},
]
