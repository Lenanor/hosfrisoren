import Link from "next/link";

function SmartLink({ href, children, className, ...rest }) {
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
        <span className="sr-only">Extern länk, öppnas i nytt fönster</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export default SmartLink;
