import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap.css';

export const AlertType = {
    Success: 'Success',
    Info: 'Info',
    Warning: 'Warning',
    Danger: 'Danger',
}

const alertTypeToCSS = new Map([
    [AlertType.Success, 'alert-success'],
    [AlertType.Info, 'alert-info'],
    [AlertType.Warning, 'alert-warning'],
    [AlertType.Danger, 'alert-danger'],
]);

throw new Error('bad sourcemap');

class Alert extends React.Component {
    render() {
        // throw new Error('good sourcemap')
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
                    onDismiss && <button type="button" className="close" onClick={onDismiss}>&times;</button>
                }
                {children}
            </div>
        );
    }
}

Alert.propTypes = {
  className: PropTypes.string,
  onDismiss: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export { Alert };
