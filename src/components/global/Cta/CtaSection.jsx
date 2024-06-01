import React from "react";
import Button from "../Button/Button";
import {
  CtaContainer,
  CtaWrap,
  CtaContent,
  CtaHeader,
  CtaSubHeader,
  CtaButton,
  MobileButton,
} from "./CtaSectionStyles";

const CtaSection = ({ data }) => {
  return (
    <>
      <CtaContainer id="cta-container">
        <CtaWrap>
          <CtaContent>
            <CtaHeader>{data.header}</CtaHeader>
            <CtaSubHeader>{data.subHeader}</CtaSubHeader>
            <MobileButton>
              <Button
                link={data.button.link}
                primary="true"
              >
                {data.button.title}
              </Button>
            </MobileButton>
          </CtaContent>
          <CtaButton>
            <Button link={data.button.link} primary="true">
              {data.button.title}
            </Button>
          </CtaButton>
        </CtaWrap>
      </CtaContainer>
    </>
  );
};

export default CtaSection;
