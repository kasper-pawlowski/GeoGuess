import React from 'react';
import { Link } from 'react-router-dom';
import { Button, InfoSection, InfoWrapper, Wrapper } from './InfoPage.styles';

const InfoPage = () => {
    return (
        <Wrapper>
            <h1>Quiz Architektoniczy</h1>
            <InfoWrapper>
                <InfoSection>
                    <h3>Lorem, ipsum.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo laudantium magnam ipsam nostrum dolorum, at porro similique
                        in delectus harum eos necessitatibus veniam quis laboriosam quos labore commodi? Maxime?
                    </p>
                </InfoSection>
                <InfoSection>
                    <h3>Lorem, ipsum.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo laudantium magnam ipsam nostrum dolorum, at porro similique
                        in delectus harum eos necessitatibus veniam quis laboriosam quos labore commodi? Maxime?
                    </p>
                </InfoSection>
                <InfoSection>
                    <h3>Lorem, ipsum.</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo laudantium magnam ipsam nostrum dolorum, at porro similique
                        in delectus harum eos necessitatibus veniam quis laboriosam quos labore commodi? Maxime?
                    </p>
                </InfoSection>
            </InfoWrapper>
            <Button as={Link} to="/">
                Powrót
            </Button>
        </Wrapper>
    );
};

export default InfoPage;
