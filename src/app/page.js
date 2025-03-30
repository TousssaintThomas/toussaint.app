import Image from "next/image";
import PageHeader from "@/ui/page-header/PageHeader";
import WorkExp from '@/ui/work-exp/WorkExp';

export default function Home() {
  return (
    <div className="">
        <PageHeader></PageHeader>
        <WorkExp></WorkExp>
    </div>
  );
}
