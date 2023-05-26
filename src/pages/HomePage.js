import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'




function HomePage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
    const HomePageComponent = styled.div`
           background-color: '#1A1A1A';

    `;

const HomePageComponent_Mob = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
`;

    return (
        <HomePageComponent>
            {isDesktopOrMobile !== true ?
                <div>
                </div>
                :
                <HomePageComponent_Mob>

                </HomePageComponent_Mob>
            }
        </HomePageComponent>
    );
}

export default HomePage;

