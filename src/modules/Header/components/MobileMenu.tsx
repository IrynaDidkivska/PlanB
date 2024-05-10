import Contacts from '@/components/Contacts/Contacts';
import { SocialMedia } from '@/components/SocialMedia/index';
import { Nav } from './index';
import { useMediaQueries } from '@/hooks';

interface MobileMenuProps {
  toggleModal: () => void;
}

export const MobileMenu = ({ toggleModal }: MobileMenuProps) => {
  const { isOnMobile, isOnTablet, isOnDesktop } = useMediaQueries();
  return (
    <div className="flex flex-col justify-between   sm:px-6 md:pt-[160px] md:pb-8 md:px-5 md:h-screen">
      {isOnMobile && (
        <div className="pb-[66px]">
          <SocialMedia />
        </div>
      )}

      <Nav isMobile={true} toggleModal={toggleModal} />
      <Contacts isOnDesktop={true} isOnTablet={isOnTablet} />
      {isOnMobile && <span>Адреса</span>}
    </div>
  );
};
