import InputField from "@/components/input/InputField";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { AdminInvite } from "@/hooks/api/auth/adminInvite";
import { toast } from "sonner";
import { RoleObject, RolesApi } from "@/hooks/api/roles/getRoles";

const TeamInvite = ({
  setOpenInvite,
}: {
  setOpenInvite: (value: boolean) => void;
}) => {
  const [teamEmail, setTeamEmail] = useState<string>("");
  const [selectRole, setSelectedRole] = useState<string>("");

  const { GetRole } = RolesApi();
  const { data, isFetching } = GetRole();

  console.log(teamEmail, selectRole, "team invite");

  const RoleOptions = data?.data;

  const { adminInvite } = AdminInvite();

  const { mutate, isPending } = adminInvite;

  const onSubmit = () => {
    const data = {
      emailAddress: teamEmail,
      role: selectRole,
    };

    // const formData = new FormData();
    // formData.append("emailAddres", teamEmail);
    // formData.append("role", selectRole);

    mutate(data, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        setOpenInvite(false);
      },
      onError: (error: any) => {
        toast.error(error?.message || "Error Sending Invite");
        setOpenInvite(false);
      },
    });
  };

  return (
    <div>
      <div>
        <p className="text-[14px] font-semibold text-blowText">Email</p>
        <InputField
          onChange={(e) => setTeamEmail(e.target.value)}
          placeholder="you@email.com"
          name="email"
          type="email"
        />
      </div>
      <Select onValueChange={setSelectedRole}>
        <p className="text-[14px] font-semibold text-blowText">Choose Role</p>
        <SelectTrigger
          dropDown
          className="w-full rounded-[10px] h-[50px] mb-4 mt-1 font-normal text-sm text-blowText placeholder:text-placeHolderText bg-white border border-borderOutline"
        >
          <SelectValue placeholder="Select Role" />
        </SelectTrigger>
        <SelectContent className="text-sm">
          <SelectGroup>
            <SelectLabel className="border-b border-lightGray">
              Role
            </SelectLabel>
            {isFetching ? (
              <p>Fetching..</p>
            ) : (
              RoleOptions?.map((role: RoleObject) => (
                <SelectItem key={role.id} value={role.id}>
                  {role.name}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        onClick={onSubmit}
        className="bg-blowText text-white text-sm cursor-pointer font-normal h-[50px] w-full rounded-[20px] my-4"
      >
        {isPending ? "Inviting...." : "Invite Team member"}
      </Button>
    </div>
  );
};

export default TeamInvite;
