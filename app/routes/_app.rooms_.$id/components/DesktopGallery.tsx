const DesktopGallery = () => {
    return (
        <section className="relative grid max-h-[600px] min-h-[600px] grid-cols-4 grid-rows-2 gap-2 bg-primary-10 p-20 [&_img]:size-full">
            <button
                type="button"
                className="absolute bottom-30 right-30 size-fit rounded-lg border border-primary-100 bg-white px-8 py-4 text-primary-100"
            >
                看更多
            </button>

            <img
                src="/assets/mobile/room2-1.png"
                className="col-span-2 row-span-full rounded-bl-[1.25rem] rounded-tl-[1.25rem]"
                alt=""
            />
            <img
                src="/assets/mobile/room2-2.png"
                className="col-start-3"
                alt=""
            />
            <img
                src="/assets/mobile/room2-3.png"
                className="col-start-4 rounded-tr-[1.25rem]"
                alt=""
            />
            <img
                src="/assets/mobile/room2-4.png"
                className="col-start-3 row-start-2"
                alt=""
            />
            <img
                src="/assets/mobile/room2-5.png"
                className="col-start-4 row-start-2 rounded-br-[1.25rem]"
                alt=""
            />
        </section>
    );
};

export default DesktopGallery;
