import Card from "../ui/Card";

const Features = () => {
    return (
        <section
            id="features"
            className="text-center"
        >
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="p-6 flex flex-col justify-center items-center gap-4">
                <li>
                    <Card>
                        Component-Based Architecture
                    </Card>
                </li>
                <li>
                    <Card>
                        Responsive Layout
                    </Card>
                </li>
                <li>
                    <Card>
                        Dark Mode Support
                    </Card>
                </li>
                <li>
                    <Card>
                        Clean Structure
                    </Card>
                </li>
            </ul>
        </section>
    )
}

export default Features;