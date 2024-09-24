import EasyOrderSteps from '@/shared/sections/easy-order-steps';
import CanvasPrintingVariation from '@/shared/sections/canvas-printing-variation';
import FeatureBanner from '@/shared/sections/FeatureBanner';
import ProductPecommendation from '@/shared/sections/product-recommendation';
import PrintServices from '@/modules/personalize-print/print-services';
import ChooseUs from '@/shared/sections/choose-us';
import ClientsMvp from '@/shared/sections/ClientsMvp';
import DiscountedProductDetails from '@/modules/other-print/DiscountedProductDetails';

const OthersPrints = () => {
  return (
    <>
      <EasyOrderSteps />
      <DiscountedProductDetails />
      <CanvasPrintingVariation />
      <FeatureBanner />
      <ProductPecommendation />
      <PrintServices />
      <ChooseUs />
      <ClientsMvp />
    </>
  );
};

export default OthersPrints;
