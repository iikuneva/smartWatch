import React, { Component } from 'react';



class Input extends Component {
    render() {
        const { name, type = 'text', value, onChange, label, placeholder } = this.props;
        return (
            <div className="col-sm-10 col-lg-6 m-4">
                {label}
                <input
                    className="form-control"
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    type={type}
                    value={value} />
            </div>
        );
    }
}

export default Input