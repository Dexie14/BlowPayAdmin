import InputField from "../input/InputField";
import Container from "../layout/Container";
import PageLayout from "../layout/PageLayout";
import { Button } from "../ui/button";
import PageTitle from "../ui/PageTitle";
import NameTag from "./NameTag";

const ApiChanges = () => {
  return (
    <div>
      <Container>
        <PageTitle
          title="API Configuration - Webhooks"
          subTitle="You can Manage all your Team members here "
        />
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="API Configuration . Live Mode" />

          <section className="my-4">
            <div className="flex justify-between items-center">
              <InputField
                className="w-[48%]"
                label="Live secret Key"
                placeholder="* * * * * * * * * * * * * * * * * * * * *"
                name="secret"
                type="text"
              />
              <InputField
                className="w-[48%]"
                label="Live Public Key"
                placeholder="pk_live_6d9890ffed0da740a93fe2a22ab2you@email.com"
                name="lastname"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center">
              <InputField
                className="w-[48%]"
                label="Live Callback URL"
                placeholder="https://example.com"
                name="lastname"
                type="text"
              />
              <InputField
                className="w-[48%]"
                label="Live Webhook URL"
                placeholder="pk_live_6d9890ffed0da740a93fe2a22ab2de70dfecad5a"
                name="lastname"
                type="text"
              />
            </div>

            <Button className="bg-buttonColor outline-none  text-blowText font-normal text-lg h-[48px] w-[204px] rounded-[6px] mt-6">
              Save changes
            </Button>
          </section>
        </PageLayout>
      </Container>
    </div>
  );
};

export default ApiChanges;
