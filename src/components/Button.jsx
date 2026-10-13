import React from "react";
import { Link } from "react-router-dom";

/**
 * Neo-Brutalist Button Component
 * Supports internal router links, external links with security attributes, and standard button clicks.
 */
export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  to,
  onClick,
  external = false,
  className = "",
  type = "button",
  ariaLabel,
  disabled = false,
  ...props
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === "sm" ? "btn-sm" : "";
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  // Internal React Router navigation
  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel} {...props}>
        {children}
      </Link>
    );
  }

  // External or hash links
  if (href) {
    const isAnchor = href.startsWith("#") || href.startsWith("mailto:");
    const targetAttrs = external || (!isAnchor && !href.startsWith("/"))
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...targetAttrs}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
