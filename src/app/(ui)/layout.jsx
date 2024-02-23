import { Inter, Poppins } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sync',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <main className="main__container">{children}</main>
      </body>
    </html>
  );
}
