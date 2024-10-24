import AuthTitle from "@/components/auth/AuthTitle";

const DeactivatedAccount = () => {
  return (
    <section className="flex items-center h-full ">
      <div className="">
        <AuthTitle title="Deactivated Account" />

        <p className="my-7 font-normal text-lg text-disabledText">
          Your Account as being deactivated by the Super Admin. Kindly Proceed
          to contact the Admin if you think this might be an error.
        </p>
        <p className="text-disabledText">
          I Don’t Understand?
          <span className="font-bold text-blowSecondary cursor-pointer ml-1">
            Contact Admin
          </span>
        </p>
      </div>
    </section>
  );
};

export default DeactivatedAccount;
