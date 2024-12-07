type Props = {
  params: Promise<{ domain: string }>;
};

export default async function DomainPage({ params }: Props) {
  const domain = (await params).domain;
  return <div className="">DomainPage for {domain}</div>;
}
