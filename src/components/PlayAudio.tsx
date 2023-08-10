import { CSSProperties, Component, ReactNode, createElement } from "react";
import { ListValue } from "mendix";
import classNames from "classnames";

export interface PlayAudioProps {
    className?: string;
    style?: CSSProperties;
    tabIndex?: number;
    hasError?: boolean;
    required?: boolean;
    disabled?: boolean;
    audioEntity?: ListValue;
}

export class PlayAudio extends Component<PlayAudioProps> {

    /**
     * The src attribute of the HTML <audio> element is a URL for the audio file.
     * Mendix stores audio in a specialization of System.FileDocument. The URL
     * for the FileDocument is https://{hostname}:{port}/file?guid={file-guid}.
     *
     * For example:
     *
     * https://musicapp/file?guid=8725724278696207
     * or
     * https://localhost:8080/file?guid=8725724278773485
     *
     * NOTE: the audioEntity must return a list of ObjectItem of only one row
     * with the currentObject. Use an XPath constraint in the widget Entity
     * attribute in Studio Pro like [id=$currentObject] or
     * [id='[%CurrentObject%]'] to constrain the list to just the currentObject.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
     */
    // TODO: remove unused or unnecessary parameters like style, hasError, required, disbled.
    render(): ReactNode {
        const className = classNames(this.props.className);
        const fileUrlRoot = window.location.protocol + "//" +
            window.location.hostname + ":" +
            window.location.port + "/" +
            "file?guid=";

        if (this.props.audioEntity?.status === 'available') {
            const ds = this.props.audioEntity;
            var itemcount = 0;
            var itemguid = "";
            ds?.items?.forEach((dataItem) => {
                itemcount++;
                itemguid = dataItem.id;
            });
            if (itemcount === 1) {
                return <div className={"outer-container"}>
                    <div className="widget-play-audio">
                        <audio className="audio-player" controls src={fileUrlRoot + itemguid}>Your browser does not support the <code>audio</code> element.</audio>
                    </div>
                </div>
            }
            else {
                console.log('ERROR: Data source for Play Audio HTML widget must return a list of only one row with the current object. Try using [id=$currentObject] or similar in the XPath constraint to constrain to just the current object.');
                return <div className={"outer-container"}>
                    <p style={{"color": "red"}}>Error displaying Play Audio HTML widget.</p>
                </div>
            }
        }
    }

}
