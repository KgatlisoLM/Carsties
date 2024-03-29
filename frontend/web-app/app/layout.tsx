import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./nav/NavBar";
import ToasterProvider from "./providers/ToasterProvider";
import SignalRProvider from "./providers/SignalRProvider";
import { getCurrentUser } from "./actions/authActions";


export const metadata: Metadata = {
  title: "Car Zone Auction",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <ToasterProvider/>
         <NavBar/>
         <SignalRProvider user={user}>
              {children}
         </SignalRProvider>
        </body>
    </html>
  );
}
