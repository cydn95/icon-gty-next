import Footer from '@/components/Footer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
