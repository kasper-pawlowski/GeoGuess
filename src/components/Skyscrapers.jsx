import styled from 'styled-components';
import image from '../assets/image.png';

const Skyscrapers = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-repeat: repeat;
    background-image: url('${image}');
    background-repeat: repeat;
    background-position: bottom;
    z-index: -1;
`;

export default Skyscrapers;
