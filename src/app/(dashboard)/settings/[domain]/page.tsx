import { onGetCurrentDomainInfo } from "@/actions/settings";
import BotTrainingForm from "@/components/forms/settings/bot-training";
import SettingsForm from "@/components/forms/settings/form";
import InfoBar from "@/components/info-bar";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ domain: string }>;
};

export default async function DomainPage({ params }: Props) {
  const domainName = (await params).domain;
  const domain = await onGetCurrentDomainInfo(domainName);
  if (!domain) redirect("/dashboard");
  return (
    <>
      <InfoBar />
      <div className="">
        <SettingsForm
          plan={domain.subscription?.plan!}
          chatBot={domain.domains[0].chatBot}
          id={domain.domains[0].id}
          name={domain.domains[0].name}
        />
        <BotTrainingForm id={domain.domains[0].id} />
        {/* <ProductTable
          id={domain.domains[0].id}
          products={domain.domains[0].products || []}
        /> */}
      </div>
    </>
  );
}
