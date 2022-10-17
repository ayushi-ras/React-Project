import { Container, Row, Col } from 'react-grid-system';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <>
            <Container fluid style={{ padding: 0 }}>

                <Row nogutter>
                    <Col sm={3} lg={4}>
                        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" height={340} />
                    </Col>
                    <Col sm={3} lg={4}>
                        <img src="https://media.istockphoto.com/photos/interior-of-modern-loft-style-restaurant-with-fresh-flowers-and-picture-id1356890630?b=1&k=20&m=1356890630&s=170667a&w=0&h=EkRDv1B_raFg7uiktmA1BcZpZfPpsaX0OdCBLgs-jkw=" height={340} />
                    </Col>
                    <Col sm={3} lg={4}>
                        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" height={340} />
                    </Col>

                </Row>
            </Container>
            <div>
                <h1 style={{ color: "green", textAlign: "center" }}><u>
                    OUR STORY</u>
                </h1>
                <br />
                <p style={{ color: "white", textAlign: "center",padding:'20px' }}>Aute est officia exercitation aliqua ex incididunt ex aliqua veniam nulla quis excepteur. Proident nisi qui pariatur nulla do consequat velit tempor anim. Aliqua enim excepteur excepteur id voluptate labore pariatur proident commodo pariatur dolor eiusmod. Eu incididunt proident cupidatat irure dolore eiusmod et commodo adipisicing fugiat id.

                    Cillum irure duis laboris consequat magna reprehenderit qui eu qui. Lorem laboris ullamco laboris adipisicing commodo ad duis quis magna occaecat. Pariatur qui labore duis fugiat sunt pariatur adipisicing nisi velit irure sunt aliquip id tempor. Laborum occaecat velit qui voluptate culpa eu qui enim adipisicing.

                    Laborum nostrud do ea fugiat magna est tempor. Do ut culpa cillum dolore. Occaecat est nisi commodo excepteur magna cupidatat dolore eiusmod enim veniam quis dolor. Non sunt id incididunt officia qui. Tempor mollit do ullamco aute elit dolore. Consequat ex nisi commodo dolore est magna aliqua proident. Amet fugiat laborum laborum laboris aliqua dolore ut do exercitation.

                    Ipsum incididunt consectetur nulla tempor. Nisi consectetur quis anim amet eu. Officia excepteur commodo mollit minim dolore ex ipsum eu proident. Consectetur consequat non deserunt reprehenderit amet velit est ex incididunt laborum amet officia deserunt. Elit culpa proident in id.

                    Dolore commodo duis mollit velit esse culpa nostrud ea anim cillum esse. Esse mollit exercitation laboris Lorem voluptate ipsum consequat duis reprehenderit id sint tempor proident. Id ut nulla elit tempor magna fugiat.Cillum eu qui sint elit voluptate est dolor laborum culpa esse. Sit eiusmod ea labore adipisicing adipisicing irure non cillum dolore dolor irure commodo dolore consequat. Sit esse ex Lorem minim occaecat quis officia. Irure veniam in tempor minim id nostrud. Eiusmod eiusmod pariatur elit sint excepteur cillum commodo reprehenderit dolor sunt.</p>
            </div>
            <Footer/>
        </>
        

    );
};


export default About;