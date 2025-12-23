const PricingTableComponent = () => {
    return (
        <article
            className="
                lg:h-137
                transition-all duration-300 ease-out
                opacity-0 translate-y-2
                animate-[fadeIn_300ms_ease-out_forwards]  
            "
        >
            <h2 className="text-xl text-current/70 text-center">Pricing Table</h2>

            <ul className="flex flex-col lg:flex-row gap-0 my-4">
                <li>
                    <div
                        className="
                            
                            lg:-mr-4

                            hover:scale-105 hover:z-20 hover:bg-white dark:hover:bg-black

                            relative
                            scale-95
                            flex flex-col gap-3    
                            w-80 h-118
                            p-6
                            border border-zinc-200/50 dark:border-zinc-500/50 rounded-xl
                            shadow-md
                            duration-500 ease-in-out
                        ">
                            <h3 className="text-xl font-semibold">Basic</h3>
                            <p><span className="text-3xl font-semibold">$100</span><span className="font-medium text-current/60">/project</span></p>
                            <p className="text-black/60 dark:text-white/60">For those who are just starting out and wanted something basic.</p>
                            <button className="py-2 text-sm font-semibold rounded-md bg-current/20 hover:bg-current/10">
                                Purchase Plan
                            </button>
                            <h4 className="text-lg font-semibold">Includes:</h4>
                            <ul className="flex flex-col gap-2 text-current/60">
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Unlimited placeholder texts
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Consectetur adipiscing elit
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Excepteur sint occaecat cupidatat
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Officia deserunt mollit anim
                                </li>
                            </ul>
                    </div>
                </li>
                
                <li>
                    <div
                        className="

                            hover:scale-105

                            relative z-10
                            flex flex-col gap-3
                            w-80 h-118
                            p-6
                            bg-black/80 dark:bg-white border border-zinc-500/50 dark:border-zinc-200/50 rounded-xl
                            shadow-md
                            duration-500 ease-in-out
                        ">
                            <div
                                className="
                                absolute -top-2 right-6
                                px-3 py-1
                                text-xs text-current/90 font-semibold
                                bg-green-500 rounded-full
                                "

                            >
                                Most Popular
                            </div>
                            <h3 className="text-xl text-white dark:text-black font-semibold">Standard</h3>
                            <p className="text-white dark:text-black"><span className="text-3xl font-semibold">$150</span><span className="font-medium text-current/60">/project</span></p>
                            <p className="text-white/60 dark:text-black/60">For those who knows and do exactly what they want.</p>
                            <button className="py-2 text-sm font-semibold rounded-md text-white dark:text-black bg-current/20 hover:bg-current/10">
                                Purchase Plan
                            </button>
                            <h4 className="text-lg text-white dark:text-black font-semibold">Includes:</h4>
                            <ul className="flex flex-col gap-2 text-white/60 dark:text-black/60">
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Unlimited placeholder texts
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Consectetur adipiscing elit
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Excepteur sint occaecat cupidatat
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Officia deserunt mollit anim
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Predefined chunks as necessary
                                </li>
                            </ul>
                    </div>
                </li>

                <li>
                    <div
                        className="

                            lg:-ml-4

                            hover:scale-105 hover:z-20 hover:bg-white dark:hover:bg-black
                            
                            relative
                            scale-95
                            flex flex-col gap-3
                            w-80 h-118
                            p-6
                            border border-zinc-200/50 dark:border-zinc-500/50 rounded-xl
                            shadow-md
                            duration-500 ease-in-out
                        ">
                            <h3 className="text-xl font-semibold">Premium</h3>
                            <p><span className="text-3xl font-semibold">$200</span><span className="font-medium text-current/60">/project</span></p>
                            <p className="text-black/60 dark:text-white/60">For those who always wants something extra cause they can.</p>
                            <button className="py-2 text-sm font-semibold rounded-md bg-current/20 hover:bg-current/10">
                                Purchase Plan
                            </button>
                            <h4 className="text-lg font-semibold">Includes:</h4>
                            <ul className="flex flex-col gap-2 text-current/60">
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Unlimited placeholder texts
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Consectetur adipiscing elit
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Excepteur sint occaecat cupidatat
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Officia deserunt mollit anim
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Predefined chunks as necessary
                                </li>
                                <li>
                                    <span className="text-green-500 px-1">&#10004;</span> Free from repetition
                                </li>
                            </ul>
                    </div>
                </li>
            </ul>
        </article>
    )
}

export default PricingTableComponent;