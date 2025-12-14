const AboutUs = () => {
    return (
        <>
            <section
                id="about"
                className="p-6 flex flex-col justify-center items-center gap-4"
            >
                <h2 className="text-2xl font-bold">About Us</h2>
                <p className="text-center w-full">This section explains what the project is, why it exists, and what someone can expect to find here. It gives context and background for the rest of the page.</p>
                <button className="border rounded-xl px-4 h-10 font-semibold text-white dark:text-black bg-black dark:bg-white">
                    Read More
                </button>
            </section>
        </>
    )
}

export default AboutUs;