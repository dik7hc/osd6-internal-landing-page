import Image from "next/image";
import Link from "next/link";

const Header = ({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>) => {
    return (
        <div className="sticky top-0 z-50 w-screen bg-background shadow-sm">
            <HeaderBg />
            <header className="relative mx-auto max-w-7xl bg-background ">

                <div className="flex h-5 w-full flex-row items-center justify-between gap-4 px-4 sm:px-6 md:h-14 lg:px-8" >
                    {/* <Button variant="ghost" size="icon" className="size-9 md:hidden">
                        <Menu />
                    </Button> */}
                    <div className="flex items-center">
                        <Image
                            width={120}
                            height={80}
                            src="/svg/logo.svg"
                            alt="Logo"
                            quality={20}
                            className="-ml-7 scale-75" //-ml-7
                        />
                        {children}
                    </div>
                    <Link href={"/"}>
                        <Image
                            width={144}
                            height={96}
                            src="/images/bosch_logo_de.svg"
                            alt="Logo"
                            quality={20}
                            className="scale-75"
                        />
                    </Link>
                    {/* <Divider orientation="vertical" className="bg-[#7cb305] h-8" /> */}

                </div>

            </header>
        </div>

    )
}

const HeaderBg = () => {
    return (<div
        className=" h-2 w-full bg-[url('/images/header-cover.svg')] bg-cover bg-center bg-no-repeat"
    />)
}

export default Header