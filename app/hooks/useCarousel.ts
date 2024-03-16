import {
    EmblaCarouselType,
    EmblaOptionsType,
    EmblaPluginType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface CarouselConfig {
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
}

export const useCarousel = ({ options, plugins }: CarouselConfig) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, embla] = useEmblaCarousel(options, plugins);

    const onPrevChange = useCallback(() => embla?.scrollPrev(), [embla]);
    const onNextChange = useCallback(() => embla?.scrollNext(), [embla]);
    const scrollTo = useCallback(
        (idx: number) => embla?.scrollTo(idx),
        [embla],
    );

    const onSelect = useCallback(
        (e: EmblaCarouselType) => setSelectedIndex(e.selectedScrollSnap()),
        [],
    );

    useEffect(() => {
        embla?.on("select", onSelect);

        return () => {
            embla?.off("select", onSelect);
        };
    }, [embla, onSelect]);

    return {
        selectedIndex,
        onPrevChange,
        onNextChange,
        ref: emblaRef,
        scrollTo,
    };
};
