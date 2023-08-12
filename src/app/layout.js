import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'IMDB CLONE',
	description: 'IMDB cloned next app',
};

export default function RootLayout({ children }) {
	return (
		<html>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
