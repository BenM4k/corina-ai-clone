import { onGetAllAccountDomains } from "@/actions/settings";
import InfoBar from "@/components/info-bar";
import ConversationMenu from "@/components/conversations";
import Messenger from "@/components/conversations/messenger";
import { Separator } from "@/components/ui/separator";

type Props = {};

const ConversationPage = async (props: Props) => {
  const domains = await onGetAllAccountDomains();
  return (
    <div className="w-full h-full flex">
      <ConversationMenu domains={domains?.domains} />

      <Separator orientation="vertical" />
      <div className="w-full flex flex-col">
        <div className="px-5">
          <InfoBar />
        </div>
        <Messenger />
      </div>
    </div>
  );
};

export default ConversationPage;
