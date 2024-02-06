import Section from '@/components/ui/section'
import AuthorItem from '@/components/widgets/author/AuthorItem';

function AuthorSection({ items = [], loading }) {
    return (
        <Section title="Yazarlar">
            <div className="lg:grid lg:w-auto flex w-screen overflow-x-auto grid-cols-5 gap-[15px]">
                {items.map((item, index) => (
                    <AuthorItem
                        item={item}
                        key={index}
                    />
                ))}
            </div>
        </Section>
    );
}

export default AuthorSection;