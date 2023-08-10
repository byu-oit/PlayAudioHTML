import { Component, ReactNode, Fragment, createElement } from "react";

import { PlayAudioHTMLContainerProps } from "../typings/PlayAudioHTMLProps";
import { PlayAudio } from "./components/PlayAudio";

import "./ui/PlayAudioHTML.css";

export default class PlayAudioHTML extends Component<PlayAudioHTMLContainerProps> {
    render(): ReactNode {
        return <PlayAudio
                className={this.props.class}
                style={this.props.style}
                tabIndex={this.props.tabIndex}
                audioEntity={this.props.audioEntity}
                />
    }
}
