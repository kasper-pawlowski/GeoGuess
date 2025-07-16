import { useState } from 'react';
import Spinner from '../Spinner';
import { ImageWrapper, Img } from './Image.styles';

const Image = ({ src, onImageLoad }) => {
    const [loading, isLoading] = useState(true);

    const handleImageLoad = () => {
        isLoading(false);
        if (onImageLoad) {
            onImageLoad();
        }
    };

    return (
        <>
            {loading && (
                <ImageWrapper>
                    <Spinner />
                </ImageWrapper>
            )}
            <Img src={src} alt="" onLoad={handleImageLoad} style={{ display: loading ? 'none' : 'block' }} />
        </>
    );
};

export default Image;
