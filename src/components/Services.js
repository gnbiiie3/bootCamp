import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
    background-image:url('/assets/img/section-header-bg.png');
    background-repeat: no-repeat;
    width: 100%;
    height : 70px;
    text-align: center;
    background-position:center;
`

const Index = () => (
            <React.Fragment>
                <Label>
                    <h3>OUR MAIN SERVICES</h3>
                </Label>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum es mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta, euismod ut, mi. Aenean viverra rhoncus pede. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </React.Fragment>
)

export default Index;