import VehicleScanSection from '@/app/components/vehiclescansection';
import ImmersiveSupervisionBlock from '@/app/components/supervisioninmersivabloque';
import ResidentialPropertyScanSection from '@/app/components/ResidentialPropertyScansection';
import HowMorrisonVisionCanHelp from '@/app/components/morrisonvisionayudar';
import EscaneoPropiedadescomerciales from '@/app/components/EscaneoPropiedadesComerciales';
import Tiendavirtual from '@/app/components/tiendavirtual';
import Caracteristicastours from '@/app/components/caracteristicastours';

export default function Inicio() {
  return (
    <>
      <VehicleScanSection />
      <ImmersiveSupervisionBlock />
      <ResidentialPropertyScanSection />
      <HowMorrisonVisionCanHelp />
      <EscaneoPropiedadescomerciales />
      <Tiendavirtual />
      <Caracteristicastours />
    </>
  );
}
