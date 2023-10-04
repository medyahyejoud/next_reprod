import { cn } from "@/lib/utils";

import Heading from "./heading";

type ButttonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className = "", ...props }: ButttonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "flex items-center justify-center rounded-small bg-primary px-10 py-3 leading-snug tracking-wide text-white ring-offset-light-gray hover:bg-primary-600 focus:bg-primary-600 focus:ring focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black desktop:px-12",
        className,
      )}
    >
      <Heading variant="h4">{children}</Heading>
    </button>
  );
}

export default Button;
