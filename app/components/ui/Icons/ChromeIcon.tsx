const ChromeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="200" fill="#4285f4" />
      <path d="M256 200a56 56 0 1 1 0 112 56 56 0 0 1 0-112z" fill="#fff" />
    </svg>
  );
  
  export default ChromeIcon;
  