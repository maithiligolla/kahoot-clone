const VARIANTS = {
  primary: "bg-[#46178F] text-white hover:bg-[#3a1275]",
  light: "bg-white text-[#46178F] hover:bg-[#F2F2F2]",
  outline: "border-2 border-[#46178F] text-[#46178F] hover:bg-[#46178F] hover:text-white",
};

const SIZES = {
  md: "px-6 py-3",
  sm: "px-5 py-2",
};

// Renders a link when `href` is given, otherwise a real <button>.
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const classes = `inline-block rounded-lg text-center font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1368CE]/50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
