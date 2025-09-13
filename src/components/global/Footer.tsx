import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className='bg-[#101010] px-5'>
            <div className='max-w-[1180px] pt-[72px] pb-[88px] mx-auto flex md:flex-row flex-col gap-10 justify-between'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='110'
                    height='110'
                    viewBox='0 0 110 110'
                    fill='none'
                    className='lg:size-[110] size-[88px]'
                >
                    <path
                        d='M34.2583 29.1254C43.5742 30.5432 51.5442 37.3229 51.5442 48.5107C51.5442 60.2914 42.4766 69.2365 30.626 69.2365C18.6841 69.2365 9.61646 60.2914 9.61646 48.5236C9.61646 43.8449 11.1451 39.759 13.2618 36.2403L28.4833 11.4932H45.7692L34.2583 29.1254ZM30.613 42.0791C26.9676 42.0791 24.1716 44.9275 24.1716 48.5107C24.1716 52.0939 26.9676 55.0326 30.613 55.0326C34.2583 55.0326 36.9629 52.1197 36.9629 48.5107C36.9629 44.9147 34.2583 42.0791 30.613 42.0791Z'
                        fill='#F4F2ED'
                    />
                    <path
                        d='M93.2105 58.0358V68.3085H78.8121V58.0358H55.1633V45.9973L78.8121 11.4932H93.2105V44.3347H99.6519V58.0358H93.2105ZM78.8121 44.3347V31.2135L70.2541 44.3347H78.8121Z'
                        fill='#F4F2ED'
                    />
                    <path
                        d='M12.0857 75.5771H20.7614C25.1253 75.5771 28.1434 78.1034 28.1434 81.7382C28.1434 84.1872 27.1897 85.8241 25.661 86.7262C27.5424 87.7316 28.7706 89.4975 28.7706 92.0752C28.7706 95.7873 25.5565 98.4811 20.9181 98.4811H12.0857V75.5771ZM20.7221 81.1195H17.8999V84.0195H20.7352C21.6237 84.0195 22.1724 83.5169 22.1724 82.576C22.1724 81.635 21.6237 81.1195 20.7221 81.1195ZM20.905 89.5362H17.8999V92.9775H20.905C22.0286 92.9775 22.7864 92.3975 22.7864 91.2504C22.7735 90.1032 22.0286 89.5362 20.905 89.5362Z'
                        fill='#F4F2ED'
                    />
                    <path
                        d='M35.2775 88.7241L27.9346 75.5771H34.4281L38.1912 83.0658L41.9802 75.5771H48.4738L41.0918 88.7886V98.494H35.2775V88.7241Z'
                        fill='#F4F2ED'
                    />
                    <path
                        d='M55.4638 81.1203H50.0938V75.5908H66.6349V81.1203H61.265V98.5077H55.4638V81.1203Z'
                        fill='#F4F2ED'
                    />
                    <path
                        d='M68.3206 98.494V75.5771H81.9088V81.1066H74.1217V84.1742H81.2163V89.7037H74.1217V92.9775H81.9088V98.507L68.3206 98.494Z'
                        fill='#F4F2ED'
                    />
                    <path
                        d='M97.0127 82.1255C95.8498 81.3779 93.6939 80.5788 92.0217 80.5788C90.3492 80.5788 89.7613 81.249 89.7613 82.0223C89.7613 82.5637 90.31 83.1308 91.2638 83.6722L93.9031 85.1545C96.9734 86.9074 98.2408 89.0341 98.2408 91.6892C98.2408 95.4657 95.7715 98.8556 90.1402 98.8556C87.919 98.8556 85.7369 98.3915 84.1953 97.7728V91.5345C85.4627 92.5141 87.8537 93.4808 89.9049 93.4808C91.2769 93.4808 92.0477 92.9782 92.0477 91.9986C92.0477 91.4572 91.6035 90.9545 90.506 90.3487L87.7361 88.815C84.4957 86.9976 83.542 84.9354 83.542 82.2028C83.542 78.8646 85.6324 75.2041 92.0477 75.2041C93.6549 75.2041 95.4971 75.5392 96.9996 76.1449L97.0127 82.1255Z'
                        fill='#F4F2ED'
                    />
                </svg>

                <div className='flex flex-col lg:gap-4 gap-10 md:items-end'>
                    <div className='flex lg:items-center gap-4 lg:gap-6 flex-col md:flex-row whitespace-nowrap flex-wrap justify-end'>
                        <div className='flex items-center gap-3'>
                            <Image
                                src={"/assets/phone.svg"}
                                width={36}
                                height={36}
                                alt=''
                            />
                            <Link
                                href={""}
                                className='text-base leading-normal '
                            >
                                0211 15764390
                            </Link>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Image
                                src={"/assets/msg.svg"}
                                width={36}
                                height={36}
                                alt=''
                            />
                            <Link
                                href={""}
                                className='text-base leading-normal hover:text-cyan1 transition-colors duration-150'
                            >
                                info@64bytes.de
                            </Link>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Image
                                src={"/assets/msg.svg"}
                                width={36}
                                height={36}
                                alt=''
                            />
                            <Link
                                href={""}
                                className='text-base leading-normal '
                            >
                                Witzelstraße 17 40225 Düsseldorf
                            </Link>
                        </div>
                    </div>

                    <div className='flex justify-between sm:justify-stretch sm:gap-6'>
                        <Link
                            href={""}
                            className='leading-normal text-sm hover:text-cyan1 transition-colors duration-150'
                        >
                            Impressum
                        </Link>
                        <Link
                            href={""}
                            className='leading-normal text-sm hover:text-cyan1 transition-colors duration-150'
                        >
                            Datenschutz
                        </Link>
                        <Link
                            href={""}
                            className='leading-normal text-sm hover:text-cyan1 transition-colors duration-150'
                        >
                            AGB
                        </Link>
                        <Link
                            href={""}
                            className='leading-normal text-sm hover:text-cyan1 transition-colors duration-150'
                        >
                            Barrierefreiheit
                        </Link>
                    </div>

                    <p className='text-sm text-gray1 leading-normal '>
                        © 64 BYTES GmbH
                    </p>
                </div>
            </div>
        </footer>
    );
}
