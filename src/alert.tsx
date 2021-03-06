import * as classNames from 'classnames';
import * as React from 'react';

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
                    //fail()
                    onDismiss && <button type="button" className="close" onClick={onDismiss}>&times;</button>
                }
                {children}
            </div>
        );
    }
}

function fail() {
    throw new Error();
}
