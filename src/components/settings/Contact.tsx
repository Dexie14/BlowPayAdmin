import InputField from "../input/InputField";
import Container from "../layout/Container";
import PageLayout from "../layout/PageLayout";
import { Button } from "../ui/button";
import PageTitle from "../ui/PageTitle";
import NameTag from "./NameTag";

const Contact = () => {
  return (
    <div>
      <Container>
        <PageTitle
          title="Contact"
          subTitle="As soon as a dispute (Chargeback or fraud claim) is raised for a transaction or more support is required, customer’s can reach out to you via this email "
        />
        <PageLayout className="px-12 py-3">
          <NameTag nameTitle="Emails" />

          <section className="my-4">
            <div className="flex justify-between items-center">
              <InputField
                className="w-[48%]"
                label="Dispute emails"
                placeholder="you@email.com"
                name="lastname"
                type="text"
              />
              <InputField
                className="w-[48%]"
                label="Support Emails"
                placeholder="you@email.com"
                name="lastname"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center">
              <InputField
                className="w-[48%]"
                label="General Email"
                placeholder="you@email.com"
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

export default Contact;
