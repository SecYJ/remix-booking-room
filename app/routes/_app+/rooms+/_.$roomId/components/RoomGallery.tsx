import { useMediaQuery } from "~/hooks";
import DesktopGallery from "./DesktopGallery";
import MobileGallery from "./MobileGallery";

const RoomGallery = () => {
    const matchMedia = useMediaQuery("(min-width: 1024px)");

    return matchMedia ? <DesktopGallery /> : <MobileGallery />;
};

export default RoomGallery;
