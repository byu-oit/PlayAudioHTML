import { Component, ReactNode, createElement } from "react";
import { PlayAudio } from "./components/PlayAudio";
import { PlayAudioHTMLPreviewProps } from "../typings/PlayAudioHTMLProps";

declare function require(name: string): string;

export class preview extends Component<PlayAudioHTMLPreviewProps> {
    render(): ReactNode {
        // const fileId = `[${this.props.fileId}]`;
        // return <PlayAudio
        //     fileId={fileId}
        return <PlayAudio/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/PlayAudioHTML.css");
}
