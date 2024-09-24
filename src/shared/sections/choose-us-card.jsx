

export default function ChooseUsCard ({ icon, title, subtitle, description }) {
    return (
      <div className="bg-white p-7  rounded-3xl shadow-md text-center flex flex-col items-center w-[490px]">
        <div className="text-4xl mb-4"><img src={icon} alt="" /></div>
        <p className="text-gray-500 font-medium">{subtitle}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-black-500 font-medium mt-4">{description}</p>
      </div>
    );
  };
  