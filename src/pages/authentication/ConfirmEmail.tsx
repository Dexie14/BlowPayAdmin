import AuthTitle from "@/components/auth/AuthTitle";

const ConfirmEmail = () => {
  return (
    <section className="flex items-center h-full ">
      <div className="">
        <AuthTitle title="Please verify your email" />

        <p className="my-7 font-normal text-disabledText">
          Once you verify your email address, you and your team can get started
          in Blow Pay
        </p>
        <p className="text-disabledText">
          Didn’t receive an email?{" "}
          <span className="font-bold text-blowSecondary opacity-100 cursor-pointer">
            Resend Email
          </span>
        </p>
      </div>
    </section>
  );
};

export default ConfirmEmail;
