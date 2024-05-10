import Contacts from '@/components/Contacts/Contacts';
import { SocialMedia } from '@/components/SocialMedia/index';
import { Nav } from './index';

export const MobileMenu = () => {
  return (
    <div className="pt-[50px] px-[15px] md:px-[40px]">
      <div className="pb-[66px]">
        <SocialMedia />
      </div>
      <Nav isMobile={true} />
      <Contacts
        wrapperContact="flex gap-12 p-0 m-0 md:flex-col md:items-center"
        location={
          <>
            <address className="hidden md:inline">
              м. Кам’янець-Подільский, БЦ “Розмарин” <br /> вул. Лесі Українки
              31, каб. 605
            </address>
            <span className="md:hidden">Адреса</span>
          </>
        }
      />
    </div>
  );
};
