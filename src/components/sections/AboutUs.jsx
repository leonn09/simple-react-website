const AboutUs = () => {
    const card = "w-75 h-10 p-4 font-medium border-2 rounded-3xl flex justify-center items-center";

    return (
        <>
            <section
                id="about"
                className="p-6 flex flex-col justify-center items-center gap-4 "
            >
                <h2 className="text-2xl font-bold">About Us</h2>
                <p className="text-center w-full">This section explains what the project is, why it exists, and what someone can expect to find here. It gives context and background for the rest of the page.</p>
                <div className="grid gap-2 sm:grid-cols-2">
                    <div className={card}>
                        Component-Based Architecture
                    </div>
                    <div className={card}>
                        Responsive Layout
                    </div>
                    <div className={card}>
                        Dark Mode Support
                    </div>
                    <div className={card}>
                        Clean Structure
                    </div>
                </div>
                <button className="border rounded-3xl px-4 h-10 font-semibold bg-black dark:bg-white text-white dark:text-black">
                    Read More
                </button>
            </section>
        </>
    )
}

export default AboutUs;