import { subjects } from "../../data/subjects";
import SubjectLayout from "@/components/SubjectLayout";

interface Params {
    params: { slug: string };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const subject = subjects.find((s) => s.slug === params.slug);

    if (!subject) {
        return {
            title: "Subject Not Found | AssignmentsWallah",
            description: "The subject you're looking for could not be found.",
        };
    }

    return {
        title: `${subject.title} | AssignmentsWallah`,
        description: subject.description,
        openGraph: {
            title: `${subject.title} | AssignmentsWallah`,
            description: subject.description,
            url: `https://assignmentswallah.com/subjects/${params.slug}`,
        },
        twitter: {
            title: `${subject.title} | AssignmentsWallah`,
            description: subject.description,
        },
    };
}

export default function SubjectPage({ params }: Params) {
    const subject = subjects.find((s) => s.slug === params.slug);

    if (!subject) return <p>Subject not found</p>;

    const { title, description, hero, content, faqs } = subject;

    return (
        <SubjectLayout title={title} description={description}>
            {/* ===== Hero Section ===== */}
            {hero && (
                <section
                    style={{
                        position: "relative",
                        color: "white",
                        padding: "150px 20px",
                        textAlign: "center",
                        marginBottom: "40px",
                        overflow: "hidden",
                    }}
                >
                    {/* === Background Image with opacity === */}
                    {hero.backgroundImage && (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                backgroundImage: `url(${hero.backgroundImage})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                opacity: 0.9, // 👈 lower opacity for better text visibility
                                zIndex: 0,
                            }}
                        />
                    )}

                    {/* === Optional overlay gradient === */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
                            zIndex: 0,
                        }}
                    />

                    {/* === Hero Text === */}
                    <div style={{ position: "relative", zIndex: 1, }}>
                        <h1
                            style={{
                                fontSize: "3rem",
                                fontWeight: "bold",
                                marginBottom: "10px",
                            }}
                        >
                            {hero.heading || title}
                        </h1>
                        <p
                            style={{
                                fontSize: "1.25rem",
                                maxWidth: "700px",
                                margin: "0 auto 30px",
                            }}
                        >
                            {hero.subheading || description}
                        </p>

                        <a
                            href="https://wa.me/917763875269?text=Looking%20for%20Academic%20Help%21%21"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                background: "linear-gradient(90deg, #ff7a18, #ffb347)",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                color: "#fff",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "background 0.3s ease",
                            }}
                        >
                            Contact on WhatsApp
                        </a>
                    </div>
                </section>
            )}

            {/* ===== Main Content ===== */}
            <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{
                        lineHeight: "1.8",
                        fontSize: "1.1rem",
                        color: "#333",
                    }}
                    className="subject-content"
                />
            </section>


            {/* ===== FAQ Section ===== */}
            {faqs && faqs.length > 0 && (
                <section
                    style={{
                        backgroundColor: "#f9f9f9",
                        padding: "60px 20px",
                        borderRadius: "8px",
                        marginTop: "60px",
                    }}
                >
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "30px",
                            fontSize: "2rem",
                            fontWeight: "600",
                            color:"black"
                        }}
                    >
                        Frequently Asked Questions
                    </h2>

                    <div style={{ maxWidth: "900px", color:"#333", margin: "0 auto" }}>
                        {faqs.map((faq, index) => (
                            <details key={index} style={faqStyle}>
                                <summary style={summaryStyle}>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>
            )}
        </SubjectLayout>
    );
}

const faqStyle: React.CSSProperties = {
    marginBottom: "20px",
    padding: "15px 20px",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const summaryStyle: React.CSSProperties = {
    fontWeight: "600",
    fontSize: "1.1rem",
    cursor: "pointer",
};
