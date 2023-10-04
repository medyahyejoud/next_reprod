import type { VariantProps } from "cva";
import { cva } from "cva";

const headingVariants = cva(null, {
  variants: {
    variant: {
      h1: [
        "font-display",
        "text-5xl",
        "font-extrabold",
        "leading-none",
        "tracking-tight",
        "tablet:text-[54px]",
        "desktop:text-[86px]",
      ],
      h2: [
        "font-display",
        "text-2xl",
        "font-bold",
        "leading-tighter",
        "tablet:text-4xl",
        "desktop:text-5xl",
      ],
      h3: [
        "text-base",
        "font-bold",
        "leading-snug",
        "tablet:text-xl",
        "desktop:text-[28px]",
        "desktop:leading-tight",
      ],
      h4: [
        "text-base",
        "font-bold",
        "leading-snug",
        "desktop:text-lg",
        "desktop:leading-snug",
      ],
      h5: [
        "text-xs",
        "uppercase",
        "tracking-widest",
        "tablet:text-sm",
        "desktop:text-base",
      ],
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export type ButtonVariantProps = VariantProps<typeof headingVariants>;

type HeadingProps = {
  children: React.ReactNode;
} & ButtonVariantProps &
  React.HTMLAttributes<HTMLHeadingElement>;

function Heading({ children, className, variant, ...props }: HeadingProps) {
  const Component = variant ?? "h1";

  return (
    <Component className={headingVariants({ variant, className })} {...props}>
      {children}
    </Component>
  );
}

export default Heading;
