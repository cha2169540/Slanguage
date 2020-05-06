import MicRecorder from 'mic-recorder-to-mp3';
import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import "./style.css";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class UserAudio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        }
    };

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };

    render() {
        return (
            <div>
                <p className="youtry">Now you try! Click "Record."</p>
                <button className="recordbutton" onClick={this.start} disabled={this.state.isRecording}>
                    Record
                </button>
                <button className="stopbutton" onClick={this.stop} disabled={!this.state.isRecording}>
                    Stop
                </button>

                <Row>
                <audio className="audio" src={this.state.blobURL} controls="controls" />
                </Row>
            </div>
        )
    }
}

export default UserAudio;