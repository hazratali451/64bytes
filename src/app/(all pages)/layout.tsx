
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
            < >
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </>
    );
}
