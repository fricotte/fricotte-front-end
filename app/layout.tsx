import "./globals.css";
import Header from "@/components/common/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Fricotte",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" text-foreground bg-gray-100">
        <main className="min-h-screen flex flex-col items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
