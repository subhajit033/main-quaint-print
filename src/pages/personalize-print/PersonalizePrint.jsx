import EasyOrderSteps from "@/shared/sections/easy-order-steps"
import CanvasPrintingVariation from "@/shared/sections/canvas-printing-variation"
import ProductPecommendation from "@/shared/sections/product-recommendation"
import PrintServices from "@/modules/personalize-print/print-services"
import ChooseUs from "@/shared/sections/choose-us"
import ClientsMvp from "@/shared/sections/ClientsMvp"

const PersonalizePrint = () => {
  return (
    <>
    <EasyOrderSteps />
    <CanvasPrintingVariation />
    <ProductPecommendation />
    <PrintServices />
    <ChooseUs />
    <ClientsMvp />
    </>
  )
}

export default PersonalizePrint