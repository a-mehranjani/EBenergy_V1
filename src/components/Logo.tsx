export function Logo({
  className = "h-10 w-auto",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "white";
}) {
  return (
    <img
      src={variant === "white" ? "/ebenergy-logo-white.png" : "/ebenergy-logo-color.png"}
      alt="EBenergy — Sustainable Energy Storage"
      className={className}
    />
  );
}
