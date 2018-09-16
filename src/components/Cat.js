import React, { Component } from 'react';
import styled from 'styled-components';

const photo = [
    '/assets/img/features-icon-design.png',
    '/assets/img/features-icon-design.png',
    '/assets/img/features-icon-design.png',
    '/assets/img/features-icon-design.png'
]
class Cat extends Component {
    render() {
        return (
            <div>
                <div className="row">
            {
                photo.map(value => (
                        <div className="col-3">
                            <img src={value} />
                        </div>
                ))
            }
            </div>
            </div>
        );
    }
}

export default Cat;
