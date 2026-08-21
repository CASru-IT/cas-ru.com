import { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export default function Button<T extends ElementType = "button">({
  as,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";
  const { children, ...restProps } = props;

  return (
    <div className={`relative w-fit ${className}`}>
      <Component
        {...restProps}
        className="bg-white border-3 font-semibold z-10 inline-block relative w-fit active:top-0.5 active:left-0.5 transition-all"
      >
        <div className="mx-3 my-1 w-fit">{children}</div>
      </Component>
      <div className="w-full h-full absolute bg-[repeating-linear-gradient(118deg,#000000,#000000_2px,#FFFFFF_2px,#FFFFFF_4px)] z-0 top-0.5 left-0.5" />
    </div>
  );
}
