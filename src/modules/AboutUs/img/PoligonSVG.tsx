export const PolygonSVG = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  switch (name) {
    case 'polygon':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          className={className}
        >
          <path d="M7 8L13.9282 0.5H0.0717969L7 8Z" fill="#FFF9F7" />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
