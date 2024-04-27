import { cn } from "~/utils/cn";

interface Props {
    length: number;
    onSelect: (idx: number) => void;
    selectedIndex: number;
}

const Thumbnails = ({ length, onSelect, selectedIndex }: Props) => {
    return (
        <ul className="flex gap-2">
            {Array.from({ length }, (_, idx) => (
                <li key={idx}>
                    <button
                        type="button"
                        onClick={() => onSelect(idx)}
                        className={cn(
                            "h-1 rounded-full",
                            selectedIndex === idx
                                ? "w-15 bg-primary-100"
                                : "w-8 bg-primary-40",
                        )}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Thumbnails;
