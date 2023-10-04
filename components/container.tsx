import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-6 tablet:px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
