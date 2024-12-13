import Header from '@/components/header';
import Main from '@/components/main';
import Footer from '@/components/footer';

export default function Home() {
    return (
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    )
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }];
}