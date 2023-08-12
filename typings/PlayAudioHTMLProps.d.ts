/**
 * This file was generated from PlayAudioHTML.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue } from "mendix";

export interface PlayAudioHTMLContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    audioEntity: ListValue;
}

export interface PlayAudioHTMLPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    audioEntity: {} | { caption: string } | { type: string } | null;
}
