import Footer from '@/components/footer';
import ServicePlanningHeader from './ServicePlanningHeader';

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
