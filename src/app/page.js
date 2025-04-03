import Image from 'next/image'
import PageHeader from '@/ui/page-header/PageHeader'
import RoleSummary from '@/ui/role-summary/RoleSummary'
import WorkExp from '@/ui/work-exp/WorkExp'

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <PageHeader></PageHeader>
            <main>
                <RoleSummary></RoleSummary>
                <WorkExp></WorkExp>
            </main>
        </div>
    )
}
