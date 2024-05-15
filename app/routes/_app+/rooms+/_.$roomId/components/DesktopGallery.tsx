import { cn } from "~/utils/cn";

const DesktopGallery = ({ gallery }: { gallery: string[] }) => {
    return (
        <section className="relative grid max-h-[600px] min-h-[600px] grid-cols-4 grid-rows-2 gap-2 bg-primary-10 p-20 [&_img]:size-full">
            <button
                type="button"
                className="absolute bottom-30 right-30 size-fit rounded-lg border border-primary-100 bg-white px-8 py-4 text-primary-100"
            >
                看更多
            </button>

            {gallery.map((img, index) => (
                <img
                    key={img}
                    src={img}
                    className={cn({
                        "col-span-2 row-span-full rounded-bl-[1.25rem] rounded-tl-[1.25rem]":
                            index === 0,
                        "col-start-3": index === 1,
                        "col-start-4 rounded-tr-[1.25rem]": index === 2,
                        "col-start-3 row-start-2": index === 3,
                        "col-start-4 row-start-2 rounded-br-[1.25rem]":
                            index === 4,
                    })}
                    alt={`room-${index + 1}`}
                />
            ))}
        </section>
    );
};

export default DesktopGallery;
