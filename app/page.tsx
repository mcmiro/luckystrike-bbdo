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
      <header className="pb-[124px] px-4">
        <Typography
          variant="h1"
          weight="bold"
          align="center"
          className="uppercase text-white pt-[156px]"
        >
          gewinne eine<br></br>
          <span className="text-primary">Reise nach Irgendwo!</span>
        </Typography>
        <div className="max-w-[632px] mx-auto">
          <Typography
            variant="md"
            align="center"
            className="text-white pt-[20px]"
          >
            Trage deine Daten ein und sichere dir deinen Gewinnchance.<br></br>
            <strong>Teilnahmeberechtigt</strong> sind Nikotinkonsument:innen{' '}
            <strong>ab 18 Jahren</strong> mit Wohnsitz oder gewöhnlichem
            Aufenthalt <strong>in Österreich</strong>.
          </Typography>
          <RegisterForm />
        </div>
      </header>
      <main className="bg-secondary relative -top-1">
        <div className="bg-white rounded-tl-[96px] md:rounded-tl-[296px]">
          <div className="flex flex-col md:flex-row container mx-auto pt-[64px] md:pt-[180px] max-w-[960px]">
            <div className="w-full">
              <Typography
                variant="h1"
                weight="bold"
                className="text-primary text-h2 lg:text-h1 lg:w-[580px]"
              >
                Erlebe Freiheit pur!
              </Typography>
              <div className="max-w-[480px]">
                <Typography variant="md" className="pt-[20px]">
                  Stell dir vor, du gewinnst die Freiheit auf zwei Rädern! Mit
                  deiner <strong>Vespa Elettrica 45</strong> kannst du die Welt
                  erkunden, den Wind in den Haaren spüren und unvergessliche
                  Abenteuer erleben. <br></br>
                  <br></br>Verpasse nicht deine Chance auf dieses einzigartige
                  Gefühl der Freiheit. Trage jetzt deinen Code ein und sei dabei
                  in der Verlosung um den Hauptgewinn!
                </Typography>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative md:w-[360px] lg:w-[456px] h-full lg:-left-[40px]">
                <Image
                  src={'/assets/images/e-vespa.png'}
                  alt="e-vespa gewinnspiel"
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
      </footer>
    </>
  );
}
