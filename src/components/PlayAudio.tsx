import { CSSProperties, Component, ReactNode, createElement } from "react";
import classNames from "classnames";

export interface PlayAudioProps {
    fileId: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    id?: string;
    hasError?: boolean;
    required?: boolean;
    disabled?: boolean;
}

export class PlayAudio extends Component<PlayAudioProps> {

    render(): ReactNode {
        const className = classNames(this.props.className);
        const fileUrl = window.location.protocol + "//" +
            window.location.hostname + ":" +
            window.location.port + "/" +
            "file?guid=" + this.props.fileId;
        return <div className="widget-play-audio">
            <audio className="audio-player" controls src={fileUrl}>Your browser does not support the <code>audio</code> element.</audio>
        </div>
    }

}
