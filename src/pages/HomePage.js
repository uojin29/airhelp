import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import {React} from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' });
    const HomePageComponent = styled.div`
        background-image: url("img/background.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const ContentContainer = styled.div`
        background-color: rgba(255, 255, 255, 0.6);
        padding: 20px;
        text-align: center;
    `;

    const navigate = useNavigate();
 
    const navigateToPurchase = () => {
        navigate("/Booking");
    };

    
    return (
        <HomePageComponent>
            {isDesktopOrMobile !== true ? (
                <div>
                    <ContentContainer>
                        <h1>당신의 여행을 위해 콜밴을 예약하세요!</h1>
                        <p>AirportHelp Center Int'l is a new transportation company,</p> 
                        <p>specializing 'door to door' service, particularly for the passengers arriving/departing at Incheon Int'l Airport.</p>
                        <br/>
                        <Button variant="outlined" onClick={navigateToPurchase} style={{ margin: '5px' }}>출발 예약하기</Button>
                        <Button variant="outlined" onClick={navigateToPurchase} style={{ margin: '5px' }}>도착 예약하기</Button>
                        <Button variant="outlined" style={{ margin: '5px' }}>예약 확인하기</Button>
                    </ContentContainer>
                </div>
            ) : (
                <div>
                    <ContentContainer>
                        <h1>당신의 여행을 위해 콜밴을 예약하세요!</h1>
                        <p>AirportHelp Center Int'l is a new transportation company, specializing 'door to door' service, particularly for the passengers arriving/departing at Incheon Int'l Airport.</p>
                            <Button variant="outlined" onClick={navigateToPurchase} style={{ margin: '2px' }}>출발 예약하기</Button>
                            <Button variant="outlined" onClick={navigateToPurchase} style={{ margin: '2px' }}>도착 예약하기</Button>
                            <Button variant="outlined" style={{ margin: '2px' }}>예약 확인하기</Button>
              
                    </ContentContainer>
                </div>
            )}
        </HomePageComponent>
    );
}

export default HomePage;
