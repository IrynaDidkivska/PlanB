import Contacts from '@/components/Contacts/Contacts';
import { Promotion, SocialMedia } from '@/components/SocialMedia/index';
import { Nav } from './index';
import { HeaderProps } from '@/interfaces/header';

export const MobileMenu = ({
  toggleModal,
  isOnMobile,
  isOnTablet,
}: HeaderProps) => {
  return (
    <div className="overflow-y-auto snap-mandatory scrollable-component thin-scrollbar flex flex-col justify-between sm:px-0 md:pt-[160px] md:pb-8 md:px-5 md:h-screen">
      {isOnMobile && (
        <div className="flex items-center gap-6 pb-[66px] w-screen text-stone-50">
          <Promotion />
          <SocialMedia isOnMobile={isOnMobile} />
        </div>
      )}

      <Nav isMobile={true} toggleModal={toggleModal} />
      <Contacts
        isDesktop={true}
        toggleModal={toggleModal}
        isOnTablet={isOnTablet}
        isOnMobile={isOnMobile}
      />
    </div>
  );
};
