import "../../styles/tailwind.css";

export const metadata = {
  title: "esg intelligence platform",
  description: "sky dust admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
