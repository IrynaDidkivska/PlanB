import { useMediaQueries } from '@/hooks';

export default function DottedLine() {
  const { isOnMobile, isOnTablet } = useMediaQueries();

  const totalElements = isOnMobile ? 7 : isOnTablet ? 16 : 25;

  return (
    <div className="mt-4 flex gap-[23px]">
      {[...Array(totalElements)].map((_, index) => (
        <div key={index} className="w-[24px] h-[1px] bg-stone-900"></div>
      ))}
    </div>
  );
}
