import { EditIcon, ResetIcon } from "@/assets/svgComp/General";
import InputField from "../input/InputField";

const Tier1 = () => {
  return (
    <section>
      <div className="flex w-full gap-12 items-center">
        <InputField
           className="w-8/12"
          label="Legal First Name"
          placeholder="Enter Legal First Name"
          name="firstname"
          type="text"
        />
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex gap-12 items-center">
        <InputField
           className="w-8/12"
          label="Legal Last Name"
          placeholder="Enter Legal Last Name"
          name="lastname"
          type="text"
        />
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex  gap-12 items-center">
        <InputField
        className="w-8/12"
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="text"
        />
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex gap-12 items-center">
        <InputField
           className="w-8/12"
          label="Phone number"
          placeholder="Enter phone number"
          name="number"
          type="text"
        />
        <aside className="flex gap-2 items-center">
          <EditIcon />
          <ResetIcon />
        </aside>
      </div>
      <div className="flex gap-12 items-center">
        <InputField
           className="w-8/12"
          label="Date of Birth"
          placeholder="dd-mm-yyyy"
          name="dob"
          type="date"
        />
        
      </div>
    </section>
  );
};

export default Tier1;
