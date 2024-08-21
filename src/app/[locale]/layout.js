import "swiper/css";
import "../globals.css";
import "swiper/css/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = getStaticMetaData({
  title: "Durob || Home Page",
  description: "Experience the Future of Logistics",
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
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
