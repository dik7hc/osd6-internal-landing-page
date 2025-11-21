import Footer from '@/components/footer';
import ServicePlanningHeader from '@/components/header-with-navbar.tsx';

export default function ServicePlanningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
      <ServicePlanningHeader />
      {children}
      <Footer />
    </>
  )
}
