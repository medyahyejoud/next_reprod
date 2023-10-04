import type { VariantProps } from "cva";
import { cva } from "cva";

const text = cva(["text-meduim-gray", "dark:text-gray"], {
  variants: {
    variant: {
      spaced: ["text-xs", "uppercase", "tracking-widest"],
      tiny: ["text-sm", "tracking-wide", "text-black", "dark:text-white"],
      normal: ["text-base", "tracking-wide", "tablet:text-lg"],
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

type TextVariants = VariantProps<typeof text>;

type TextProps = {
  children: React.ReactNode;
  className?: string;
} & TextVariants

function Text({ children, className, variant }: TextProps) {
  return <p className={text({ variant, className })}>{children}</p>;
}

export default Text;
