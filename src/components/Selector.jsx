import './styles/Selector.css'
import { useSelectorContext } from './contexts/SelectorContext';

const Selector = () => {
    const { selected, setSelected } = useSelectorContext();

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (
        <div className="selector">
            <div className={`selector-item ${selected === "Email" ? "select" : ""}`}
                onClick={() => handleSelect("Email")}>
                Email
            </div>
            <div className={`selector-item ${selected === "User Id" ? "select" : ""}`}
                onClick={() => handleSelect("User Id")}>
                User Id
            </div>
            <div className={`selector-indicator ${selected === "Email" ? "email" : "user-id"}`} />
        </div >
    )
};

export default Selector;