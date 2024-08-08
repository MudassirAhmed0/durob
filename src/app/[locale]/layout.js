import "swiper/css";
import "../globals.css";
import "swiper/css/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";

export const metadata = getStaticMetaData({
  title: "Jeddah International College || Home Page",
  description:
    "tart your educational journey with us & let us guide you towards your success path.",
  isRobotFollow: false
});

export default async function LocaleLayout({ children, params: { locale } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
