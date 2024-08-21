type HamburgerButtonProps = {
    isOpen: boolean;
    toggleSideBar: () => void;
}

export default function HamburgerButton({ isOpen, toggleSideBar }: HamburgerButtonProps) {

return (
    <button
        onClick={toggleSideBar}
        className="self-center w-10 h-10 m-1.5"
        aria-label="Toggle sidebar menu"
    >
        <div className="flex flex-col">
        <div className={`layers diagonal part-1 self-center ${isOpen ? "open rounded-sm" : "rounded-sm"}`}></div>
        <div className={`layers horizontal self-center ${isOpen ? "open rounded-sm" : "rounded-sm"}`}></div>
        <div className={`layers diagonal part-2 self-center ${isOpen ? "open rounded-sm" : "rounded-sm"}`}></div>
        </div>
    </button>
);
};
