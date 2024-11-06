interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <div className="flex flex-col px-8 h-[40px] min-h-[40px] max-h-[40px] justify-center">
      <p className="text-[14px] font-normal">{text}</p>
    </div>
  );
};
