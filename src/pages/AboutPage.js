
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'


function AboutPage() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:768px)' }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

    const AboutPageComponent = styled.div`
    `;

    const AboutPageComponent_Mob = styled.div`
         display: flex;
         flex-direction: column;
         align-items: center;
`;
    return (
        <AboutPageComponent>
            {isDesktopOrMobile !== true ?
                <div>

                </div>
                :
                <AboutPageComponent_Mob>

                </AboutPageComponent_Mob>
            }
        </AboutPageComponent>
    );
}

export default AboutPage;