/* @flow */

import classNames from 'classnames';
import React from 'react';

import 'bootstrap.css';

export enum AlertType {
    Success,
    Info,
    Warning,
    Danger,
}

const alertTypeToCSS = new Map<AlertType, string>([
    [AlertType.Success, 'alert-success'],
    [AlertType.Info, 'alert-info'],
    [AlertType.Warning, 'alert-warning'],
    [AlertType.Danger, 'alert-danger'],
]);

export type AlertProps = {
    className?: string,
    onDismiss?: () => void,
    type: AlertType,
};

// throw new Error('bad sourcemap');

export class Alert extends React.Component<AlertProps> {
    static Types = AlertType;
    static contextTypes = {
        themeClass: React.PropTypes.string,
    };

    render() {
        const { className, onDismiss, type, children } = this.props;
        const finalClassName = classNames(
            className,
            'alert',
            alertTypeToCSS.get(type),
            { 'alert-dismissible': onDismiss != null },
        );
        return (
            <div className={finalClassName}>
                {
                    // throw new Error('good sourcemap')
                    onDismiss && <button type="button" className="close" onClick={onDismiss}>&times;</button>
                }
                {children}
            </div>
        );
    }
}
