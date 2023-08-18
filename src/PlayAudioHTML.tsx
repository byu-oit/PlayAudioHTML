import { Component, ReactNode, createElement } from "react";

import { PlayAudioHTMLContainerProps } from "../typings/PlayAudioHTMLProps";
import { PlayAudio } from "./components/PlayAudio";

import "./ui/PlayAudioHTML.css";

export default class PlayAudioHTML extends Component<PlayAudioHTMLContainerProps> {
    render(): ReactNode {
        return <PlayAudio
            style={this.props.style}
            tabIndex={this.props.tabIndex}
            audioEntity={this.props.audioEntity}
            isDesignMode={false}
        />
    }
}
