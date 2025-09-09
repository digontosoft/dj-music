import { Button } from "../ui/button";

const DjnateButton = () => {
  return (
    <Button
      className="bg-[#05070A] border border-slate-600 rounded-full text-lg font-sans font-medium text-blue-700 flex items-center justify-center px-12 py-6"
      style={{
        boxShadow:
          "inset 0 0 15px rgba(255,255,255,0.2), inset 0 4px 20px rgba(0,0,0,0.6)",
      }}
    >
      Book A Call With Nate
    </Button>
  );
};

export default DjnateButton;
