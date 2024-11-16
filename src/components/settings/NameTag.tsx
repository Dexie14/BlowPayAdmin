const NameTag = ({ nameTitle }: { nameTitle: string }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-6 w-2 bg-buttonColor rounded-[6px]" />
      <p className="font-semibold">{nameTitle}</p>
    </div>
  );
};

export default NameTag;
