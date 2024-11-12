import { MessageIcon } from "@/assets/svgComp/SidebarIcons";
import TopCard from "@/components/dashboard/TopCard";
import Container from "@/components/layout/Container";
import PageLayout from "@/components/layout/PageLayout";
import PageTitle from "@/components/ui/PageTitle";

const Messages = () => {
  return (
    <div>
      <TopCard text="Message" icon={<MessageIcon />} />
      <Container>
        <PageTitle
          title="Inbox"
          subTitle="Gives a detailed overview on the List of Users in the system and htheir respective KYC"
        />
        <PageLayout>hey</PageLayout>
      </Container>
    </div>
  );
};

export default Messages;
