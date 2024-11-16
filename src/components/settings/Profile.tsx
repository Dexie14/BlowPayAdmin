import { useState } from "react";
import InputField from "../input/InputField";
import PasswordInput from "../input/PasswordInput";
import Container from "../layout/Container";
import PageLayout from "../layout/PageLayout";
import { Button } from "../ui/button";
import PageTitle from "../ui/PageTitle";
import NameTag from "./NameTag";
import override from "@/assets/images/override.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  const [changePassword, setChangePassword] = useState(false);
  return (
    <div>
      <Container>
        <PageTitle
          title="Profile and visibility"
          subTitle="Manage your personal information, and control which information other people see and may access"
        />
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="Personal Information" />
          <div className="my-2">
            <img src={override} alt="override" className="w-[56px] h-[56px]" />
          </div>
          <section>
            <div className="flex justify-between items-center">
              <InputField
                className="w-[48%]"
                label="Admin Fullname"
                placeholder="Legal Surname and Last Name"
                name="lastname"
                type="text"
              />
              <InputField
                className="w-[48%]"
                label="Email"
                placeholder="you@email.com"
                name="lastname"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center">
              <InputField
                className="w-[48%]"
                label="Time Zone"
                placeholder="WAT+1 (UTC+2:00)"
                name="lastname"
                type="text"
              />
              <div className="w-[48%]">
                <Select defaultValue="ngn">
                  <p className="text-[14px] font-semibold text-blowText">
                    Default Currency
                  </p>
                  <SelectTrigger className=" rounded-[15px] h-[53px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-inputBorder">
                    <SelectValue placeholder="Naira (NGN)" />
                  </SelectTrigger>
                  <SelectContent className="text-sm">
                    <SelectGroup>
                      <SelectLabel className="border-b border-lightGray">
                        User
                      </SelectLabel>
                      <SelectItem value="ngn">Naira (NGN)</SelectItem>
                      <SelectItem value="visa">Blow </SelectItem>
                      <SelectItem value="master">Blow Money</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-[48%]">
              <Select defaultValue="">
                <p className="text-[14px] font-semibold text-blowText">
                  Default Language
                </p>
                <SelectTrigger className=" rounded-[15px] h-[53px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-inputBorder">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent className="text-sm">
                  <SelectGroup>
                    <SelectLabel className="border-b border-lightGray">
                      Language
                    </SelectLabel>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="usa">English </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-buttonColor outline-none  text-blowText font-normal text-lg h-[48px] w-[204px] rounded-[6px] mt-6">
              Save changes
            </Button>
          </section>
        </PageLayout>
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="Authentication" />

          <section>
            {changePassword && (
              <div className=" my-5 flex justify-between items-center">
                <PasswordInput
                  className="w-[48%]"
                  passswordClassname="!rounded-[15px]"
                  name="password"
                  label="Current Password"
                  placeholder="New Password"
                />
                <PasswordInput
                  className="w-[48%]"
                  name="password"
                  passswordClassname="!rounded-[15px]"
                  label="Current Password"
                  placeholder="New Password"
                />
              </div>
            )}
            {changePassword ? (
              <Button className="bg-buttonColor outline-none  text-blowText font-normal text-lg h-[48px] w-[204px] rounded-[6px] mt-6">
                Save changes
              </Button>
            ) : (
              <Button
                onClick={() => setChangePassword(true)}
                className="bg-buttonColor outline-none  text-blowText font-normal text-lg h-[48px] w-[204px] rounded-[6px] mt-6"
              >
                Change Password
              </Button>
            )}

            <h4 className="mt-4 text-xl font-semibold">
              Two- step verification
            </h4>
            <p className="text-blueGray">
              keep your account extra with a second login step{" "}
              <span className="text-blowSecondary">
                Manage two-step verification
              </span>
            </p>
          </section>
        </PageLayout>
      </Container>
    </div>
  );
};

export default Profile;
