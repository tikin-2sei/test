import "./globals.css"; // Tailwindのインポート用

export const metadata = {
  title: "Custom Stream Player",
  description: "Alternative YouTube Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-950 text-gray-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
