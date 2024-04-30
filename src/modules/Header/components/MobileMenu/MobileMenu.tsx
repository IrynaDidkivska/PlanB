import Contacts from '@/components/Contacts/Contacts';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Link from 'next/link';
import links from '../../assets/menuLinks.json';


const MobileMenu = () => {
  return (
    <div className="pt-[50px] px-[15px] md:px-[40px]">
      <div className="pb-[66px]">
        <SocialMedia
          wrapperClassName="flex flex-row gap-6 p-0 m-0"
          textClassName="text-[14px] leading-4 w-[145px] md:w-[200px] gap-[25px]"
          mediaClassName="gap-4"
          mediaLinkClassName="w-[23px]"
          text={
            <>
              Слідкуйте за <strong className="uppercase">акціями</strong> в наших соцмережах
       </>  
          }
        />
      </div>
      <nav className="pb-[65px]">
        <ul className="flex flex-col gap-6 font-ttChocolates500 font-medium text-2xl items-start">
          {links.map((el, index) => (
              <li key={index}>
                <Link href={el.path}>{el.title}</Link>
              </li>
              ))
           }
        </ul>
      </nav>
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

export default MobileMenu;
