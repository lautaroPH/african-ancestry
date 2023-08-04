import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'African Ancestry',
  description:
    'African Ancestry helps people of African descent trace their ancestral roots back to a specific present-day African country and tribe/ethnic group.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#FFBB0B] flex w-full items-center justify-center px-4 py-3">
          <p className="text-[#221f46] text-center font-semibold text-sm">
            Last Minute Gift Shopping? Save 10% On A DNA Test Kit Use Code:
            HOLIDAY22 At Checkout
          </p>
        </div>
        <div className="relative z-50 lg:bg-right-top lg:bg-no-repeat lg:bg-home-main">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
