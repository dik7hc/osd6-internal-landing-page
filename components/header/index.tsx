import Image from "next/image";
import Link from "next/link";

const Header = ({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>) => {
    return (
        <div className="sticky top-0 z-50 bg-background shadow-sm">
            <HeaderBg />
            <header className="relative mx-auto max-w-7xl bg-background ">

                <div className="flex h-5 w-full flex-row items-center justify-between gap-4 px-4 sm:px-6 md:h-14 lg:px-8" >
                    {/* <Button variant="ghost" size="icon" className="size-9 md:hidden">
                        <Menu />
                    </Button> */}
                    <div className="flex items-center">
                        <img
                            width={55}
                            height={40}
                            src="/svg/logo.svg"
                            alt="Logo"
                            // quality={20}
                            className=" scale-75" //-ml-7
                        />
                        {children}
                    </div>
                    <Link href={"/"}>
                        <img
                            width={144}
                            height={96}
                            src="/images/bosch_logo_de.svg"
                            alt="Logo"
                            className="scale-75"
                        />
                    </Link>
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