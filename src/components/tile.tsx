import { CSSProperties, FC } from "react";
import { BackgroundColor } from "../core/types";

type Props = {
    color: BackgroundColor;
    letter: string;
}

export const Tile: FC<Props> = ({color, letter}) => {

    const style: CSSProperties = {
        height: '30px', 
        width: '30px', 
        border: '1px solid #000000', 
        boxShadow: '2px 2px #ff0000',
        backgroundColor: color,
    };

    return (
        <span style={style}>
            {letter}
        </span>
    )
} 