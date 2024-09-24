import uploadIcon from '../../assets/inbox 1.svg';
import MaterialIcon from '../../assets/processing 1.svg';
import verifyicon from "../../assets/received 1.svg";


const StepCard = ({ icon, title, description }) => {
  return (
    <div className="border rounded-3xl  p-10 text-center w-[90%]">
      <img src={icon} alt={title} className="mx-auto mb-4 w-30 h-30" />
      <h3 className="text-4xl font-bold">{title}</h3>
      {/* Set the description to full width and restrict it to 4 lines with appropriate line height */}
      <p className="text-gray-500 text-xl mt-4 ">
        {description}
      </p>
    </div>
  );
};

const EasyOrderSteps = () => {
  return (
    <div className="px-4 py-10 lg:px-20">
      <div className="flex justify-center mb-8">
        <h1 className="text-center lg:text-5xl font-bold text-black-600 lg:w-[50%]">
          Three easy steps to ordering prints from veteranmedias
        </h1>
      </div>
      <div className=" mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-20">
          <StepCard
            icon={uploadIcon}
            title="Upload"
            description="Lorem ipsum dolor  sit amet consectetur. Condimentum turpis pellentesque tincidunt turpis pellentesque tincidunt turpis pellentesque tincidunt."
          />
          <StepCard
            icon={MaterialIcon}
            title="Material and Size"
            description="Lorem ipsum dolor sit amet consectetur. Condimentum turpis pellentesque tincidunt turpis pellentesque tincidunt turpis pellentesque tincidunt."
          />
          <StepCard
            icon={verifyicon}
            title="Verify and Order"
            description="Lorem ipsum dolor sit amet consectetur. Condimentum turpis pellentesque tincidunt turpis pellentesque tincidunt turpis pellentesque tincidunt."
          />
        </div>
      </div>
    </div>
  );
};

export default EasyOrderSteps;