import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Ideal Comm Studio",
  description: "Crafting Bold Brand Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-sans" suppressHydrationWarning={true}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
