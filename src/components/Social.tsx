import { socials } from "@/data/social";
import { cn } from "@/lib/utils";

/**
 * Social links. Previously lived at the repo root outside src/ and was
 * reached from five files via '../../../../Social/Social'.
 */
export default function Social({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group relative flex h-10 w-10 items-center justify-center border border-brass-deep text-ink-muted transition-colors duration-500",
              "hover:border-brass hover:text-brass",
              itemClassName,
            )}
          >
            {/* jade wash rises from the base on hover */}
            <span
              className="absolute inset-0 origin-bottom scale-y-0 bg-jade-deep transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
              aria-hidden="true"
            />
            <Icon className="relative h-[18px] w-[18px]" strokeWidth={1.5} />
          </a>
        </li>
      ))}
    </ul>
  );
}
