import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return(
    <Container>
      <Section
          title="Model S"
          descriptiopn="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      />
      <Section
          title="Model Y"
          descriptiopn="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      />
      <Section
          title="Model 3"
          descriptiopn="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      />
      <Section
          title="Model X"
          descriptiopn="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
      />
      <Section
          title="Lowest Cost Solar Panels in America"
          descriptiopn="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
      />
      <Section
          title="Solar for New Roofs"
          descriptiopn="Solar Roof Costs Less Than a New Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
      />
      <Section
          title="Accessories"
          descriptiopn=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100v;
`
