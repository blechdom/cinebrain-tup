import React from "react";
import styled from "styled-components";
import { WACSlider } from "el-vis-audio";
import golfKnob from "../assets/golfball-75.png";

const TLoungePage: React.FC = () => {
  return (
    <>
      <div>
        <h1>T-Lounge Control</h1>
      </div>
      <MasterLevel>
        <h2>Main Audio</h2>
        <button>Connect</button>
        <WACSlider width={500} height={56} knobsrc={golfKnob} />
      </MasterLevel>
      <MasterLevel>
        <h2>Main Lights</h2>
        <button>Connect</button>
        <WACSlider width={500} height={56} knobsrc={golfKnob} />
      </MasterLevel>
    </>
  );
};

const MasterLevel = styled.div`
  padding: 15px;
  justify-content: left;
  margin: 20px 0;
`;

export default TLoungePage;
