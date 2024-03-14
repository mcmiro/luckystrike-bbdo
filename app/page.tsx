'use client';
import Image from 'next/image';
import Typography from '@/components/ui/typography';
import Link from 'next/link';
import RegisterForm from '@/components/form/register';
import ConfirmModal from '@/components/ui/confirm-modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('ofLegalAge');
    if (!hasVisited) {
      setOpenModal(true);
    }

    const mainElement = document.querySelector('main');
    const currentHeight = mainElement!.offsetHeight; // Get the current width of the main element

    // Reduce the width by 320px if it's larger than 320px
    const newHeight = currentHeight > 320 ? currentHeight - 320 : currentHeight;

    // Set the new width to the main element
    mainElement!.style.height = newHeight + 'px';
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    sessionStorage.setItem('ofLegalAge', JSON.stringify(true));
  };

  return (
    <>
      <header className="pb-[444px] px-4">
        <Typography
          variant="h1"
          weight="bold"
          align="center"
          className="uppercase text-white pt-[156px]"
        >
          gewinne eine<br></br>
          <span className="text-primary">
            All Inclusive Reise<br className="hidden md:block"></br> auf die
            Malediven
          </span>
        </Typography>
        <div className="max-w-[632px] mx-auto">
          <Typography
            variant="md"
            align="center"
            className="text-white pt-[20px]"
          >
            Tausche eintönigen Alltag gegen Entspannung an sonnigen Stränden und
            Schwimmen im türkis-blauen Wasser des Indischen Ozeans. Entdecke
            dabei die vielfältige Natur der Malediven und lass dich in ihren
            Bann ziehen.
          </Typography>
          <RegisterForm />
        </div>
      </header>
      <main className="relative -top-[320px]">
        <div className="bg-white rounded-tl-[96px] md:rounded-tl-[296px]">
          <div className="flex flex-col md:flex-row gap-8 items-center container mx-auto pt-[64px] md:pt-[180px] md:max-w-[1024px]">
            <div className="w-full">
              <Typography
                variant="h1"
                weight="bold"
                className="text-primary text-h2 lg:text-h1"
              >
                Weiße Strände und Blaues Wasser
              </Typography>
              <div className="max-w-[480px]">
                <Typography variant="md" className="pt-[20px]">
                  Egal ob Hobby-Schnorchler oder Profi-Relaxer bei maledivischen
                  Stränden geht jedem das Herz auf.
                </Typography>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative md:w-[360px] lg:w-[456px] h-full">
                <Image
                  src={'/assets/images/mal.png'}
                  alt="gewinnspiel"
                  width="456"
                  height="304"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="container mx-auto flex justify-end gap-8 text-secondary text-sm pt-[174px] pb-12">
        <ConfirmModal
          open={openModal}
          onConfirm={handleCloseModal}
          onAbort={handleGoBack}
        />
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/teilnahmebedingungen">Teilnahmebedingungen</Link>
      </footer>
    </>
  );
}
