export type TitleProps = {
  title?: string;
  subTitle?: string;
};

const AuthTitle = ({ title, subTitle }: TitleProps) => {
  return (
    <div>
      <h1 className="sm:text-3xl text-xl font-bold">{title}</h1>
      <p className="font-normal text-sm sm:text-base text-disabledText">{subTitle}</p>
    </div>
  );
};

export default AuthTitle;
