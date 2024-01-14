import NewsSkelaton from "@/components/widgets/news/NewsSkelaton";
import Section from "@/components/ui/section";
import NewsItem from "@/components/widgets/news/NewsItem";

function NewsSection({ items, loading, title }) {
    return (
        <Section title={title}>
            <div className="grid grid-cols-2 gap-[20px]">
                {loading && (
                    <>
                        <NewsSkelaton />
                        <NewsSkelaton />
                        <NewsSkelaton />
                        <NewsSkelaton />
                        <NewsSkelaton />
                        <NewsSkelaton />
                    </>
                )}
                {!loading && (
                    <>
                        {items.map((item, index) => (
                            <NewsItem
                                key={index}
                                item={item}
                            />
                        ))}
                    </>
                )}
            </div>
        </Section>
    );
}

export default NewsSection;