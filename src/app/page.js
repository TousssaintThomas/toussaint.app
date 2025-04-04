import Image from 'next/image'
import PageHeader from '@/ui/page-header/PageHeader'
import RoleSummary from '@/ui/role-summary/RoleSummary'
import WorkExp from '@/ui/work-exp/WorkExp'

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <PageHeader></PageHeader>
            <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <RoleSummary></RoleSummary>
                <WorkExp></WorkExp>
            </main>
        </div>
    )
}
