// import { MouseEvent } from "react";
import { useState } from "react";
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // items = [];

    // const getMessage = () => {
    //     return items.length == 0 ? <p>No Item Found</p> : null
    // }

    // event handler
    // const handleClick = (e: MouseEvent) => console.log(e)

    // const arr = useState(-1);
    // arr[0] // variable (selected index)
    // arr[1] // udater function
    return (
        <>
            <h1>{heading}</h1>
            {items.length == 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li key={item} className={
                        selectedIndex == index
                            ? "list-group-item active"
                            : "list-group-item"
                    } onClick={() => {setSelectedIndex(index); onSelectItem(item)}}>
                        {item}
                    </li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;
