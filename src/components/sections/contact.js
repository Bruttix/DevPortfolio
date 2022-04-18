import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  min-height: 100vh;
  padding: 0;
  background-color: brown;

  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin: 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
  
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    background: #FFAA00;
    color: #410000;
    font-weight: bolder;
    
  }
 .email-link:hover {
    ${({ theme }) => theme.mixins.bigButton};
    color: #FFAA00;

  }

`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Reach Out</h2>
      <p>I don't bite</p>
      <p>
        I’m currently looking for new opportunities relating to software development and great projects! I'm able to work
        anywhere in the United States; although, I do have a medium preference of East Coast locations.
        My inbox is always open, I'm always on the computer, If I don't reply within a timely means,
        please forgive me and send another email as I'm probably busy and overlooked your last email.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you; with more than just hey!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
