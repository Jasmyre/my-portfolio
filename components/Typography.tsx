import { cn } from "@/lib/utils";
import React from "react";

interface Props<T> extends React.HTMLAttributes<T> {
  children?: React.ReactNode;
  className?: string;
}

export const TypoH1 = ({
  children,
  className = "",
  ...props
}: Props<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const TypoH2 = ({
  children,
  className = "",
  ...props
}: Props<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const TypoH3 = ({
  children,
  className = "",
  ...props
}: Props<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const TypoH4 = ({
  children,
  className = "",
  ...props
}: Props<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export const TypoP = ({
  children,
  className = "",
  ...props
}: Props<HTMLParagraphElement>) => {
  return (
    <p
      className={cn("leading-7", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export const TypoBlackQoute = ({
  children,
  className = "",
  ...props
}: Props<HTMLParagraphElement>) => {
  return (
    <p className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </p>
  );
};

export const TypoTableRow = ({
  children,
  className = "",
  ...props
}: Props<HTMLTableRowElement>) => {
  return (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props}>
      {children}
    </tr>
  );
};

export const TypoTableHeader = ({
  children,
  className = "",
  ...props
}: React.JSX.IntrinsicElements["th"]) => {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};

export const TypoTableData = ({
  children,
  className = "",
  ...props
}: React.JSX.IntrinsicElements["td"]) => {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const TypoUl = ({
  children,
  className = "",
  ...props
}: Props<HTMLUListElement>) => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  );
};

export const TypoInlineCode = ({
  children,
  className = "",
  ...props
}: Props<HTMLPreElement>) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
};

export const TypoLead = ({
  children,
  className = "",
  ...props
}: Props<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
};

export const TypoLarge = ({
  children,
  className = "",
  ...props
}: Props<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </p>
  );
};

export const TypoSmall = ({
  children,
  className = "",
  ...props
}: Props<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-sm font-medium leading-none", className)} {...props}>
      {children}
    </p>
  );
};

export const TypoMuted = ({
  children,
  className = "",
  ...props
}: Props<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
};
