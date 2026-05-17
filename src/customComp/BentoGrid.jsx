import { cn } from "../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(18rem,_auto)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  eyebrow,
  title,
  titleClassName,
  description,
  cta,
  onCtaClick,
  header,
  footer,
  innerClassName,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl md:rounded-4xl text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group",
        className,
      )}
    >
      {header ? <div className="relative shrink-0">{header}</div> : null}

      <div className={cn("relative flex min-h-0 flex-1 flex-col gap-3 p-6 sm:p-7", innerClassName)}>
        {children}
        {eyebrow ? (
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            {eyebrow}
          </p>
        ) : null}

        <div className="space-y-3 relative z-10">
          {title ? (
            <h3
              className={cn(
                "font-bricolage text-xl font-semibold leading-tight sm:text-xl md:text-2xl lg:text-3xl text-zinc-800 dark:text-zinc-100",
                titleClassName,
              )}
            >
              {title}
            </h3>
          ) : null}
          {description ? (
            <p className="font-sans max-w-[52ch] text-gray-600 dark:text-gray-200 text-xs leading-normal sm:text-sm lg:text-base">
              {description}
            </p>
          ) : null}
        </div>

        {(cta || footer) && (
          <div className="mt-auto flex items-end gap-4 relative z-10">
            {footer ? <div className="min-w-0">{footer}</div> : null}

            {cta ? (
              <button
                type="button"
                onClick={onCtaClick}
                className={cn(
                  "ml-auto inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold",
                  "bg-foreground text-background shadow-sm transition",
                  "hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                {cta}
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

