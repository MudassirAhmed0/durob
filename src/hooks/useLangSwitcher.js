import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const useLangSwitcher = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const changeLocale = (newLocale) => {
    // Extract the path segments from the current pathname
    const segments = pathname.split("/").filter(Boolean);

    // Check if the first segment is a locale
    if (segments[0] && segments[0].length === 2) {
      // If it is a locale, replace it with the new locale
      segments[0] = newLocale;
    } else {
      // If there is no locale in the path, prepend the new locale
      segments.unshift(newLocale);
    }

    // Reconstruct the pathname with the new locale
    const newPathname = "/" + segments.join("/");

    // Preserve existing search parameters
    const newSearchParams = searchParams.toString();

    // Navigate to the new locale URL
    router.push(`${newPathname}?${newSearchParams}`);
  };
  return { changeLocale };
};

export default useLangSwitcher;
