import Image from "next/image";
import PageHeader from "@/ui/page-header/PageHeader";
import WorkExp from '@/ui/work-exp/WorkExp';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
        <PageHeader></PageHeader>
        <main>
            <WorkExp></WorkExp>
        </main>
    </div>
  );
}
