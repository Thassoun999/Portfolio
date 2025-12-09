import Navbar from "@/components/Navbar";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create NavBar Component

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
