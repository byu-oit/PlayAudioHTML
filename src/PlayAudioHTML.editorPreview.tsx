import { Component, ReactNode, createElement } from "react";
import { PlayAudio } from "./components/PlayAudio";
import { PlayAudioHTMLPreviewProps } from "../typings/PlayAudioHTMLProps";

declare function require(name: string): string;

export class preview extends Component<PlayAudioHTMLPreviewProps> {
    render(): ReactNode {
        // const fileId = `[${this.props.fileId}]`;
        // return <PlayAudio
        //     fileId={fileId}
        return <PlayAudio isDesignMode={true}/>;
        // return <audio className="audio-player" controls src="no source">Your browser does not support the <code>audio</code> element.</audio>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/PlayAudioHTML.css");
}
