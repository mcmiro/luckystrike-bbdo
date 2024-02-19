import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Typography from './typography';

interface ConfirmModalProps {
  open: boolean;
  onConfirm: (e: any) => void;
  onAbort: (e: any) => void;
}

const ConfirmModal = ({ open, onConfirm, onAbort }: ConfirmModalProps) => {
  return (
    <Dialog open={open}>
      <DialogContent className="px-[96px]">
        <Typography
          variant="h2"
          align="center"
          weight="bold"
          className="uppercase text-secondary pt-[40px]"
        >
          Du willst am Gewinnspiel teilnehmen?
        </Typography>
        <Typography
          variant="md"
          align="center"
          className="text-secondary pt-[24px]"
        >
          Doch bevor es weiter geht, sag uns doch kurz: Bist du über 18?
        </Typography>
        <div className="flex flex-col gap-2 items-center justify-center pt-[28px]">
          <Button
            onClick={onAbort}
            variant={'outline'}
            className="bg-white text-primary w-full max-w-[376px]"
          >
            Nein
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-primary hover:bg-secondary text-white w-full max-w-[376px]"
          >
            Ja, ich bin über 18 Jahre alt
          </Button>
        </div>
        <Typography
          variant="md"
          align="center"
          className="text-secondary pt-[24px] pb-[44px]"
        >
          Diese Seite enthält Informationen zu einem Nikotinprodukt und richtet
          sich ausschließlich an Erwachsene ab 18 Jahren in Österreich.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
