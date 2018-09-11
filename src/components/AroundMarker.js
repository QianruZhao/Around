import React from 'react';
import {
    Marker,
    InfoWindow,
} from "react-google-maps";

export class AroundMarker extends React.Component {
    state = {
        isOpen: false,
    }

    onToggleOpen = () => {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen,
            };
        });
    }

    render() {
        const { location, url, message, user } = this.props.post;
        const { lat, lon } = location;
        return (
            <Marker
                position={{ lat, lng: lon }}
                onMouseOver={this.onToggleOpen}
                onMouseOut={this.onToggleOpen}
            >
                {this.state.isOpen ?
                    <InfoWindow>
                        <div>
                            <img src={url} alt={message} className="around-marker-image"/>
                            <p>{`${user}: ${message}`}</p>
                        </div>
                    </InfoWindow> : null
                }
            </Marker>
        );
    }
}
