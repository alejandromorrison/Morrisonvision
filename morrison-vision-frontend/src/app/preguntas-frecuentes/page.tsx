import FAQ from '@/app/components/faq';
import Map from '@/app/components/Map';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
            <FAQ />
            <Map />
        </main>
    );
}