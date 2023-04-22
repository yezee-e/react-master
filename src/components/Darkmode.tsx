import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../\batoms';

const ToggleBtn = styled.button`
  background-color: inherit;
  border: none;
  font-size: 30px;
`;

function Darkmode() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => {
    setDarkAtom((prev) => !prev);
  };
  return <ToggleBtn onClick={toggleDarkAtom}>{isDark ? '🌚' : '🌞'}</ToggleBtn>;
}

export default Darkmode;
