import ReactLogo from "../ui/ReactLogo";
import TailwindLogo from "../ui/TailwindLogo";

const Footer = () => {
    return (
        <footer noValidate role="contentinfo" id="footer" className={`opacity-90 flex flex-col justify-center z-50 text-black/90 dark:text-white/90 bg-white dark:bg-black`}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 w-full">
                <div
                    className="
                        flex flex-col gap-4 col-span-2 lg:col-span-3
                        px-6 py-6 bg-zinc-200/20 backdrop-blur-sm
                    "
                >
                    <div className="flex items-center gap-2 font-medium text-xl">
                        <h3 className="flex items-center lg:text-[1rem]"><ReactLogo className="fill-current w-9 h-9" />React&nbsp;+&nbsp;<TailwindLogo className="w-9 h-9" />Tailwind CSS</h3>
                        
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <svg className="fill-current" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0901 22.5958C11.2059 22.6753 11.2981 22.7366 11.3626 22.7788L11.4687 22.8472C11.7933 23.0504 12.2061 23.0508 12.5307 22.8476L12.6375 22.7788C12.7019 22.7366 12.7941 22.6753 12.9099 22.5958C13.1415 22.4367 13.4685 22.2041 13.8591 21.9041C14.6386 21.3054 15.6801 20.4322 16.7247 19.3336C18.7857 17.1661 21 13.9725 21 10.1818C21 7.75381 20.0571 5.42084 18.3719 3.69728C16.6859 1.97296 14.3943 1 12 1C9.60571 1 7.31415 1.97296 5.62814 3.69728C3.94288 5.42084 3 7.75381 3 10.1818C3 13.9725 5.21434 17.1661 7.27531 19.3336C8.31993 20.4322 9.36136 21.3054 10.1409 21.9041C10.5315 22.2041 10.8585 22.4367 11.0901 22.5958ZM12 3C10.1508 3 8.37273 3.75107 7.05815 5.09552C5.74283 6.44073 5 8.26992 5 10.1818C5 13.2007 6.78566 15.9162 8.72469 17.9554C9.68007 18.9602 10.6386 19.7646 11.3591 20.3179C11.6046 20.5065 11.8215 20.6651 12 20.7918C12.1785 20.6651 12.3954 20.5065 12.6409 20.3179C13.3614 19.7646 14.3199 18.9602 15.2753 17.9554C17.2143 15.9162 19 13.2007 19 10.1818C19 8.26992 18.2572 6.44073 16.9418 5.09552C15.6273 3.75107 13.8492 3 12 3Z" />
                        </svg>
                        <p className="font-semibold">Address</p>
                    </div>
                    <div className="text-[0.8rem] flex flex-col gap-2 max-w-[24rem]">
                        <p><span className="text-[1.1rem] font-semibold">01. </span>Address 1</p>
                        <p><span className="text-[1.1rem] font-semibold">02. </span>Address 2</p>
                    </div>
                </div>
                <nav
                    className="
                        flex flex-col gap-2 lg:col-span-2 
                        p-6
                        text-[0.8rem]
                        backdrop-blur-sm
                    "
                    aria-labelledby="footer-categories"
                >
                    <h3 id="footer-categories" className="text-[0.9rem] font-semibold">Top Categories</h3>
                    
                    <span className="block h-0.5 w-16 my-4 bg-current"></span>
                    
                    <ul className="flex flex-col gap-2">
                        <li><a href="#">Category 1</a></li>
                        <li><a href="#">Category 2</a></li>
                        <li><a href="#">Category 3</a></li>
                    </ul>
                </nav>
                <nav
                    className="
                        flex flex-col gap-2 lg:col-span-2 
                        p-6
                        text-[0.8rem]
                        bg-zinc-200/30 backdrop-blur-sm
                    "
                    aria-labelledby="footer-links"
                >
                    <h3 id="footer-links" className="text-[0.9rem] font-semibold">Important Links</h3>
                    
                    <span className="block h-0.5 w-16 my-4 bg-current"></span>
                    
                    <ul className="flex flex-col gap-2">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </nav>
                <div className="lg:col-span-3 p-6 flex flex-col gap-1 md:items-center text-[0.8rem] col-span-2 md:col-span-4 bg-zinc-50/30 backdrop-blur-sm ">
                    <h3 className="text-[1rem] font-semibold">Newsletter</h3>
                    <span className="block h-0.5 w-16 my-4"></span>
                    <p>Enter your email to receive our latest updates about our products.</p>
                    <form className="flex items-center my-4 w-70 h-12">

                        <label htmlFor="newsletter-email" className="sr-only">
                            Email address
                        </label>

                        <input
                            id="newsletter-email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="h-full w-full p-3 pr-20 rounded bg-zinc-950/20 placeholder-current focus:outline-none"
                        />

                        <button
                            type="submit"
                            className="-ml-24 h-10 bg-zinc-500/30 hover:bg-zinc-500/80 text-sm px-4 py-1.5 rounded"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="px-4 py-2 z-9 w-full bg-zinc-700/10 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <p className="text-sm">
                    © 2025 Leonard Campano  
                </p>
                <div className="flex items-center md:justify-end gap-4">
                    <a href="#" aria-label="Follow us on Facebook">
                        <svg
                            aria-hidden="true"
                            className="fill-current"
                            width="25px"
                            height="25px"
                            viewBox="0 0 1920 1920"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Facebook</title>
                            <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058" fillRule="evenodd"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Follow us on Twitter">
                        <svg
                            aria-hidden="true" 
                            width="25px"
                            height="25px"
                            viewBox="0 -2 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            
                            <title>twitter [#154]</title>
                            <desc>Created with Sketch.</desc>
                            <defs>

                            </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g className="fill-current" id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">

                            </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="#" aria-label="Follow us on Instagram">
                        <svg
                            aria-hidden="true"
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Instagram</title>
                            <path className="fill-current" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Follow us on LinkedIn">
                        <svg
                            aria-hidden="true"
                            width="35px"
                            height="35px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>LinkedIn</title>
                            <path className="fill-current" d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;