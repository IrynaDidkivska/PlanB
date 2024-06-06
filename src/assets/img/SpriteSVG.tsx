import { twMerge } from 'tailwind-merge';

export const SpriteSVG = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  switch (name) {
    case 'marker':
      return (
        <svg
          fill="none"
          className={twMerge('fill-current stroke-current', className)}
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#marker-clip)" fill="currentColor">
            <path d="M8 4a2.667 2.667 0 1 0 0 5.333A2.667 2.667 0 0 0 8 4Zm0 4a1.333 1.333 0 1 1 0-2.667A1.333 1.333 0 0 1 8 8Z" />
            <path d="M8 16a3.513 3.513 0 0 1-2.874-1.467c-2.54-3.504-3.83-6.139-3.83-7.831a6.703 6.703 0 0 1 13.408 0c0 1.692-1.29 4.327-3.83 7.831A3.514 3.514 0 0 1 8 16ZM8 1.454a5.255 5.255 0 0 0-5.25 5.25c0 1.34 1.263 3.817 3.554 6.977a2.097 2.097 0 0 0 3.393 0c2.29-3.16 3.553-5.638 3.553-6.978A5.255 5.255 0 0 0 8 1.454Z" />
          </g>
          <defs>
            <clipPath id="marker-clip">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'phone_call':
      return (
        <svg
          className={twMerge('fill-current stroke-current', className)}
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#phone-call-clip)">
            <path
              d="M8.666.667A.667.667 0 0 1 9.333 0 6.674 6.674 0 0 1 16 6.667a.667.667 0 1 1-1.334 0 5.34 5.34 0 0 0-5.333-5.334.667.667 0 0 1-.667-.666ZM9.333 4A2.667 2.667 0 0 1 12 6.667a.667.667 0 0 0 1.333 0 4.004 4.004 0 0 0-4-4 .667.667 0 1 0 0 1.333Zm6.062 7.16a2.067 2.067 0 0 1 0 2.918l-.606.7C9.329 20.004-3.958 6.72 1.189 1.243l.766-.667A2.054 2.054 0 0 1 4.84.604c.02.02 1.256 1.625 1.256 1.625a2.067 2.067 0 0 1-.005 2.855l-.772.97a8.52 8.52 0 0 0 4.62 4.63l.977-.776a2.067 2.067 0 0 1 2.854-.004s1.604 1.235 1.625 1.255Zm-.917.969s-1.595-1.228-1.616-1.248a.733.733 0 0 0-1.033 0 302.09 302.09 0 0 1-1.363 1.09.667.667 0 0 1-.652.101A10.006 10.006 0 0 1 3.934 6.2a.667.667 0 0 1 .096-.667S5.1 4.188 5.12 4.171a.733.733 0 0 0 0-1.033c-.022-.02-1.249-1.617-1.249-1.617a.733.733 0 0 0-1.007.026l-.766.667C-1.664 6.737 9.85 17.612 13.814 13.867l.607-.7a.747.747 0 0 0 .057-1.038Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="phone-call-clip">
              <path fill="transparent" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'facebook':
      return (
        <svg
          viewBox="0 0 32 32"
          className={twMerge(' stroke-current', className)}
          fill="currentColor"
        >
          <path d="M9.991 12.807a2.312 2.312 0 0 0 2.312-2.312C12.303 6.931 15.235 4 18.798 4h3.303c.547 0 .991.444.991.991v4.404a.991.991 0 0 1-.991.991h-3.303a.11.11 0 0 0-.11.11A2.312 2.312 0 0 0 21 12.808h1.101a.993.993 0 0 1 .961 1.231l-1.101 4.404a.99.99 0 0 1-.961.751 2.312 2.312 0 0 0-2.312 2.312v5.505a.991.991 0 0 1-.991.991h-4.404a.991.991 0 0 1-.991-.991v-5.505a2.312 2.312 0 0 0-2.312-2.312.991.991 0 0 1-.991-.991v-4.404c0-.547.444-.991.991-.991zM21.11 7.193a1.21 1.21 0 0 0-1.211-1.211h-1.101c-2.476 0-4.514 2.038-4.514 4.514v3.303a.991.991 0 0 1-.991.991h-1.101a1.21 1.21 0 1 0 0 2.422h1.101c.547 0 .991.444.991.991v6.605a1.21 1.21 0 1 0 2.422 0v-6.605c0-.547.444-.991.991-.991h1.583a1.211 1.211 0 1 0 0-2.422h-1.583a.991.991 0 0 1-.991-.991v-3.303c0-1.147.945-2.092 2.092-2.092h1.101a1.21 1.21 0 0 0 1.211-1.211z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          viewBox="0 0 32 32"
          className={twMerge('stroke-current', className)}
          fill="currentColor"
          stroke="none"
        >
          <path d="M28 10.495A6.498 6.498 0 0 0 21.505 4H10.496a6.498 6.498 0 0 0-6.495 6.495v11.009a6.498 6.498 0 0 0 6.495 6.495h11.009A6.498 6.498 0 0 0 28 21.504V10.495zm-1.982 0v11.009a4.516 4.516 0 0 1-4.514 4.514H10.495a4.516 4.516 0 0 1-4.514-4.514V10.495a4.516 4.516 0 0 1 4.514-4.514h11.009a4.516 4.516 0 0 1 4.514 4.514zm-4.634 4.666a5.406 5.406 0 0 0-5.337-4.603c-2.959 0-5.395 2.435-5.395 5.395s2.435 5.395 5.395 5.395c2.959 0 5.395-2.435 5.395-5.395 0-.265-.019-.53-.058-.792zm-1.96.291a3.43 3.43 0 0 1-3.377 3.914 3.43 3.43 0 0 1-3.413-3.413 3.43 3.43 0 0 1 3.914-3.377 3.423 3.423 0 0 1 2.876 2.876zm2.631-6.498a.991.991 0 1 1 0 1.983.991.991 0 0 1 0-1.983z" />
        </svg>
      );
    case 'tic_tok':
      return (
        <svg
          viewBox="0 0 32 32"
          className={twMerge(' stroke-current', className)}
          fill="currentColor"
        >
          <path d="M21.119 14.435v5.825c0 3.869-2.179 8.166-7.562 8.166-4.151-.019-7.556-3.635-7.556-8.023l.003-.209c.122-4.234 3.451-7.646 7.458-7.646.371 0 .741.029 1.108.087.459.073.799.491.799.982v3.781c0 .308-.135.598-.366.786s-.53.251-.812.173a2.081 2.081 0 0 0-.555-.076c-1.16 0-2.126.981-2.173 2.206l-.005.15c0 1.087.846 1.982 1.874 1.982l.416.001c1.023 0 1.865-.89 1.865-1.972l-.01-.245V5.418c0-.548.421-.992.939-.992h3.538c.461 0 .854.354.927.835.254 1.673.737 2.723 1.461 3.38.73.662 1.674.917 2.742 1.098.456.077.791.493.791.98v3.793c0 .277-.11.542-.303.729s-.451.283-.712.26a11.113 11.113 0 0 1-3.866-1.065zM19.306 6.41H17.48v13.957c.006.093.01.186.01.28 0 2.17-1.69 3.956-3.743 3.956-.072 0-.144-.002-.216-.007a2.655 2.655 0 0 1-.2.006c-2.059 0-3.752-1.791-3.752-3.966 0-.084.003-.17.006-.231.086-2.231 1.809-4.028 3.904-4.107v-1.767l-.03-.001c-2.999 0-5.491 2.555-5.582 5.718l-.002.153c0 3.302 2.564 6.024 5.683 6.038 4.058 0 5.68-3.262 5.68-6.181v-7.492c0-.362.187-.696.489-.87s.667-.161.956.035a9.442 9.442 0 0 0 3.437 1.445v-1.837c-1.107-.259-2.079-.669-2.878-1.393-.863-.783-1.547-1.938-1.938-3.736z" />
        </svg>
      );

    case 'chevron':
      return (
        <svg
          viewBox="0 0 32 32"
          className={twMerge(' stroke-current', className)}
          fill="currentColor"
        >
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.667"
            stroke="currentColor"
            d="m24 20-8-8-8 8"
          />
        </svg>
      );

    case 'close':
      return (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full fill-current stroke-current"
          fill="currentColor"
        >
          <path d="m16 18.829 7.071 7.071a2.001 2.001 0 0 0 2.83-2.83l-7.073-7.071L25.9 8.928a1.986 1.986 0 0 0 .585-1.414 2.004 2.004 0 0 0-.586-1.414 1.986 1.986 0 0 0-1.414-.585 2.008 2.008 0 0 0-1.414.586l-7.069 7.071-7.071-7.071a2 2 0 1 0-2.829 2.827L13.175 16l-7.072 7.072a2.007 2.007 0 0 0-.61 1.421 2.017 2.017 0 0 0 .586 1.432 2.004 2.004 0 0 0 2.204.423c.244-.105.465-.257.649-.449l7.069-7.069z" />
        </svg>
      );
    case 'burger_menu':
      return (
        <svg
          className={twMerge('fill-current stroke-current', className)}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <defs>
            <clipPath id="burger-menu-clip">
              <path fill="currentColor" fillOpacity="0" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#burger-menu-clip)">
            <path
              d="M5 10h30M5 20h30M5 30h30"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
