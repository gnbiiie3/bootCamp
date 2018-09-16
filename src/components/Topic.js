import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Text = styled.div`
    font-size: 100px;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-shadow:-5px 5px 5px rgba(0, 0, 0, 0.23);
`
const Col = styled.div`
    display: flex;
    justify-items: center;
`

const SlideContent = ['CARTOONS','WEB & APP','BRANDING']
class Topic extends React.Component {
    state = {
        position : 0,
    }
    
    componentDidMount() {
        setInterval(()=> {
            this.setState({position:this.state.position+1});
            if(this.state.position >2) {
                this.setState({position:0});
            }
        },1000);
    }

    render() {
        return(
        <React.Fragment>
            <Block className="row">
                <Text>I LOVE TO MAKE</Text>
            </Block>
            <Block className="row">
                <Text>{SlideContent[this.state.position]}</Text>
            </Block>
            <Block className="row">
                <Text>LOOK AWESOMES</Text>
            </Block>
    
        </React.Fragment>
        )
    }
}

export default Topic;