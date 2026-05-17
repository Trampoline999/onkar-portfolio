import { ArrowRight } from "lucide-react"
import { cn } from "../../lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden text-center font-semibold transition-all duration-300",
        "hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="bg-black dark:bg-white h-2 w-2 rounded-full transition-colors duration-300 group-hover:bg-white dark:group-hover:bg-black shrink-0"></div>
        <span className="inline-block transition-colors duration-300">
          {children}
        </span>
        <div className="w-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center shrink-0">
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
        </div>
      </div>
    </button>
  )
}
