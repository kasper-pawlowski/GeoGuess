import { useState } from 'react';
import Spinner from '../Spinner';
import { ImageWrapper, Img } from './Image.styles';

const Image = ({ src }) => {
    const [loading, isLoading] = useState(true);

    return (
        <>
            {loading && (
                <ImageWrapper>
                    <Spinner />
                </ImageWrapper>
            )}
            <Img src={src} alt="" onLoad={() => isLoading(false)} style={{ display: loading ? 'none' : 'block' }} />
        </>
    );
};

export default Image;
