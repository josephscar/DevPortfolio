import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn-sci-fi w-full md:w-auto disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 flex gap-2",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-accent-red text-accent-red hover:bg-accent-red hover:text-white",
        outline: "",
        secondary: "border-border text-foreground hover:bg-border",
        ghost: "border-transparent text-foreground hover:border-accent-cyan",
        link: "underline-offset-4 hover:underline border-none hover:bg-transparent",
      },
      size: {
        default: "",
        sm: "px-2 py-1 text-[10px]",
        lg: "px-8 py-3 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
